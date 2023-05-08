<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Client;
use App\Models\Ingredient;
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

    public function get_manufacturer(Request $request, $id)
    {
        $manufacturer = Manufacturer::findOrFail($id);
        $manufacturer->documents;

        return $manufacturer;
    }

    public function update_manufacturer(Request $request, $id)
    {
        $data = $request->only('name');
        $manufacturer = Manufacturer::findOrFail($id);
        $manufacturer->name = $data['name'];
        $manufacturer->save();

        return $manufacturer;
    }

    public function get_all_documents(Request $request)
    {
        $client = Client::where('user_id', $request->user()->id)->first();
        $ingredients = $client->ingredients;
        $manufacturer_ids = [];

        foreach ($ingredients as $ingredient) {
            $manufacturer_id = $ingredient->manufacturer->id;
            if (!in_array($manufacturer_id, $manufacturer_ids))
                $manufacturer_ids[] = $manufacturer_id;
            // $docs = array_merge($docs, $ingredient->manufacturer->toArray());
        }

        $manufacturers = Manufacturer::findMany($manufacturer_ids);
        $docs = [];

        foreach ($manufacturers as $manufacturer) {
            $docs = array_merge($docs, $manufacturer->documents->toArray());
        }

        return $docs;
    }

    public function get_documents_by_request($request_id)
    {
        $ingredients = Ingredient::with('manufacturer')->where('request_id', $request_id)->get();
        $docs = [];

        foreach ($ingredients as $ingredient) {
            $docs = array_merge($docs, $ingredient->manufacturer->documents);
        }

        return $docs;
    }

    public function get_documents($manufacturerId)
    {
        return Manufacturer::findOrFail($manufacturerId)->documents;
    }

    public function add_document(Request $request, $manufacturerId)
    {
        // @CHECK no replace for manufacturer docs
        // if (
        //     $document = ManufacturerDocument::where(
        //         ['manufacturer_id' => $manufacturerId, 'type' => $request['type'], 'name' => $request['name']]
        //     )->first()
        // ) {
        //     $this->update_document($request, $document->id);

        //     return response(null, 204);
        // }

        $path = Storage::putFile('documents', $request->file('document'));
        $manufacturer = Manufacturer::findOrFail($manufacturerId);
        $document = new ManufacturerDocument;
        $document->manufacturer_id = $manufacturer->id;
        $document->type = $request['type'];
        $document->status = "SUBMITTED";
        $document->name = $request['name'] ? $request['name'] : '';
        $document->note = "";
        $document->expires_at = $request['expires_at'];
        $document->path = $path;
        $document->save();

        return response($document, 200);
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

    public function set_document_status(Request $request, $document_id)
    {
        $data = $request->only('status');
        $document = ManufacturerDocument::findOrFail($document_id);
        $document->status = $data['status'];
        $document->save();

        return response('', 200);
    }

    public function set_document_note(Request $request, $document_id)
    {
        $data = $request->only('note');
        $document = ManufacturerDocument::findOrFail($document_id);
        $document->note = $data['note'] ? $data['note'] : "";
        $document->save();

        return response('', 200);
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

    public function download_document_by_id($documentId)
    {
        $document = ManufacturerDocument::findOrFail($documentId);
        $manufacturer_name = $document->manufacturer->name;
        $type = $document->type;
        $created_at = $document->created_at->format('Ymd');
        $ext = pathinfo($document->path, PATHINFO_EXTENSION);
        $qualified_name = $manufacturer_name . '_' . $type . '_' . $created_at . '.' . $ext;

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
