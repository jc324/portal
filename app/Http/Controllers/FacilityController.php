<?php

namespace App\Http\Controllers;

use App\Mail\NewAuditPrintout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;

use App\Models\Facility;
use App\Models\FacilityDocument;
use App\Models\FacilityCategories;
use App\Models\Client;
use App\Mail\NewClientDocument;

class FacilityController extends Controller
{
    public function add_facility(Request $request, $clientId)
    {
        $data = $request->only(
            'category_id',
            'name',
            'address',
            'country',
            'city',
            'state',
            'zip'
        );
        $data['client_id'] = $clientId;

        return Facility::create($data);
    }

    public function update_facility(Request $request, $facilityId)
    {
        $data = $request->only(
            'category_id',
            'name',
            'address',
            'country',
            'city',
            'state',
            'zip'
        );
        $facility = Facility::where('id', $facilityId);
        $facility->update($data);

        return $facility->get()[0];
    }

    public function delete_facility($facilityId)
    {
        Facility::findOrFail($facilityId)->delete();

        return response('', 200);
    }

    public function get_categories()
    {
        return FacilityCategories::all();
    }

    public function get_documents($facilityId)
    {
        return Facility::find($facilityId)->documents;
    }

    public function add_document(Request $request, $facilityId)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $document = new FacilityDocument;
        $document->facility_id = $facilityId;
        $document->type = $request['type'];
        $document->status = 'SUBMITTED';
        $document->note = '';
        $document->expires_at = $request['expires_at'];
        $document->path = $path;
        $document->save();

        // Send mail
        if ($request->user()->role === "CLIENT")
            Mail::to("review@halalwatchworld.org")->send(new NewClientDocument(
                Client::where('user_id', $request->user()->id)->first(),
                $document->id,
                $document->type
            ));

        return response($document, 200);
    }

    public function set_document_status(Request $request, $document_id)
    {
        $data = $request->only('status');
        $document = FacilityDocument::findOrFail($document_id);
        $document->status = $data['status'];
        $document->save();

        return response('', 200);
    }

    public function set_document_note(Request $request, $document_id)
    {
        $data = $request->only('note');
        $document = FacilityDocument::findOrFail($document_id);
        $document->note = $data['note'] ? $data['note'] : "";
        $document->save();

        return response('', 200);
    }

    public function delete_document($documentId)
    {
        $document = FacilityDocument::findOrFail($documentId);

        // delete hard record
        Storage::delete($document->path);

        // delete record
        $document->delete();

        return response('', 200);
    }

    // update/replace
    public function update_document(Request $request, $documentId)
    {
        $document = FacilityDocument::findOrFail($documentId);
        $path = Storage::putFile('documents', $request->file('document'));

        // delete previous hard record
        Storage::delete($document->path);

        $document->path = $path;
        $document->save();

        return response($document, 200);
    }

    public function download_document_by_id($documentId)
    {
        $document = FacilityDocument::findOrFail($documentId);
        $client_name = $document->facility->client->business_name;
        $type = $document->type;
        $created_at = $document->created_at->format('Ymd');
        $ext = pathinfo($document->path, PATHINFO_EXTENSION);
        $qualified_name = $client_name . '_' . $type . '_' . $created_at . '.' . $ext;

        return Storage::download($document->path, $qualified_name);
    }

    public function update_document_expiration(Request $request, $documentId)
    {
        $document = FacilityDocument::findOrFail($documentId);
        $document->update(['expires_at' => $request['expires_at']]);
        $document->save();

        return response($document, 200);
    }

    public function generate_audit_printout(Request $request, $facility_id)
    {
        $facility = Facility::find($facility_id);
        $body = "**DATE GENERATED**: " . now() . "\n\n";
        $body .= pp_facility_client($facility->client);
        $body .= pp_facility_details($facility);
        $body .= pp_relationship_details($facility->products);

        Mail::to("audits@halalwatchworld.org")->send(new NewAuditPrintout($body));

        return response('', 200);
    }
}

function pp_facility_client(Client $client)
{
    $output = "## CLIENT PROFILE\n\n";
    $output .= '- ' . '**BUSINESS NAME**' . ': `' . $client->business_name . "`\n";
    $output .= '- ' . '**WEBSITE**' . ': `' . $client->business_name . "`\n";
    $output .= '- ' . '**DESCRIPTION**' . ': `' . $client->description . "`\n";
    $output .= "\n";
    $output .= "**HALAL ENFORCEMENT DIRECTOR(S)**:\n\n";

    foreach (json_decode($client->heds) as $hed) {
        $output .= '- ' . '**NAME**' . ': `' . $hed->name . "`\n";
        $output .= '  - ' . '**CONTACT NUMBER**' . ': `' . $hed->phone_number . "`\n";
        $output .= '  - ' . '**EMAIL**' . ': `' . $hed->email . "`\n";
    }

    $output .= "\n---\n";

    return $output;
}

function pp_facility_details(Facility $facility): string
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

    $output .= "\n---\n";

    return $output;
}

function pp_relationship_details($products): string
{
    $output = "## PRODUCT > INGREDIENT > RMM RELATIONSHIP\n";
    $output .= "**PRODUCTS**:\n";

    foreach ($products as $product) {
        $output .= "\n" . '- ' . $product->name . "\n\n";
        $output .= "  - DESCRIPTION: " . ($product->description ? $product->description : "NONE") . "\n";
        $output .= "  - INGREDIENTS:\n";

        if ($ingredients = $product->ingredients)
            if (count($ingredients) == 0) $output .= " NONE\n";
            else
                foreach ($product->ingredients as $ingredient) {
                    $output .= "    - " . $ingredient->name;

                    if ($manufacturer = $ingredient->manufacturer) {
                        $output .= " (" . $manufacturer->name . ")";
                    }

                    $output .= "\n";
                }
    }

    return $output;
}
