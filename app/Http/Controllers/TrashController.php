<?php

namespace App\Http\Controllers;

use App\Mail\NewAuditPrintout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;

use App\Models\Client;
use App\Models\Facility;
use App\Models\Product;
use App\Models\Ingredient;
use App\Mail\NewClientDocument;

class TrashController extends Controller
{
    public function get_trash()
    {
        $facilities = Facility::onlyTrashed()->get()->map(function($item) {
            $item['data_type'] = 'FACILITY';
            $item['business_name'] = Client::find($item->client_id)->business_name;
            return $item;
        });
        
        $products = Product::onlyTrashed()->get()->map(function($item) {
            $item['data_type'] = 'PRODUCT';
            $item['business_name'] = Client::find($item->client_id)->business_name;
            return $item;
        });
        
        $ingredients = Ingredient::onlyTrashed()->get()->map(function($item) {
            $item['data_type'] = 'INGREDIENT';
            $item['business_name'] = Client::find($item->client_id)->business_name;
            return $item;
        });

        return response()->json([...$facilities, ...$products, ...$ingredients]);
    }

    public function restore(string $dataType, int $id)
    {
        switch(strtoupper($dataType)) {
            case 'FACILITY':
                Facility::withTrashed()->findOrFail($id)->restore();
                break;
            case 'PRODUCT':
                Product::withTrashed()->findOrFail($id)->restore();
                break;
            case 'INGREDIENT':
                Ingredient::withTrashed()->findOrFail($id)->restore();
                break;
            default:
                return response()->json(['error' => 'Invalid data type'], 400);
        }

        return response('', 200);
    }

    public function restore_all()
    {
        Facility::onlyTrashed()->restore();

        return response('', 200);
    }
}
