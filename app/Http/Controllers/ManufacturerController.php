<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Manufacturer;
use App\Models\ManufacturerDocument;
// use App\Models\Ingredient;

class ManufacturerController extends Controller
{
    public function auto_suggest_search_list(Request $request)
    {
        // return Manufacturer::whereLike('name', $request['name'])->get();
        // return Manufacturer::all()->pluck('name')->toArray();
        return Manufacturer::all();
    }

    public function get_documents($manufacturerId)
    {
        return Manufacturer::findOrFail($manufacturerId)->documents;
    }

    public function add_document(Request $request, $manufacturerId)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $manufacturer = Manufacturer::findOrFail($manufacturerId);
        $document = new ManufacturerDocument;
        $document->manufacturer_id = $manufacturer->id;
        $document->type = $request['type'];
        $document->expires_at = $request['expires_at'];
        $document->path = $path;
        $document->save();

        return response($document, 200);
    }

    public function delete_document($documentId)
    {
        $document = ManufacturerDocument::findOrFail($documentId);

        // delete hard record
        Storage::delete($document->path);

        // delete record
        $document->delete();

        return response('', 200);
    }

    // update/replace
    public function update_document(Request $request, $documentId)
    {
        $document = ManufacturerDocument::findOrFail($documentId);
        $path = Storage::putFile('documents', $request->file('document'));

        // delete previous hard record
        Storage::delete($document->path);

        $document->path = $path;
        $document->save();

        return response($document, 200);
    }

    public function download_document_by_id($documentId)
    {
        $document = ManufacturerDocument::findOrFail($documentId);
        $client_name = $document->ingredient->client->business_name;
        $type = $document->type;
        $created_at = $document->created_at->format('Ymd');
        $ext = pathinfo($document->path, PATHINFO_EXTENSION);
        $qualified_name = $client_name . '_' . $type . '_' . $created_at . '.' . $ext;

        return Storage::download($document->path, $qualified_name);
    }

    public function update_document_expiration(Request $request, $documentId)
    {
        $document = ManufacturerDocument::findOrFail($documentId);
        $document->update(['expires_at' => $request['expires_at']]);
        $document->save();

        return response($document, 200);
    }
}
