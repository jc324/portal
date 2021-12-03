<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
use App\Models\Product;
use App\Models\FacilityDocument;

class Facility extends Model
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
    //     'category_id',
    //     'created_at',
    //     'updated_at'
    // ];

    public static function create(array $data)
    {
        // facility
        $facility = new self();
        $facility->client_id = $data['client_id'];
        $facility->category_id = $data['category_id'];
        $facility->name = $data['name'];
        $facility->address = $data['address'];
        $facility->country = $data['country'];
        $facility->city = $data['city'];
        $facility->state = $data['state'];
        $facility->zip = $data['zip'];
        $facility->save();

        return $facility;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function documents()
    {
        return $this->hasMany(FacilityDocument::class);
    }
}
