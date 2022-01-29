<?php

namespace App\Http\Controllers;

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
}
