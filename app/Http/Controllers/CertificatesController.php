<?php

namespace App\Http\Controllers;

use App\Mail\CertificateHardCopyRequest;
use App\Mail\ExpiringCertificates;
use App\Mail\NewCertificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Certificate;
use App\Models\Client;
use Illuminate\Support\Facades\DB;
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
        $certificate->expires_at = date('Y-m-d H:i:s', strtotime('+2 years - 45 days')); // from now
        $certificate->save();

        $client = $certificate->client;
        $to = $client->user->email;

        Mail::to($to)->send(new NewCertificate($client->business_name));

        return response($certificate, 200);
    }

    // for client
    public function get_certificates(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $certificates = Certificate::where(['client_id' => $client_id])->get()->reverse()->values();

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

    public function request_hard_copy($certificate_id)
    {
        // $to = "ap@halalwatchworld.org";
        $to = "rafiq.umar@halalwatchworld.org";
        // $subject = "PORTAL: CERTIFICATE HARD COPY REQUEST";

        Mail::to($to)->send(new CertificateHardCopyRequest($certificate_id));

        return response("", 200);
    }

    public function notify_expired_certs()
    {
        $to = "review@halalwatchworld.org";
        $expired_certs_table = "";
        $certs = Certificate::whereDate('expires_at', DB::raw('CURDATE()'))->get();

        if (!count($certs)) return;

        foreach ($certs as $cert) {
            $client = $cert->client;
            $expired_certs_table .= '|' . $client->business_name;
            $expired_certs_table .= '|' . $client->hed_name;
            $expired_certs_table .= '|' . $client->hed_email;
            $expired_certs_table .= '|' . $cert->created_at;
            $expired_certs_table .= '|[[DOWNLOAD]](http://127.0.0.1:8000/' . $cert->path . ")|\n";
        }

        Mail::to($to)->send(new ExpiringCertificates($expired_certs_table));
    }
}
