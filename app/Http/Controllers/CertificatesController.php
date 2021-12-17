<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Certificate;
use App\Models\Client;

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
}
