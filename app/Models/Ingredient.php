<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
use App\Models\Product;
use App\Models\Manufacturer;

class Ingredient extends Model
{
    use HasFactory;

    public static function create(array $data)
    {
        // ingredient
        $ingredient = new self();
        $ingredient->review_request_id = $data['review_request_id'];
        $ingredient->client_id = $data['client_id'];
        $ingredient->product_id = $data['product_id'];
        $ingredient->manufacturer_id = $data['manufacturer_id'];
        $ingredient->name = $data['name'];
        $ingredient->description = $data['description'];
        $ingredient->recommendation = $data['recommendation'];
        $ingredient->source = $data['source'];
        $ingredient->save();

        return $ingredient;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }
}
