<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Ingredient;
use App\Models\ManufacturerDocument;
use App\Models\Manufacturer;
use App\Models\Product;

class IngredientController extends Controller
{
    public function get_ingredients($productId)
    {
        return Ingredient::with('manufacturer')->where('product_id', $productId)->get();
    }

    public function add_ingredient(Request $request)
    {
        $data = $request->only(
            'review_request_id',
            'product_id',
            'name',
            'manufacturer_name',
            'description',
            'recommendation',
            'source',
        );
        $data['manufacturer_id'] = Manufacturer::findOrCreate($data['manufacturer_name'])->id;
        $data['client_id'] = Product::find($data['product_id'])->client->id;

        // defaults
        if (empty($data['review_request_id'])) $data['review_request_id'] = 0;
        if (empty($data['recommendation'])) $data['recommendation'] = 'HALAL_ASLAN';
        if (empty($data['source'])) $data['source'] = 'ANIMAL';

        return Ingredient::create($data);
    }

    public function update_ingredient(Request $request, $ingredientId)
    {
        $data = $request->only(
            'name',
            'description',
            'recommendation',
            'source',
        );
        $data['manufacturer_id'] = Manufacturer::findOrCreate($request['manufacturer_name'])->id;
        $ingredient = Ingredient::where('id', $ingredientId);
        $ingredient->update($data);

        return $ingredient->get()[0];
    }

    public function delete_ingredient($ingredientId)
    {
        Ingredient::findOrFail($ingredientId)->delete();

        return response('', 200);
    }
}
