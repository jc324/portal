<?php

namespace App\Http\Controllers;

use App\Mail\CertificateHardCopyRequest;
use App\Mail\NewCertificate;
use App\Mail\CertificateExpiresToday;
use App\Mail\CertificateRenewal;
use App\Mail\ExpiringCertificates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

use App\Models\Certificate;
use App\Models\Client;
use App\Models\Hed;
use Illuminate\Support\Facades\Mail;

class CertificatesController extends Controller
{
    // for admin
    public function get_client_certificates($client_id)
    {
        $certificates = Certificate::where(['client_id' => $client_id])->get()->reverse()->values();

        return $certificates;
    }

    // for admin
    public function add_client_certificate(Request $request, $client_id)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $certificate = new Certificate;
        $certificate->client_id = $client_id;
        $certificate->request_id = 0;
        $certificate->path = $path;
        $certificate->expires_at = date('Y-m-d H:i:s', strtotime('+1 year - 1 day')); // from now
        $certificate->save();

        $client = $certificate->client;
        // show tracker
        $client->update(['check_new_certs' => true]);
        $client->save();

        return response($certificate, 200);
    }

    public function add_client_certificate_auto_email(Request $request, $client_id)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $certificate = new Certificate;
        $certificate->client_id = $client_id;
        $certificate->request_id = 0;
        $certificate->path = $path;
        $certificate->expires_at = date('Y-m-d H:i:s', strtotime('+1 year - 1 day')); // from now
        $certificate->save();

        $client = $certificate->client;
        $client_name = $client->business_name;
        $to = $client->get_email();
        $cc = $client->get_hed_emails();
        // show tracker
        $client->update(['check_new_certs' => true]);
        $client->save();

        Mail::to($to)->cc($cc)->bcc(['Rafiq.umar@halalwatchworld.org'])->send(new NewCertificate($client_name));

        return response($certificate, 200);
    }

    // for client
    public function get_certificates(Request $request)
    {
        $client = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client
            : Client::where('user_id', $request->user()->id)->first();
        $certificates = Certificate::where(['client_id' => $client->id])->get()->reverse()->values();
        // hide tracker
        $client->update([
            'check_expired_certs' => false,
            'check_new_certs' => false
        ]);
        $client->save();

        return $certificates;
    }

    public function download_document_by_id($certificate_id)
    {
        $certificate = Certificate::findOrFail($certificate_id);
        $client = Client::findOrFail($certificate->client_id);
        $file_name = $client->business_name . " Certificate " . $certificate_id;
        $path = storage_path('app/' . $certificate->path);
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        $file_name .= " - " . $certificate->created_at;
        $file_name .= "." . $ext;

        return response()->download($path, $file_name);
    }

    public function update_certificate_expiration(Request $request, $certificate_id)
    {
        $certificate = Certificate::findOrFail($certificate_id);
        $certificate->update(['expires_at' => $request['expires_at']]);
        $certificate->save();

        return response($certificate, 200);
    }

    public function request_hard_copy(Request $request, $certificate_id)
    {
        $token = env('MEISTERTASK_TOKEN');
        $certification_section_id = 19222911;
        $client = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client
            : Client::where('user_id', $request->user()->id)->first();
        $client_name = $client->business_name;
        $to = $client->get_emails();

        // create meister task
        $guzzle = new \GuzzleHttp\Client();
        $body = json_encode([
            'name' => $client_name,
            'notes' => 'Certificate ID: ' . $certificate_id . "\nEmails: " . implode(", ", $to),
            'label_ids' => [9347247, 4981805],
            'status' => 1
        ]);
        $response = $guzzle->request('POST', 'https://www.meistertask.com/api/sections/' . $certification_section_id . '/tasks', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ],
            'body' => $body,
        ]);
        $response->getBody();

        Mail::to($to)->bcc(['Rafiq.umar@halalwatchworld.org'])->send(new CertificateHardCopyRequest($client_name, $certificate_id));

        return response("", 200);
    }

    public function set_tags(Request $request, $certificate_id)
    {
        $certificate = Certificate::findOrFail($certificate_id);
        $certificate->update(['tags' => $request['tags']]);
        $certificate->save();

        return response($certificate, 200);
    }

    /**
     * CRONJOBS
     */

    function certifcates_cron()
    {
        ignore_user_abort(true);
        $this->notify_expired_certs();
        $this->notify_pre_expired_certs();

        return response("", 200);
    }

    function notify_expired_certs()
    {
        $to = "Rafiq.umar@halalwatchworld.org";
        $expired_certs_table = "";
        $certs = Certificate::whereDate('expires_at', DB::raw('CURDATE()'))->get();

        if (!count($certs)) return;

        foreach ($certs as $cert) {
            $client = $cert->client;
            $client_name = $client->business_name;
            $to = $client->get_emails();

            // show tracker
            $client->update(['check_expired_certs' => true]);
            $client->save();

            // to client
            Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new CertificateExpiresToday($client_name));

            $expired_certs_table .= '|' . $client->business_name;
            $expired_certs_table .= '|' . $client->hed_name;
            $expired_certs_table .= '|' . $client->hed_email;
            $expired_certs_table .= '|' . $cert->created_at;
            $expired_certs_table .= '|[[DOWNLOAD]](https://portal.halalwatchworld.org/' . $cert->path . ")|\n";
        }

        // to admin/review-team
        Mail::to($to)->send(new ExpiringCertificates($expired_certs_table));
    }

    function notify_pre_expired_certs()
    {
        $certs = Certificate::whereDate('expires_at', date("Y-m-d", strtotime("+30 days")))->get();

        if (!count($certs)) return;

        foreach ($certs as $cert) {
            $client = $cert->client;
            $client_name = $client->business_name;
            $to = $client->get_emails();
            $form_d_link = $client->risk_type === "HIGH"
                ? "https://www.halalwatchworld.org/docsubmit/form-d-highrisk"
                : "https://www.halalwatchworld.org/docsubmit/form-d-lowrisk";

            // to client
            Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new CertificateRenewal($cert->id, $client_name, $form_d_link));
        }
    }
}
