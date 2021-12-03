<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
use App\Models\Facility;
use App\Models\Ingredient;
use App\Models\ProductDocument;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // protected $hidden = [
    //     'id',
    //     'review_request_id',
    //     'client_id',
    //     'facility_id',
    //     'category_id',
    //     'preview_image',
    //     'created_at',
    //     'updated_at',
    // ];

    public static function create(array $data)
    {
        // product
        $product = new self();
        $product->review_request_id = $data['review_request_id'];
        $product->client_id = $data['client_id'];
        $product->facility_id = $data['facility_id'];
        $product->category_id = $data['category_id'];
        $product->name = $data['name'];
        $product->description = $data['description'];
        $product->preview_image = $data['preview_image'];
        $product->save();

        return $product;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function documents()
    {
        return $this->hasMany(ProductDocument::class);
    }
}
