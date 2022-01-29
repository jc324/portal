<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;

use App\Models\Product;
use App\Models\Facility;
use App\Models\Ingredient;
use App\Models\ProductDocument;
use App\Models\ProductCategories;
use App\Models\Client;
use App\Mail\NewClientDocument;

class ProductController extends Controller
{
    public function get_products($facilityId)
    {
        return Facility::findOrFail($facilityId)->products;
    }

    public function add_product(Request $request)
    {
        $data = $request->only(
            'review_request_id',
            'facility_id',
            'category_id',
            'name',
            'description',
            'preview_image',
        );
        $data['client_id'] = Facility::find($data['facility_id'])->client->id;

        return Product::create($data);
    }

    public function update_product(Request $request, $productId)
    {
        $data = $request->only(
            'category_id',
            'name',
            'description',
            'product_image',
        );
        $product = Product::where('id', $productId);
        $product->update($data);

        return $product->get()[0];
    }

    public function delete_product($productId)
    {
        // delete product
        Product::findOrFail($productId)->delete();

        // delete ingredients
        $ingredients = Ingredient::where('product_id', $productId);
        if ($ingredients !== null) $ingredients->delete();

        return response('', 200);
    }

    public function update_preview_image($productId, Request $request)
    {
        $path = Storage::putFile('previews', $request->file('preview_image'));
        $product = Product::findOrFail($productId);
        Storage::delete($product->preview_image); // delete existing preview image if exists
        // $product->update(['preview_image' => $path]);
        $product->preview_image = $path;
        $product->save();

        return response($path, 200);
    }

    public function get_categories()
    {
        return ProductCategories::all();
    }

    public function get_documents($productId)
    {
        return Product::findOrFail($productId)->documents;
    }

    public function add_document(Request $request, $productId)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $document = new ProductDocument;
        $document->product_id = $productId;
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
        $document = ProductDocument::findOrFail($documentId);

        // delete hard record
        Storage::delete($document->path);

        // delete record
        $document->delete();

        return response('', 200);
    }

    // update/replace
    public function update_document(Request $request, $documentId)
    {
        $document = ProductDocument::findOrFail($documentId);
        $path = Storage::putFile('documents', $request->file('document'));

        // delete previous hard record
        Storage::delete($document->path);

        $document->path = $path;
        $document->save();

        return response($document, 200);
    }

    public function download_document_by_id($documentId)
    {
        $document = ProductDocument::findOrFail($documentId);
        $client_name = $document->product->client->business_name;
        $type = $document->type;
        $created_at = $document->created_at->format('Ymd');
        $ext = pathinfo($document->path, PATHINFO_EXTENSION);
        $qualified_name = $client_name . '_' . $type . '_' . $created_at . '.' . $ext;

        return Storage::download($document->path, $qualified_name);
    }

    public function update_document_expiration(Request $request, $documentId)
    {
        $document = ProductDocument::findOrFail($documentId);
        $document->update(['expires_at' => $request['expires_at']]);
        $document->save();

        return response($document, 200);
    }
}
