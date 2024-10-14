<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\CertificateHardCopyRequest;
use App\Mail\NewCertificate;
use App\Mail\CertificateExpiresToday;
use App\Mail\CertificateRenewal;
use App\Mail\ExpiringCertificates;
use App\Models\Certificate;
use App\Models\Client;
use App\Models\Hed;
use App\Models\Facility;
use App\Models\Product;
use App\Models\FacilityCategories;
use App\Models\ProductCategories;
use App\Models\ReviewRequest;
use PhpOffice\PhpWord\TemplateProcessor;

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

    public function generate_facility_certificate($facility_id)
    {
        $facility = Facility::findOrFail($facility_id);
        $client = $facility->client;
        $file_name = $client->business_name . ' - facility_certificate_' . time() . '.docx';
        $registration_report_temp = resource_path() . '/templates/certificate_facility.docx';
        $tp = new TemplateProcessor($registration_report_temp);
        $facility_category_code = FacilityCategories::find($facility->category_id)->code;
        $qualified_id = $facility_category_code . $facility->id;
        $address = $facility->address . ', ' . $facility->city . ', ' . $facility->state . ', ' . $facility->zip;

        // \PhpOffice\PhpWord\Settings::setOutputEscapingEnabled(true);
        $tp->setValues([
            'FacilityName' => htmlspecialchars($facility->name),
            'FacilityAddress' => htmlspecialchars($address),
            'FacilityID' => $qualified_id,
            'DateStamped' => date("m/d/Y|g:iA T"),
            'DateIssued' => date('M jS, Y'),
            'DateExpires' => date('M jS, Y', strtotime('+1 year - 1 day'))
        ]);
        $tp->saveAs($file_name);

        // inject QR code
        if ($facility->client->qrcode) {
            $qrcode_path = storage_path('app/' . $facility->client->qrcode);
            $zip = new \ZipArchive();
            $zip->open($file_name);
            $zip->addFile($qrcode_path, 'word/media/image3.png');
            $zip->close();
        }

        return response()->download($file_name)->deleteFileAfterSend(true);
    }

    public function generate_products_certificate(Request $request, $facility_id)
    {
        $facility = Facility::findOrFail($facility_id);
        $client = $facility->client;
        $file_name = $client->business_name . ' - products_certificate_' . time() . '.docx';
        $registration_report_temp = resource_path() . '/templates/certificate_products.docx';
        $tp = new TemplateProcessor($registration_report_temp);
        $facility_category_code = FacilityCategories::find($facility->category_id)->code;
        $qualified_id = $facility_category_code . $facility->id;
        $address = $facility->address . ', ' . $facility->city . ', ' . $facility->state . ', ' . $facility->zip;
        $product_ids = $request->get('ids');
        $products_list = $product_ids
            ? Product::findMany(explode(',', $request->get('ids')))->toArray()
            : $facility->products()->get()->toArray();
        $products = array_add_count(
            'P',
            array_values($products_list) // reindex
        );
        $products_arr_clean = array_map(function ($product) use (&$facility, $facility_category_code) {
            $product['name'] = htmlspecialchars($product['name']);

            try {
                $product_category_code = ProductCategories::find($product['category_id'])->code;
                $qualified_id = $facility_category_code . $facility->id . '_' . $product_category_code . $product['id'];
                $product['QualifiedID'] = $qualified_id;
                return $product;
            } catch (\Throwable $th) {
                $product['QualifiedID'] = $product['id'];
                return $product;
            }
        }, $products);

        $product_chuncks = array_chunk($products_arr_clean, 10);
        $i = 0;
        $pages = array_map(function ($page) use (&$i, &$client, $address, $qualified_id) {
            $page = [
                'ClientName' => htmlspecialchars($client->business_name),
                'FacilityAddress' => htmlspecialchars($address),
                'FacilityID' => $qualified_id,
                'P' => '${P' . $i++ . '}',
            ];
            return $page;
        }, $product_chuncks);

        // \PhpOffice\PhpWord\Settings::setOutputEscapingEnabled(true);
        $tp->cloneBlock('Page', 0, true, false, $pages);

        foreach ($product_chuncks as $i => $products) {
            $products = $this->array_add_count('P' . $i, $products, 1 + $i * 10);
            $tp->cloneRowAndSetValues('P' . $i, $products);
        }

        $tp->setValues([
            'DateStamped' => date("m/d/Y|g:iA T"),
            'DateIssued' => date('M jS, Y'),
            'DateExpires' => date('M jS, Y', strtotime('+1 year - 1 day'))
        ]);
        $tp->saveAs($file_name);

        // inject QR code
        if ($facility->client->qrcode) {
            $qrcode_path = storage_path('app/' . $facility->client->qrcode);
            $zip = new \ZipArchive();
            $zip->open($file_name);
            $zip->addFile($qrcode_path, 'word/media/image3.png');
            $zip->close();
        }

        return response()->download($file_name)->deleteFileAfterSend(true);
    }

    private function array_add_count(string $keyName, array $arr, int $i = 1): array
    {
        $formatted = array_map(function ($item) use ($keyName, &$i) {
            $item[$keyName] = $i++;
            return $item;
        }, $arr);

        return $formatted;
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

            // create meister task
            $this->register_meister_card($client);

            // to client
            Mail::to($to)->cc(['support@halalwatchworld.org'])->send(
                new CertificateRenewal($cert->id, $client_name, $form_d_link)
            );
        }
    }

    // create meister task in "Client Renewal Tracking" (8323592)
    function register_meister_card(Client $client)
    {
        $token = env('MEISTERTASK_TOKEN');
        $section_id = 33153704; // First Contact
        $guzzle = new \GuzzleHttp\Client();
        $body = json_encode([
            'name' => $client->business_name,
            'notes' => 'Email: ' . $client->user->email,
            'status' => 1
        ]);
        try {
            $response = $guzzle->request('POST', 'https://www.meistertask.com/api/sections/' . $section_id . '/tasks', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                ],
                'body' => $body,
            ]);
            $response->getBody();
        } catch (\Throwable $th) {
        }
    }
}
