<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\ReviewRequest;
use App\Models\Profile;
use App\Models\User;
use App\Models\Facility;
use App\Models\Product;
use App\Models\Client;
use App\Models\FacilityCategories;
use App\Models\ProductCategories;
use App\Models\Report;

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
            $review_request->reviewer = Profile::where('user_id', $review_request->reviewer_id)->first();
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

    public function get_review_request($review_request_id)
    {
        return ReviewRequest::findOrFail($review_request_id);
    }

    // for client
    public function get_client_review_requests(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;

        $review_requests = ReviewRequest::where('client_id', $client_id)->orderBy('id', 'DESC')->get();

        // get reviewer, type_color and email
        foreach ($review_requests as $review_request) {
            $reviewer_user = User::find($review_request->reviewer_id);
            $review_request->reviewer = Profile::find($review_request->reviewer_id);
            $review_request->type_color = REVIEW_REQUEST_TYPE_COLOR_MAP[$review_request->type];
            if ($reviewer_user) $review_request->reviewer_email = $reviewer_user->email;
        }

        return $review_requests;
    }

    public function add_review_request(Request $request)
    {
        $data = $request->only(
            'type'
        );
        $data['client_id'] = Client::where('user_id', $request->user()->id)->first()->id;
        $data['reviewer_id'] = 0; // starts with no reviewer
        $data['status'] = "DRAFT"; // by default
        $data['current_step_index'] = 1; // next immediate step

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

        return $review_request;
    }

    public function update_review_request(Request $request, $review_requestId)
    {
        $data = $request->only(
            'facility_id',
            'type',
            'status',
            'current_step_index'
        );
        $review_request = ReviewRequest::where('id', $review_requestId);
        $review_request->update($data);

        // @TODO set facility with given id
        // @TODO deleted any associated products and facilities

        return $review_request->get()[0];
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
        }

        return $products->reverse()->values();
    }

    public function set_status(Request $request, $review_request_id)
    {
        $data = $request->only('status');
        $review_request = ReviewRequest::findOrFail($review_request_id);
        $review_request->status = $data['status'];
        $review_request->save();

        return response('', 200);
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
        $review_request_info .= "**REQUEST TYPE**: `" . $review_request->type . "`\n";
        $review_request_info .= pp_client($review_request->client);

        switch ($review_request->type) {
            case 'NEW_FACILITY':
                if ($facility = Facility::find($review_request->facility_id)) {
                    $review_request_info .= $facility->attributesToArray();
                    foreach ($facility->documents as $doc) {
                        $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                        $doc->entry_name = 'facility_' . $facility->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                        $documents[] = $doc;
                    }
                }
                break;

            case 'NEW_PRODUCTS':
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
                                    $doc->entry_name = 'product_' . $product->id . '_ingredient_' . $ingredient->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
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
                                    $doc->entry_name = 'product_' . $product->id . '_ingredient_' . $ingredient->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
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
                $zip->addFile(storage_path('app/' . $doc->path), $doc->entry_name);
            }
            $zip->close();
        }

        return response()->download($path, $file_name, $headers)->deleteFileAfterSend(true);
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
            if ($manufacturer = $ingredient->manufacturer)
                foreach ($manufacturer->documents as $doc) {
                    $output .= "    - INGREDIENT " . $ingredient->id . " (" . $ingredient->name . "): `";
                    $ext = pathinfo($doc->path, PATHINFO_EXTENSION);
                    $doc_entry_name = 'product_' . $product->id . '_ingredient_' . $ingredient->id . '_doc_' . $doc->id . '_' . $doc->type . '.' . $ext;
                    $output .= $doc_entry_name . "`\n";
                }
        }
    }

    return $output;
}
