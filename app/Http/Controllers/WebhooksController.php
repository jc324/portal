<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Manufacturer;
use App\Models\ManufacturerDocument;
use App\Models\ReviewRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use GuzzleHttp\Client as GuzzleClient;

class WebhooksController extends Controller
{
    // webhook: https://portal.halalwatchworld.org/api/webhooks/pandadoc-disclosure-stmt
    public function pandadoc_disclosure_stmt(Request $request)
    {
        $docs = $request->all();

        foreach ($docs as $doc) {
            $data = $doc['data'];

            if ($data['status'] !== 'document.draft' || !isset($data['metadata']['review_request_id'])) continue;

            $review_request = ReviewRequest::findOrFail($data['metadata']['review_request_id']); // 29
            $manufacturer = Manufacturer::findOrFail($data['metadata']['manufacturer_id']);
            // create doc
            $document = new ManufacturerDocument;
            $document->manufacturer_id = $manufacturer->id;
            $document->type = 'CERTIFICATE_OR_DISCLOSURE';
            $document->status = 'SUBMITTED';
            $document->name = $data['name'];
            $document->note = '';
            $document->expires_at = null;
            $document->path = 'pandadoc:' . $data['id'];
            $document->save();
            // notify vendor
            $client = new GuzzleClient();
            $token = env('PANDADOC_API_TOKEN');
            $ingredients = Ingredient::where(
                ['review_request_id' => $review_request->id, 'manufacturer_id' => $manufacturer->id]
            )->get()->pluck('name');
            $product_list = $ingredients->count() ? '(' . implode(", ", $ingredients->toArray()) . '), ' : '';
            $email_body = 'Your company, (' . $manufacturer->name . ') and products, ' . $product_list . 'are being requested for Halal Vendor Approval by ' . $review_request->client->business_name . '. In full disclosure, signing of the form linked in this email gives halal producing companies the ability to purchase your listed products from the listed producing facility.';
            $_request = new \GuzzleHttp\Psr7\Request(
                'POST',
                'https://api.pandadoc.com/public/v1/documents/' . $data['id'] . '/send',
                [
                    'accept' => 'application/json',
                    'Authorization' => 'API-Key ' . $token,
                    'Content-Type' => 'application/json'
                ],
                json_encode([
                    'subject' => 'Halal Disclosure Statement',
                    'message' => $email_body,
                    'silent' => false,
                    'forwarding_settings' => [
                        'forwarding_allowed' => true,
                        'forwarding_with_reassigning_allowed' => true
                    ],
                ])
            );
            $promise = $client->sendAsync($_request)->then(function ($response) {
                return $response->getBody();
            });
            $promise->wait();
        }
    }

    // webhook: https://portal.halalwatchworld.org/api/webhooks/call-form-proposal
    public function call_form_proposal(Request $request)
    {
        if ($request->get("Create Proposal Option") !== "Create New Proposal")
            return response('', 200);

        $data = $request->all();
        $formatted_data_list = [];

        foreach ($data as $key => $val) {
            $formatted_data_list[] = $key . ": " . $val;
        }

        $formatted_data = implode("; ", $formatted_data_list);
        $email = $data['Email Address'];
        $risk = $data['Risk Assessment'];
        $client = new GuzzleClient();
        $token = env('PANDADOC_API_TOKEN');
        $TEMP_ID = "gEmpxsEKT8VBsiNxkfveFJ";
        $DIR_ID = "NoBxVZRCPThbH2JtJAyn9S";
        $_request = new \GuzzleHttp\Psr7\Request(
            'POST',
            'https://api.pandadoc.com/public/v1/documents',
            [
                'accept' => 'application/json',
                'Authorization' => 'API-Key ' . $token,
                'Content-Type' => 'application/json'
            ],
            json_encode([
                'template_uuid' => $TEMP_ID,
                'folder_uuid' => $DIR_ID,
                'tags' => ['Portal'],
                'name' => 'Halal Certification Proposal',
                'recipients' => [
                    ['email' => $email, 'role' => 'Client']
                ],
                'tokens' => [
                    ['name' => 'Risk.Assessment', 'value' => $risk],
                    ['name' => 'Call.Form', 'value' => $formatted_data]
                ]
            ])
        );
        $promise = $client->sendAsync($_request)->then(function ($response) {
            return $response->getBody();
        });
        $promise->wait();
    }
}
