<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Client;
use App\Models\Document;
use App\Models\Manufacturer;

class DocumentController extends Controller
{
    public function get_recent_documents(Request $request)
    {
        $client = Client::where('user_id', $request->user()->id)->first();
        $facilities = $client->facilities;
        $facility_docs = [];
        $products = $client->products;
        $product_docs = [];
        $ingredients = $client->ingredients;
        $manufacturer_ids = [];

        foreach ($ingredients as $ingredient) {
            $manufacturer_id = $ingredient->manufacturer->id;
            if (!in_array($manufacturer_id, $manufacturer_ids))
                $manufacturer_ids[] = $manufacturer_id;
        }

        $manufacturers = Manufacturer::findMany($manufacturer_ids);
        $manufacturer_docs = [];

        foreach ($manufacturers as $manufacturer) {
            $manufacturer_docs = array_merge($manufacturer_docs, $manufacturer->documents->toArray());
        }

        foreach ($facilities as $facility) {
            $facility_docs = array_merge($facility_docs, $facility->documents->toArray());
        }

        foreach ($products as $product) {
            $product_docs = array_merge($product_docs, $product->documents->toArray());
        }

        return array_merge(
            array_slice($facility_docs, 0, 4),
            array_slice($product_docs, 0, 3),
            array_slice($manufacturer_docs, 0, 3)
        );
    }

    public function get_documents(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $docs = Document::where(['client_id' => $client_id])->get();

        return $docs;
    }

    public function add_document(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;

        return $this->add_user_document($request, $client_id);
    }

    public function add_user_document(Request $request, $client_id)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $document = new Document;
        $document->client_id = $client_id;
        // $document->type = $request['type'];
        $document->status = 'SUBMITTED';
        $document->note = '';
        $document->expires_at = $request['expires_at'];
        $document->path = $path;
        $document->save();

        // @TODO Send mail
        // if ($request->user()->role === "CLIENT")
        //     Mail::to("review@halalwatchworld.org")->send(new NewClientDocument(
        //         Client::where('user_id', $request->user()->id)->first(),
        //         $document->id,
        //         $document->type
        //     ));

        return response($document, 200);
    }

    public function delete_document($documentId)
    {
        $document = Document::findOrFail($documentId);

        // delete hard record
        Storage::delete($document->path);

        // delete record
        $document->delete();

        return response('', 200);
    }

    public function download_document_by_id($documentId)
    {
        $document = Document::findOrFail($documentId);
        $client_name = $document->client->business_name;
        $type = "DOC";
        $created_at = $document->created_at->format('Ymd');
        $ext = pathinfo($document->path, PATHINFO_EXTENSION);
        $qualified_name = $client_name . '_' . $type . '_' . $created_at . '.' . $ext;

        return Storage::download($document->path, $qualified_name);
    }
}
