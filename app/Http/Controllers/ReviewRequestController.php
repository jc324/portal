<?php

namespace App\Http\Controllers;

use App\Mail\DocumentSubmissionCompleted;
use App\Mail\DocumentSubmissionReceived;
use App\Mail\FinalProgressReport;
use App\Mail\NewCorrections;
use App\Models\Certificate;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\ProgressReport;
use App\Mail\ScheduleAudit;
use App\Mail\DocumentFailures;
use App\Mail\VendorApprovalRequest;
use App\Models\ReviewRequest;
use App\Models\Profile;
use App\Models\User;
use App\Models\Facility;
use App\Models\Product;
use App\Models\Client;
use App\Models\FacilityCategories;
use App\Models\Hed;
use App\Models\Manufacturer;
use App\Models\ProductCategories;
use App\Models\Report;
use Illuminate\Support\Facades\Response;
use GuzzleHttp\Client as GuzzleClient;
use PhpOffice\PhpWord\Element\TextRun;
use PhpOffice\PhpWord\TemplateProcessor;

const REVIEW_REQUEST_TYPE_COLOR_MAP = array(
    'NEW_FACILITY' => "#0BD074",
    'NEW_PRODUCTS' => "#A585D5",
    'NEW_FACILITY_AND_PRODUCTS' => "#329FCD",
    'NEW_INGREDIENTS' => "#CE7F4E",
    'FACILITY_UPDATE' => "#F1980E",
    'PRODUCT_UPDATE' => "#E6152C",
    'INGREDIENT_UPDATE' => "#1CB0F3",
    'MANUFACTURER_UPDATE' => "#76BA24",
);

const REVIEW_REQUEST_STATUS_COLOR_MAP = array(
    'DRAFT' => "#E0E0E0",
    'SUBMITTED' => "#F6BA23",
    'IN_REVIEW' => "#329FCD",
    'APPROVED' => "#0BD074",
    'REJECTED' => "#F50057",
);

class ReviewRequestController extends Controller
{
    // for reviewer
    public function get_review_requests()
    {
        $review_requests = ReviewRequest::all()->reverse()->values();

        // color code request by type
        foreach ($review_requests as $review_request) {
            $client = $review_request->client;
            $client_user = User::find($client->user_id);
            $review_request->business_name = $client->business_name;
            $review_request->client_email = $client_user->email;
            $review_request->type_color = REVIEW_REQUEST_TYPE_COLOR_MAP[$review_request->type];
            $review_request->status_color = REVIEW_REQUEST_STATUS_COLOR_MAP[$review_request->status];
            $review_request->reviewer = Profile::where('user_id', $review_request->reviewer_id)->first();
            $review_request->hed = Profile::where('user_id', $review_request->hed_id)->first();
        }

        return $review_requests;
    }

    // for reviewer
    public function assign_reviewer(Request $request, $reviewRequestId)
    {
        $review_request = ReviewRequest::findOrFail($reviewRequestId);
        $review_request->reviewer_id = $request['reviewer_id'];
        $review_request->save();

        return response('', 200);
    }

    // for reviewer
    public function request_docs(Request $request, $reviewRequestId)
    {
        $rr = ReviewRequest::findOrFail($reviewRequestId);
        $data = $request->only(['manufacturer_id', 'email']);
        $manufacturer = Manufacturer::findOrFail($data['manufacturer_id']);
        $products = "";
        $ingredients = Ingredient::where([
            'review_request_id' => $reviewRequestId,
            'manufacturer_id' => $data['manufacturer_id']
        ])->get();
        $cc = ['review@halalwatchworld.org'];
        $cc[] = $rr->client->get_email();

        if ($rr->hed_id) $cc[] = User::find($rr->hed_id)->email;

        foreach ($ingredients as $ingredient) {
            $products .= " - " . $ingredient->name . "\n";
        }

        Mail::to($data['email'])->cc($cc)->send(new VendorApprovalRequest(
            $manufacturer->name,
            $request->user()->name,
            $rr->client->business_name,
            $products
        ));

        return response("", 200);
    }

    public function get_review_request(Request $request, $review_request_id)
    {
        $rr = ReviewRequest::findOrFail($review_request_id);

        if ($request->user()->role === "HED") {
            $rr->hed_id = $request->user()->id;
            $rr->save();
        }

        return $rr;
    }

    // for client
    public function get_client_review_requests(Request $request)
    {
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;

        $review_requests = ReviewRequest::where('client_id', $client_id)->orderBy('id', 'DESC')->get();

        // get reviewer, type_color and email
        foreach ($review_requests as $review_request) {
            $reviewer_user = User::find($review_request->reviewer_id);
            $review_request->reviewer = Profile::find($review_request->reviewer_id);
            // $review_request->reviewer = Profile::where('user_id', $review_request->reviewer_id)->first();
            $review_request->hed = Profile::where('user_id', $review_request->hed_id)->first();
            $review_request->is_locked = $review_request->is_locked($request->user()->id);
            $review_request->type_color = REVIEW_REQUEST_TYPE_COLOR_MAP[$review_request->type];
            $review_request->status_color = REVIEW_REQUEST_STATUS_COLOR_MAP[$review_request->status];
            if ($reviewer_user) $review_request->reviewer_email = $reviewer_user->email;
        }

        return $review_requests;
    }

    public function add_review_request(Request $request)
    {
        $client = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client
            : Client::where('user_id', $request->user()->id)->first();
        $data = $request->only('type');
        $data['client_id'] = $client->id;
        $data['reviewer_id'] = 0; // starts with no reviewer
        $data['status'] = "DRAFT"; // by default
        $data['current_step_index'] = 1; // next immediate step
        $data['hed_id'] = ($request->user()->role === "HED") ? $request->user()->id : null;

        if ($data['type'] === "NEW_FACILITY" || $data['type'] === "NEW_FACILITY_AND_PRODUCTS") {
            // create a facility
            $facility_data = [];
            $facility_data['client_id'] = $data['client_id'];
            $facility_data['category_id'] = 1;
            $facility_data['name'] = null;
            $facility_data['address'] = null;
            $facility_data['country'] = null;
            $facility_data['city'] = null;
            $facility_data['state'] = null;
            $facility_data['zip'] = null;

            $data['facility_id'] = Facility::create($facility_data)->id;
        } else {
            $data['facility_id'] = null;
        }

        $review_request = ReviewRequest::create($data);

        // @TODO improve
        if ($data['type'] === "NEW_FACILITY" || $data['type'] === "NEW_FACILITY_AND_PRODUCTS") {
            $facility = Facility::find($data['facility_id']);
            $facility->review_request_id = $review_request->id;
            $facility->save();
        }

        $has_appr_req = ReviewRequest::where(['client_id' => $client->id, 'status' => 'APPROVED'])->first() ? true : false;

        if ($has_appr_req) { // create meister task
            $token = env('MEISTERTASK_TOKEN');
            $new_registration_section_id = 31732922; // 18950074
            $guzzle = new \GuzzleHttp\Client();
            $body = json_encode([
                'name' => $client->business_name,
                'notes' => 'Registration ID: ' . $review_request->id . "\nType: " . str_replace("_", " ", $review_request->type),
                'label_ids' => [9347247, 4981805],
                'status' => 1
            ]);
            $response = $guzzle->request('POST', 'https://www.meistertask.com/api/sections/' . $new_registration_section_id . '/tasks', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                ],
                'body' => $body,
            ]);
            $response->getBody();
        }

        return $review_request;
    }

    public function update_review_request(Request $request, $review_request_id)
    {
        $data = $request->only(
            'facility_id',
            'type',
            'status',
            'current_step_index',
            'assured_space_check'
        );

        if ($request->user()->role === "HED") $data['hed_id'] = $request->user()->id;

        $review_request = ReviewRequest::where('id', $review_request_id);
        $review_request->update($data);

        if ($data['status'] == 'SUBMITTED') {
            // send confirmation email to client
            $client = Client::where('user_id', $request->user()->id)->first();
            $name = $client->business_name;
            $intro = "Dear " . $name . ",\n\n";
            $intro .= "This email is to confirm that your registration (ID: " . $review_request_id . ") for " . $data['type'] . " has been received.\n\n";
            $to = $client->get_emails();
            $body = "Dear Review Team,\n\n";
            $body .= $name . " completed their registration (ID: " . $review_request_id . ") for " . $data['type'] . ".\n\n";
            $link = "https://portal.halalwatchworld.org/reviewer/clients/request/" . $review_request_id . "/review";

            Mail::to($to)->send(new DocumentSubmissionReceived($intro));
            Mail::to("review@halalwatchworld.org")->send(new DocumentSubmissionCompleted($body, $link));
        }

        // @TODO set facility with given id
        // @TODO delete any associated products and facilities

        return $review_request->get()[0];
    }

    public function unassign_review_request_hed($review_requestId)
    {
        $review_request = ReviewRequest::findOrFail($review_requestId);
        $review_request->hed_id = null;
        $review_request->save();

        return response('', 200);
    }

    public function delete_review_request($review_requestId)
    {
        $review_request = ReviewRequest::findOrFail($review_requestId);

        // delete associated facility if not existing before request
        if ($review_request->type !== "NEW_PRODUCTS") {
            $facility = Facility::find($review_request->facility_id);
            if ($facility !== null) $facility->delete();
        }
        // delete products
        $products = Product::where('review_request_id', $review_request->id);
        if ($products !== null) $products->delete();
        // delete ingredients
        $ingredients = Ingredient::where('review_request_id', $review_request->id);
        if ($ingredients !== null) $ingredients->delete();
        // delete review request
        $review_request->delete();

        return response('', 200);
    }

    public function get_review_request_products($review_request_id)
    {
        $products = ReviewRequest::find($review_request_id)->products;

        foreach ($products as $product) {
            $ingredients = Ingredient::where([
                'product_id' => $product->id,
                'review_request_id' => $review_request_id
            ])->get();
            $product->ingredients = $ingredients;
            $product->documents;
        }

        return $products->reverse()->values();
    }

    // with docs
    public function get_review_request_products_docs($review_request_id)
    {
        $products = ReviewRequest::find($review_request_id)->products;

        foreach ($products as $product) {
            $ingredients = Ingredient::where([
                'product_id' => $product->id,
                'review_request_id' => $review_request_id
            ])->get();
            $product->ingredients = $ingredients;
            $product->documents;
        }

        return $products->reverse()->values();
    }

    public function get_review_request_ingredients($review_request_id)
    {
        return ReviewRequest::find($review_request_id)->ingredients->reverse()->values();
    }

    public function get_review_request_manufacturers($review_request_id)
    {
        $ingredients = Ingredient::where([
            'review_request_id' => $review_request_id
        ])->get();
        $manufacturer_ids = [];

        foreach ($ingredients as $ingredient) {
            $manufacturer_ids[] = $ingredient->manufacturer_id;
        }

        $manufacturer_ids = array_values(array_unique($manufacturer_ids));
        $manufacturers = Manufacturer::findMany($manufacturer_ids);

        foreach ($manufacturers as $manufacturer) {
            $manufacturer->documents;
        }

        return $manufacturers;
    }

    public function _download_documents_by_id($review_request_id)
    {
        $_review_request_id = 65;
        $review_request = ReviewRequest::findOrFail($_review_request_id);
        $headers = ["Content-Type" => "application/zip"];
        $zip = new \ZipArchive();
        $file_name = 'review_request_' . $review_request_id . '_documents.zip';
        $path = public_path($file_name);
        $documents = [];

        switch ($review_request->type) {
            case 'NEW_FACILITY':
                if ($rr_facility = Facility::find($review_request->facility_id))
                    $documents = $rr_facility->documents;
                break;

            default:
                return response('This request has no documents associated.', 404);
                break;
        }


        if ($zip->open($path, \ZipArchive::CREATE) == TRUE) {
            foreach ($documents as $doc) {
                $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                $entry_name = 'document_' . $doc->id . '_' . $doc->type . '.' . $ext;
                $zip->addFile(storage_path('app/' . $doc->path), $entry_name);
            }
            $zip->close();
        }

        return response()->download($path, $file_name, $headers)->deleteFileAfterSend(true);
    }

    public function download_documents_by_id($review_request_id)
    {
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $headers = ["Content-Type" => "application/zip"];
        $zip = new \ZipArchive();
        $file_name = 'review_request_' . $review_request_id . '_documents.zip';
        $path = public_path($file_name);
        $documents = [];
        $review_request_info = "# Review Request " . $review_request_id . "\n\n";
        $review_request_info .= "**SUBMISSIOM TYPE**: `" . $review_request->type . "`\n";
        $review_request_info .= pp_client($review_request->client);

        switch ($review_request->type) {
            case 'NEW_FACILITY':
                if ($facility = Facility::find($review_request->facility_id)) {
                    $review_request_info .= pp_facility($facility);
                    foreach ($facility->documents as $doc) {
                        $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                        $doc->entry_name = 'facility_' . $facility->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                        $documents[] = $doc;
                    }
                }
                break;

            case 'NEW_PRODUCTS':
                if ($products = $review_request->products) {
                    if ($review_request->assured_space_check)
                        $review_request_info .= "**DESIGNATED ASSURED SPACE**: `TRUE`\n\n";
                    else
                        $review_request_info .= "**DESIGNATED ASSURED SPACE**: `FALSE`\n\n";

                    $review_request_info .= pp_products($products);
                    foreach ($products as $product) {
                        foreach ($product->documents as $doc) {
                            $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                            $doc->entry_name = 'product_' . $doc->product_id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                            $documents[] = $doc;
                        }

                        foreach ($product->ingredients as $ingredient) {
                            if ($manufacturer = $ingredient->manufacturer)
                                foreach ($manufacturer->documents as $doc) {
                                    $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                                    $doc->entry_name = 'doc_' . $doc->id . '_' . $doc->type . '.' . $ext;

                                    if (in_array($doc->id, array_column($documents, 'id'))) continue;
                                    $documents[] = $doc;
                                }
                        }
                    }
                }
                break;

            case 'NEW_FACILITY_AND_PRODUCTS': // @TODO abstract better
                if ($facility = Facility::find($review_request->facility_id)) {
                    $review_request_info .= pp_facility($facility);
                    foreach ($facility->documents as $doc) {
                        $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                        $doc->entry_name = 'facility_' . $facility->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                        $documents[] = $doc;
                    }
                }

                if ($products = $review_request->products) {
                    $review_request_info .= pp_products($products);
                    foreach ($products as $product) {
                        foreach ($product->documents as $doc) {
                            $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                            $doc->entry_name = 'product_' . $doc->product_id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                            $documents[] = $doc;
                        }

                        foreach ($product->ingredients as $ingredient) {
                            if ($manufacturer = $ingredient->manufacturer)
                                foreach ($manufacturer->documents as $doc) {
                                    $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                                    $doc->entry_name = 'doc_' . $doc->id . '_' . $doc->type . '.' . $ext;

                                    if (in_array($doc->id, array_column($documents, 'id'))) continue;
                                    $documents[] = $doc;
                                }
                        }
                    }
                }
                break;

            default:
                return response('This request has no documents associated.', 404);
                break;
        }

        if (empty($documents)) return response('This request has no documents associated.', 404);

        if ($zip->open($path, \ZipArchive::CREATE) == TRUE) {
            $zip->addFromString('review_request_information.md', $review_request_info);
            foreach ($documents as $doc) {
                try {
                    $zip->addFile(storage_path('app/' . $doc->path), $doc->entry_name);
                } catch (\Throwable $th) {
                    continue;
                }
            }
            $zip->close();
        }

        return response()->download($path, $file_name, $headers)->deleteFileAfterSend(true);
    }

    public function generate_progress_report($review_request_id)
    {
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $progress = self::get_progress($review_request_id);
        $file_name = 'registration_' . $review_request_id . '_progress_report.md';
        $review_request_info = "# Registration " . $review_request_id . " Auto Report\n\n";
        $review_request_info .= "**REGISTRATION TYPE**: `" . $review_request->type . "`\n";
        $review_request_info .= "**PROGRESS**: `" . floor($progress) . "%`\n";
        $review_request_info .= pp_client($review_request->client);
        $document_statuses = "\n\n";
        $ingredient_document_statuses = "\n\n";
        $ingredient_document_statuses .= "**Ingredient/RMM Document Statuses:**\n";
        $ingredient_document_statuses .= "| Ingredient Name | Recommendation | Source | RMM | Status | Note |\n|-----------------|----------------|--------|-----|--------|------|\n";

        if ($review_request->type !== 'NEW_PRODUCTS') {
            if ($facility = Facility::find($review_request->facility_id)) {
                // $review_request_info .= pp_facility($facility);
                $document_statuses .= "## DOCUMENT STATUSES\n";
                $document_statuses .= "**Facility Document Statuses:**\n";
                $document_statuses .= "| **Document Type** | **Status** | **Note** |\n|-------------------|------------|----------|\n";
                foreach ($facility->documents as $doc) {
                    $document_statuses .= "| " . $doc->type . " | " . $doc->status . " | " . $doc->note . " |\n";
                }
            }
        }

        if ($review_request->type == 'NEW_PRODUCTS' || $review_request->type == 'NEW_FACILITY_AND_PRODUCTS') {
            if ($products = $review_request->products) {
                $review_request_info .= pp_relationships($products);
                $document_statuses .= "\n**Products Specification Sheet Document Statuses:**\n";
                $document_statuses .= "| **Product Name** | **Status** | **Note** |\n|------------------|------------|----------|\n";
                foreach ($products as $product) {
                    $document_statuses .= "| " . $product->name;
                    if ($docs = $product->documents)
                        if (count($docs) == 0) $document_statuses .= " | | | |\n";
                        else
                            foreach ($docs as $doc) {
                                $document_statuses .= " | " . $doc->status . " | " . $doc->note . " |\n";
                                break;
                            }

                    foreach ($product->ingredients as $ingredient) {
                        $ingredient_document_statuses .= "| " . $ingredient->name . " | " . $ingredient->recommendation . " | " . $ingredient->source;
                        if ($manufacturer = $ingredient->manufacturer) {
                            $ingredient_document_statuses .= " | " . $manufacturer->name;
                            if ($docs = $manufacturer->documents)
                                if (count($docs) == 0) $ingredient_document_statuses .= " | | | | |\n";
                                else $ingredient_document_statuses .= " | " . $docs[0]->status . " | " . $docs[0]->note . " |\n";
                        }
                    }
                }
            }
        }

        $content = $review_request_info . $document_statuses . $ingredient_document_statuses;

        return response()->streamDownload(function () use ($content) {
            echo $content;
        }, $file_name);
    }

    public function generate_registration_report($review_request_id)
    {
        $file_name = 'registration_' . $review_request_id . '_registration_report.docx';
        $registration_report_temp = resource_path() . '/templates/registration_report_tmp.docx';
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $client = $review_request->client;
        $tp = new TemplateProcessor($registration_report_temp);
        $manufacturers = array_add_count('ManufacturersIndex', $review_request->manufacturers()->toArray());
        $products = array_rename_key('name', 'ProductsName', $review_request->products()->get()->toArray());
        // return dd($products, $manufacturers);
        // set_template_value($tp, 'ClientName', $client->business_name);
        $tp->setValues([
            'ClientName' => $client->business_name,
            'CompanyDescription' => $client->description,
            'ProductName' => "Haram Potatoe Salad",
            'ProductType' => "Chemical",
            'ProductsCount' => $review_request->products->count(),
            'IngredientsCount' => $review_request->ingredients->count()
        ]);
        $tp->cloneRowAndSetValues('manufacturersIndex', $manufacturers);
        $tp->cloneRowAndSetValues('ProductsName', $products);
        $tp->saveAs($file_name);

        return response()->download($file_name)->deleteFileAfterSend(true);
    }

    public function get_progress($review_request_id)
    {
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $facility_docs = Facility::find($review_request->facility_id)->documents;
        $facility_docs_count = $facility_docs->count();
        $approved_facility_docs_count = 0;

        foreach ($facility_docs as $doc)
            if ($doc->status == "APPROVED") $approved_facility_docs_count++;

        $facility_docs_progress = $facility_docs_count ? ($approved_facility_docs_count * 100) / $facility_docs_count : 0;

        if ($products = $review_request->products) {
            $product_count = $products->count();
            $ingredient_count = 0;
            $approved_product_docs_count = 0;
            $approved_ingredient_docs_count = 0;
            $haram_ingredients = 0;

            foreach ($products as $product) {
                if ($docs = $product->documents)
                    if (count($docs) > 0 && $docs[0]->status == "APPROVED") $approved_product_docs_count++;

                if ($ingredients = $product->ingredients) {
                    $ingredient_count += $ingredients->count();

                    foreach ($ingredients as $ingredient) {
                        if ($ingredient->recommendation == "HARAM") $haram_ingredients++;
                        if ($manufacturer = $ingredient->manufacturer) {
                            if ($docs = $manufacturer->documents)
                                if (count($docs) > 0 && $docs[0]->status == "APPROVED") $approved_ingredient_docs_count++;
                        }
                    }
                }
            }

            $product_docs_progress = $product_count ? ($approved_product_docs_count * 100) / $product_count : 0;

            // considering all
            if ($ingredient_count > 0) {
                $ingredients_progress = (($ingredient_count - $haram_ingredients) * 100) / $ingredient_count;
                $ingredient_docs_progress = ($approved_ingredient_docs_count * 100) / $ingredient_count;

                return ($facility_docs_progress + $product_docs_progress + $ingredients_progress + $ingredient_docs_progress) / 4;
            }

            // considering facility and products only
            return ($facility_docs_progress + $product_docs_progress) / 2;
        }

        // considering facility only
        return $facility_docs_progress;
    }

    public function set_status(Request $request, $review_request_id)
    {
        $data = $request->only('status');
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $review_request->status = $data['status'];
        $review_request->save();

        if ($data['status'] === "APPROVED") {
            $client = $review_request->client;
            $client_name = $client->business_name;
            $to = $client->get_emails();

            $review_request = ReviewRequest::findOrFail($review_request_id);
            if ($body = $this->generate_progress_report_email($review_request, true)) {
                Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new FinalProgressReport($body));
                if ($review_request->type !== "NEW_PRODUCTS")
                    Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new ScheduleAudit($client_name));
            } else return Response::json(array(
                'status' => 'error',
                'message' => 'This submission is not ready for approval. Please check all dependecies.'
            ), 400);
        } else if ($data['status'] === "REJECTED") {
            // notify the review team
            $client = $review_request->client;
            $client_name = $client->business_name;
            $to = $client->get_emails();

            Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new DocumentFailures($client_name, $review_request_id));
        }

        return response('', 200);
    }

    public function submit_corrections($review_request_id)
    {
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $review_request->status = "SUBMITTED";
        $review_request->save();

        // notify the review team
        $client = $review_request->client;
        $client_name = $client->business_name;
        $to = 'review@halalwatchworld.org';

        Mail::to($to)->send(new NewCorrections($client_name, $review_request_id));

        return response('', 200);
    }

    public function email_progress_report($review_request_id)
    {
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $body = $this->generate_progress_report_email($review_request);
        $client = $review_request->client;
        $to = $client->get_emails();

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new ProgressReport($body));
    }

    public function generate_progress_report_email($review_request, $is_final = false)
    {
        $client_name = $review_request->client->business_name;
        $time_type = $is_final ? "final" : "weekly";
        $review_request_info = "Dear " . $client_name . ",\n\n";
        $review_request_info .= $is_final ? "Congratulations! You have completed registration of your facility and products. All associated documents have passed review. \n\n" : "";
        // @TODO Below is your halal product/facility registration progress report
        $review_request_info .= "Below is your " . $time_type . " document review progress report:";
        $document_statuses = "";
        $product_statuses = "";
        $prod_count = 0;
        $ingr_count = 0;
        $review_notes = array();

        if ($review_request->type !== 'NEW_PRODUCTS') {
            if ($facility = Facility::find($review_request->facility_id)) {
                $tb_rows = "";
                $docs_by_type = array();
                foreach ($facility->documents as $doc) {
                    $clean_doc_type = str_replace("_", " ", $doc->type);
                    if (!array_key_exists($doc->type, $docs_by_type))
                        $docs_by_type[$doc->type] = render_email_table_row($clean_doc_type, $doc->status);
                    if (!empty($doc->note)) $review_notes[] = '**' . $clean_doc_type . "**: " . $doc->note;
                }

                foreach ($docs_by_type as $doc_stat)
                    $tb_rows .= $doc_stat;

                $document_statuses = render_email_table("Facility Document Type", "Status", $tb_rows);
            }
        }

        if ($review_request->type == 'NEW_PRODUCTS' || $review_request->type == 'NEW_FACILITY_AND_PRODUCTS') {
            if ($products = $review_request->products) {
                $tb_rows = "";
                $total_ingredients = 0;
                foreach ($products as $product) {
                    if ($docs = $product->documents)
                        if (count($docs) > 0) foreach ($docs as $doc) {
                            $tb_rows .= render_email_table_row($product->name, $doc->status);
                            if (!empty($doc->note)) $review_notes[] = '**' . $product->name . "**: " . $doc->note;
                            break;
                        }
                        else {
                            $tb_rows .= render_email_table_row($product->name, "NONE");
                        }

                    foreach ($product->ingredients as $ingredient) {
                        $total_ingredients++;
                        if ($manufacturer = $ingredient->manufacturer) {
                            if ($docs = $manufacturer->documents)
                                if (count($docs) > 0) foreach ($docs as $doc) {
                                    if (!empty($doc->note)) $review_notes[] = '**' . $manufacturer->name . "**: " . $doc->note;
                                }
                        }
                    }
                }

                $product_statuses = render_email_table("Product Name", "Status", $tb_rows);
                $prod_count = $products->count();
                $ingr_count = $total_ingredients;
            }
        }

        // @TODO
        $progress = intval($this->get_progress($review_request->id));
        $overview = render_email_overview($prod_count, $ingr_count, $progress);
        $review_notes = !$review_notes ? "" : "\n\n#### Failures\n\n" . implode("\n\n", array_unique($review_notes));
        $body = $is_final
            ? $review_request_info . "<br />" . $overview . "<br />" . render_email_next_phase() . "<br />" . $document_statuses . $product_statuses
            : $review_request_info . "<br />" . $overview . "<br />" . $document_statuses . $product_statuses . $review_notes;

        // if ($is_final && $this->get_progress($review_request->id) < 100)
        //     return null;

        return $body;
    }

    public function request_disclosure_statement(Request $request, $review_request_id)
    {
        $data = $request->only('id', 'name', 'email');
        $client = new GuzzleClient();
        $token = env('PANDADOC_API_TOKEN');

        $TEMP_ID = "RFTk5EQ4yXe3LtU6VD9WBR";
        $DIR_ID = "CvTjtbc95Xtf6nMmrF6geN";
        $ingredients = Ingredient::where(
            ['review_request_id' => $review_request_id, 'manufacturer_id' => $data['id']]
        )->get()->pluck('name');
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
                'name' => 'Halal Disclosure Statement (' . $data['name'] . ')',
                'recipients' => [
                    ['email' => $data['email'], 'role' => 'Vendor']
                ],
                'tokens' => [
                    ['name' => 'Vendor.Company', 'value' => $data['name']]
                ],
                'fields' => [
                    'ProductList' => ['value' => implode(", ", $ingredients->toArray())]
                ],
                'metadata' => [
                    'review_request_id' => $review_request_id,
                    'manufacturer_id' => $data['id']
                ]
            ])
        );
        $promise = $client->sendAsync($_request)->then(function ($response) {
            return $response->getBody();
        });
        $promise->wait();
    }

    // reports
    // @TODO add to reports controller

    public function get_review_request_certificates($review_request_id)
    {
        $certificates = Certificate::where(['request_id' => $review_request_id])->orderBy('id', 'DESC')->get();

        return $certificates;
    }

    public function get_review_request_audit_reports($review_request_id)
    {
        $reports = Report::where(['request_id' => $review_request_id, 'type' => "AUDIT_REPORT"])->orderBy('id', 'DESC')->get();

        return $reports;
    }

    public function get_review_request_review_reports($review_request_id)
    {
        $reports = Report::where(['request_id' => $review_request_id, 'type' => "REVIEW_REPORT"])->orderBy('id', 'DESC')->get();

        return $reports;
    }

    public function add_review_request_certificate(Request $request, $review_request_id)
    {
        $client_id = ReviewRequest::findOrFail($review_request_id)->client_id;
        $path = Storage::putFile('documents', $request->file('document'));
        $certificate = new Certificate;
        $certificate->client_id = $client_id;
        $certificate->request_id = $review_request_id;
        $certificate->path = $path;
        $certificate->expires_at = date('Y-m-d H:i:s', strtotime('+2 years - 45 days')); // from now
        $certificate->save();

        return response($certificate, 200);
    }

    public function add_review_request_audit_report(Request $request, $review_request_id)
    {
        $client_id = ReviewRequest::findOrFail($review_request_id)->client_id;
        $path = Storage::putFile('documents', $request->file('document'));
        $report = new Report;
        $report->client_id = $client_id;
        $report->request_id = $review_request_id;
        $report->type = "AUDIT_REPORT";
        $report->path = $path;
        $report->save();

        return response($report, 200);
    }

    public function add_review_request_review_report(Request $request, $review_request_id)
    {
        $client_id = ReviewRequest::findOrFail($review_request_id)->client_id;
        $path = Storage::putFile('documents', $request->file('document'));
        $report = new Report;
        $report->client_id = $client_id;
        $report->request_id = $review_request_id;
        $report->type = "REVIEW_REPORT";
        $report->path = $path;
        $report->save();

        return response($report, 200);
    }

    public function delete_review_request_certificate($certificate_id)
    {
        $certificate = Certificate::findOrFail($certificate_id);

        // delete hard record
        Storage::delete($certificate->path);

        // delete record
        $certificate->delete();

        return response('', 200);
    }

    public function delete_review_request_report($report_id)
    {
        $report = Report::findOrFail($report_id);

        // delete hard record
        Storage::delete($report->path);

        // delete record
        $report->delete();

        return response('', 200);
    }

    public function step_eight_check(Request $request, $review_request_id)
    {
        // has only one product return true, else return false
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $products = $review_request->products;

        return $products->count() == 1 ? true : false;
    }
}

function pp_client(Client $client)
{
    $output = "**CLIENT PROFILE**:\n\n";
    $output .= '- ' . '**BUSINESS NAME**' . ': `' . $client->business_name . "`\n";
    $output .= '- ' . '**WEBSITE**' . ': `' . $client->business_name . "`\n";
    $output .= '- ' . '**DESCRIPTION**' . ': `' . $client->description . "`\n";
    $output .= "\n";
    $output .= "**HALAL ENFORCEMENT DIRECTOR**:\n\n";
    $output .= '- ' . '**TYPE**' . ': `' . $client->hed_type . "`\n";
    $output .= '- ' . '**NAME**' . ': `' . $client->hed_name . "`\n";
    $output .= '- ' . '**CONTACT NUMBER**' . ': `' . $client->hed_phone_number . "`\n";
    $output .= '- ' . '**EMAIL**' . ': `' . $client->hed_email . "`\n";
    $output .= "\n";

    return $output;
}

function pp_facility(Facility $facility): string
{
    $category_code = FacilityCategories::find($facility->category_id)->code;
    $qualified_id = $category_code . $facility->id;
    $output = "## Facility " . $facility->id . "\n\n";
    $output .= '- ' . '**ID**' . ': `' . $qualified_id . "`\n";
    $output .= '- ' . '**NAME**' . ': `' . $facility->name . "`\n";
    $output .= '- ' . '**ADDRESS**' . ': `' . $facility->address . "`\n";
    $output .= '- ' . '**CITY**' . ': `' . $facility->city . "`\n";
    $output .= '- ' . '**STATE**' . ': `' . $facility->state . "`\n";
    $output .= '- ' . '**ZIP**' . ': `' . $facility->zip . "`\n";
    $output .= '- ' . '**COUNTRY**' . ': `' . $facility->country . "`\n";
    // foreach ($facility->attributesToArray() as $key => $val) {
    //     $val = $val ? $val : 'NONE';
    //     $output .= '- ' . '**' . strtoupper($key) . '**' . ': `' . $val . "`\n";
    // }

    $output .= "\n";

    return $output;
}

function pp_products($products): string
{
    $output = "## Products\n";

    foreach ($products as $product) {
        $product_facility_category_code = FacilityCategories::find($product->facility->category_id)->code;
        $product_category_code = ProductCategories::find($product->category_id)->code;
        $qualified_id = $product_facility_category_code . $product->facility_id . '_' . $product_category_code . $product->id;
        $output .= "\n" . '- **Product ' . $product->id . "**\n\n";
        $output .= '  - ' . '**ID**' . ': `' . $qualified_id . "`\n";
        $output .= '  - ' . '**NAME**' . ': `' . $product->name . "`\n";
        $output .= '  - ' . '**DESCRIPTION**' . ': `' . $product->description . "`\n";
        // foreach ($product->attributesToArray() as $key => $val) {
        //     $val = $val ? $val : 'NONE';
        //     $output .= '  - ' . '**' . strtoupper($key) . '**' . ': `' . $val . "`\n";
        // }
        $output .= "  - **INGREDIENTS**:\n";
        foreach ($product->ingredients as $ingredient) {
            $output .= "    - INGREDIENT " . $ingredient->id . " | " . $ingredient->name;

            if ($manufacturer = $ingredient->manufacturer) {
                $output .= " (" . $manufacturer->name . "): ";

                foreach ($manufacturer->documents as $doc) {
                    $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                    $doc_entry_name = '`doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                    $output .= $doc_entry_name . '`';
                }
            }

            $output .= "\n";
        }
    }

    return $output;
}

function pp_relationships($products): string
{
    $output = "## PRODUCT > INGREDIENT > RMM RELATIONSHIP\n";
    $output .= "**PRODUCTS**:\n";

    foreach ($products as $product) {
        $output .= "\n" . '- ' . $product->name . "\n\n";
        $output .= "  - DESCRIPTION: " . ($product->description ? $product->description : "NONE") . "\n";
        $output .= "  - INGREDIENTS:";

        if ($ingredients = $product->ingredients)
            if (count($ingredients) == 0) $output .= " NONE\n";
            else
                foreach ($product->ingredients as $ingredient) {
                    $output .= "\n    - " . $ingredient->name;

                    if ($manufacturer = $ingredient->manufacturer) {
                        $output .= " (" . $manufacturer->name . ")";
                    }

                    $output .= "\n";
                }
    }

    return $output;
}

function render_email_overview($prod_count, $ingr_count, $progress)
{
    return <<<EOD
<table cellspacing="0" cellpadding="0" class="x_x_TableGrid" style="box-sizing:border-box; margin-top:0pt; margin-bottom:0pt; border-collapse:collapse">
    <tbody style="box-sizing:border-box">
        <tr>
            <td style="box-sizing:border-box; width:177.9pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:middle">
                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; margin-bottom:0pt; text-align:center; line-height:18pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:12pt; font-weight:bold">Overview</span> </p>
            </td>
            <td style="box-sizing:border-box; width:177.9pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:top">
                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; margin-bottom:0pt; text-align:center; line-height:18pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:12pt; font-weight:bold">Overall Progress</span> </p>
            </td>
        </tr>
        <tr>
            <td style="box-sizing:border-box; width:177.9pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:middle">
                <table cellspacing="0" cellpadding="0" class="x_x_TableGrid" style="box-sizing:border-box; margin-top:0pt; margin-bottom:0pt; border-collapse:collapse">
                    <tbody style="box-sizing:border-box">
                        <tr>
                            <td style="box-sizing:border-box; width:178.7pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:middle">
                                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; margin-bottom:0pt; text-align:right; line-height:18pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:12pt">PRODUCTS</span> </p>
                            </td>
                            <td style="box-sizing:border-box; width:178.7pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:top">
                                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; text-align:left; margin-bottom:0pt; line-height:36pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:36pt; font-weight:bold; color:green">$prod_count</span> </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="box-sizing:border-box; width:178.7pt; border-top-style:solid; border-top-width:0.75pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:middle">
                                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; margin-bottom:0pt; text-align:right; line-height:18pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:12pt">INGREDIENTS</span> </p>
                            </td>
                            <td style="box-sizing:border-box; width:178.7pt; border-top-style:solid; border-top-width:0.75pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:top">
                                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; text-align:left; margin-bottom:0pt; line-height:36pt"><span style="box-sizing:border-box; font-family:Arial,serif,EmojiFont; font-size:36pt; font-weight:bold; color:green">$ingr_count</span> </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style="box-sizing:border-box; margin:0pt 0pt 8pt; font-size:16px; margin-top:0; margin-bottom:0pt; text-align:center; line-height:18pt"></p>
            </td>
            <td style="box-sizing:border-box; width:177.9pt; padding-right:5.4pt; padding-left:5.4pt; vertical-align:top">
                <div style="box-sizing:border-box;margin-bottom:0pt;text-align:center;line-height:18pt;display: flex;justify-content: center;">
                    <div class="x_x_pie x_x_no-round" style="box-sizing:border-box;display:inline-grid;margin:5px;font-size:25px;font-weight:bold;font-family:sans-serif,serif,EmojiFont;width:120px;height:120px;/* position: absolute; *//* top: 55px; *//* left: 65px; */background: url(&quot;https://portal.halalwatchworld.org/static/images/email/progress-report-email-percentage-gfx-$progress.png&quot;);background-size: cover;background-repeat: no-repeat;background-position: center center;display: flex;justify-content: center;align-items: center;"><span>$progress%</span></div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
EOD;
}

function render_email_next_phase()
{
    return <<<EOD
<p
  style="
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5em;
    margin-top: 0;
    text-align: left;
  "
>
  Next Phase:
  <span
    style="
      box-sizing: border-box;
      font-family: Arial, serif, EmojiFont;
      font-size: 12pt;
      font-weight: bold;
    "
    >Audit</span
  ><br aria-hidden="true" />
</p>
EOD;
}

function render_email_table($first_head, $second_head, $rows)
{
    return <<<EOD
<table
  cellspacing="0"
  cellpadding="0"
  style="
    box-sizing: border-box;
    margin-top: 0pt;
    width: 100%;
    margin-bottom: 0pt;
    border-collapse: collapse;
  "
>
  <tbody style="box-sizing: border-box">
    <tr style="height: 14.25pt">
      <td
        style="
          box-sizing: border-box;
          width: 77.18%;
          border-top-style: solid;
          border-top-width: 1pt;
          border-left-style: solid;
          border-left-width: 1pt;
          border-bottom-style: solid;
          border-bottom-width: 1pt;
          padding-right: 5.4pt;
          padding-left: 4.9pt;
          vertical-align: bottom;
          background-color: #ffffff;
        "
      >
        <p
          style="
            box-sizing: border-box;
            margin: 0pt 0pt 8pt;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
            margin-bottom: 0pt;
            font-size: 11pt;
          "
        >
          <span
            style="
              box-sizing: border-box;
              font-family: Arial, serif, EmojiFont;
              font-weight: bold;
            "
            >$first_head</span
          >
        </p>
      </td>
      <td
        style="
          box-sizing: border-box;
          width: 22.82%;
          border-top-style: solid;
          border-top-width: 1pt;
          border-right-style: solid;
          border-right-width: 0.75pt;
          border-bottom-style: solid;
          border-bottom-width: 1pt;
          padding-right: 5.03pt;
          padding-left: 5.4pt;
          vertical-align: middle;
          background-color: #ffffff;
        "
      >
        <p
          style="
            box-sizing: border-box;
            margin: 0pt 0pt 8pt;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
            margin-bottom: 0pt;
            font-size: 11pt;
          "
        >
          <span
            style="
              box-sizing: border-box;
              font-family: Arial, serif, EmojiFont;
              font-weight: bold;
            "
            >$second_head</span
          >
        </p>
      </td>
    </tr>
$rows
  </tbody>
</table>
EOD;
}

function render_email_table_row($title, $status)
{
    $color = status_to_color($status);
    $bgcolor = status_to_bgcolor($status);

    return <<<EOD
    <tr style="height: 15pt">
      <td
        style="
          box-sizing: border-box;
          width: 77.18%;
          padding-right: 5.4pt;
          padding-left: 5.4pt;
          vertical-align: middle;
          background-color: #ffffff;
        "
      >
        <p
          style="
            box-sizing: border-box;
            margin: 0pt 0pt 8pt;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
            margin-bottom: 0pt;
            font-size: 11pt;
          "
        >
          <span
            style="box-sizing: border-box; font-family: Arial, serif, EmojiFont"
            >$title</span
          >
        </p>
      </td>
      <td
        style="
          box-sizing: border-box;
          width: 22.82%;
          padding-right: 5.4pt;
          padding-left: 5.4pt;
          vertical-align: middle;
          background-color: $bgcolor;
        "
      >
        <p
          style="
            box-sizing: border-box;
            margin: 0pt 0pt 8pt;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
            margin-bottom: 0pt;
            font-size: 11pt;
          "
        >
          <span
            style="
              box-sizing: border-box;
              font-family: Arial, serif, EmojiFont;
              font-weight: bold;
              color: $color;
            "
            >$status</span
          >
        </p>
      </td>
    </tr>
EOD;
}

function status_to_color($status)
{
    switch ($status) {
        case 'APPROVED':
            return "rgb(0, 97, 0)";
        case 'REJECTED':
            return "rgb(192, 0, 0)";
        case 'SUBMITTED':
            return "rgb(128, 96, 0)";
        default: // NONE
            return "#000000";
    }
}

function status_to_bgcolor($status)
{
    switch ($status) {
        case 'APPROVED':
            return "#c6efce";
        case 'REJECTED':
            return "#fbe5d5";
        case 'SUBMITTED':
            return "#fef2cc";
        default: // NONE
            return "#e7e6e6";
    }
}

function array_add_count(string $keyName, array $arr): array
{
    $i = 1;
    $formatted = array_map(function ($item) use ($keyName, &$i) {
        $item[$keyName] = $i++;
        return $item;
    }, $arr);

    return $formatted;
}

function array_rename_key(string $oldKey, string $newKey, array $arr): array
{
    $formatted = array_map(function ($item) use ($oldKey, $newKey) {
        $item[$newKey] = $item[$oldKey];
        unset($item[$oldKey]);
        return $item;
    }, $arr);

    return $formatted;
}
