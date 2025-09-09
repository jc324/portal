<?php

namespace App\Http\Controllers;

use DateTime;

use App\Models\Ingredient;
use App\Models\Manufacturer;
use App\Models\ManufacturerDocument;
use App\Models\ReviewRequest;
use App\Mail\NewNeedsAssessmentQuestionnaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use GuzzleHttp\Client as GuzzleClient;

class WebhooksController extends Controller
{
    // webhook: https://portal.halalwatchworld.org/api/webhooks/meister-naq-card
    public function meister_naq_card(Request $request)
    {
        $data = $request->all();
        $token = env('MEISTERTASK_TOKEN');
        $notes = '';

        foreach ($data as $key => $value)
            $notes .= $key . ': ' . $value . "\n";

        $new_form_section_id = 19454541;
        $due_date = (new DateTime())->modify('+1 day')->format('Y-m-d H:i:s');
        $guzzle = new \GuzzleHttp\Client();
        $body = json_encode([
            'name' => $data['Company Name'],
            'notes' => $notes,
            'due' => $due_date,
            'status' => 1
        ]);
        $response = $guzzle->request('POST', 'https://www.meistertask.com/api/sections/' . $new_form_section_id . '/tasks', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ],
            'body' => $body,
        ]);
        $response->getBody();
    }

    // webhook: https://portal.halalwatchworld.org/api/webhooks/pandadoc-disclosure-stmt
    public function pandadoc_disclosure_stmt(Request $request)
    {
        $docs = $request->all();

        foreach ($docs as $doc) {
            if (!isset($doc['data'])) continue;

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

        return response('', 200);
    }

    // webhook: https://portal.halalwatchworld.org/api/webhooks/naq
    public function handle_naq(Request $request)
    {
        $new_form_section_id = 19454541;
        $data = $request->all();
        $token = env('MEISTERTASK_TOKEN');
        $notes = '';
        $details = '';

        foreach ($data as $key => $value) {
            $keyFormatted = ucwords(str_replace('_', ' ', $key));
            $valueFormatted = is_array($value) ? implode(', ', $value) : $value;
            $notes .= "{$keyFormatted}: {$valueFormatted}\n";
            $details .= "**{$keyFormatted}**: {$valueFormatted}\n\n";
        }

        $due_date = (new DateTime())->modify('+1 day')->format('Y-m-d H:i:s');
        $guzzle = new \GuzzleHttp\Client();
        $body = json_encode([
            'name' => $data['company_name'],
            'notes' => $notes,
            'due' => $due_date,
            'status' => 1
        ]);
        $response = $guzzle->request('POST', 'https://www.meistertask.com/api/sections/' . $new_form_section_id . '/tasks', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ],
            'body' => $body,
        ]);
        $response->getBody();

        $to = 'support@halalwatch.us';
        Mail::to($to)->send(new NewNeedsAssessmentQuestionnaire($details));
    }

    // webhook: https://portal.halalwatchworld.org/api/webhooks/call-form-proposal
    public function call_form_proposal(Request $request)
    {
        if ($request->get("Create_Proposal_Option") !== "Create New Proposal")
            return redirect()->back();

        $data = $request->all();
        $formatted_data_list = [];
        $long_fields = [
            'F0' => 'How did you hear about us',
            'F1' => 'What is it that brought you to the point of saying that you need to get Halal Certified',
            'F2' => 'For you to not get a certificate, does it impact your business in a negative way significantly',
            'F3' => 'Is this your first time attempting to gain halal certification',
            'F4' => 'How many employees do you currently have',
            'F5' => 'Are any of them knowledgeable about halal guidelines, or Islamic principles',
            'F6' => 'Are you producing products in one location, or other locations different to the address provided',
            'F7' => 'Does your company allow other companies to process, or manufacture your products on your behalf',
            'F8' => 'Who are you intending to sell products to',
            'F9' => 'Any Additional Information to Record/report',
        ];

        // Format the data for the email
        unset($data['submit']);
        unset($data['Create_Proposal_Option']);
        foreach ($data as $key => $val) {
            if (empty($val)) {
                continue;
            }
            if (isset($long_fields[$key])) {
                if (is_array($val)) {
                    $val = implode(", ", $val);
                }
                $formatted_data_list[] = $long_fields[$key] . ": " . $val;
                continue;
            }

            $key = str_replace('_', ' ', $key);
            $formatted_data_list[] = $key . ": " . $val;
        }

        $formatted_data = implode("; ", $formatted_data_list);
        $email = $data['Email_Address'];
        $client = new GuzzleClient();
        $token = env('PANDADOC_API_TOKEN');
        $TEMP_ID = "gEmpxsEKT8VBsiNxkfveFJ";
        $DIR_ID = "NoBxVZRCPThbH2JtJAyn9S";
        $body = json_encode([
            'template_uuid' => $TEMP_ID,
            'folder_uuid' => $DIR_ID,
            'tags' => ['Portal'],
            'name' => 'Halal Certification Proposal (' . $data['Company_Name'] . ')',
            'recipients' => [
                ['email' => 'support@halalwatchworld.org', 'role' => 'Sender'],
                ['email' => $email, 'role' => 'Client']
            ],
            'tokens' => [
                ['name' => 'Client.Company', 'value' => $data['Company_Name']],
                ['name' => 'Client.FirstName', 'value' => $data['First_Name']],
                ['name' => 'Client.LastName', 'value' => $data['Last_Name']],
                ['name' => 'Risk.Assessment', 'value' => $data['Risk_Assessment']],
                ['name' => 'Call.Form', 'value' => $formatted_data]
            ]
        ]);
        $_request = new \GuzzleHttp\Psr7\Request(
            'POST',
            'https://api.pandadoc.com/public/v1/documents',
            [
                'accept' => 'application/json',
                'Authorization' => 'API-Key ' . $token,
                'Content-Type' => 'application/json'
            ],
            $body
        );
        $promise = $client->sendAsync($_request)->then(function ($response) {
            return $response->getBody();
        });
        $promise->wait();

        // @TODO: use a better response view
        abort(403, 'Proposal created successfully.');
    }
}
