<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Certificate;
use App\Models\Client;

class CertificatesController extends Controller
{
    // for client
    public function get_certificates(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $certificates = Certificate::where(['client_id' => $client_id])->get();

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
