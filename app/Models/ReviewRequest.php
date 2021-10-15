<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
// use App\Models\User;
use App\Models\Facility;
use App\Models\Product;
use App\Models\Ingredient;
use App\Models\Report;

class ReviewRequest extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'type',
    // ];

    public static function create(array $data)
    {
        // product
        $product = new self();
        $product->client_id = $data['client_id'];
        $product->reviewer_id = $data['reviewer_id'];
        $product->facility_id = $data['facility_id'];
        $product->type = $data['type'];
        $product->status = $data['status'];
        $product->current_step_index = $data['current_step_index'];
        $product->save();

        return $product;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    // public function reviewer()
    // {
    //     return $this->belongsTo(User::class);
    // }

    public function facilities()
    {
        return $this->hasMany(Facility::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }
}
