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
        // review_request
        $review_request = new self();
        $review_request->client_id = $data['client_id'];
        $review_request->reviewer_id = $data['reviewer_id'];
        $review_request->hed_id = $data['hed_id'];
        $review_request->facility_id = $data['facility_id'];
        $review_request->type = $data['type'];
        $review_request->status = $data['status'];
        $review_request->current_step_index = $data['current_step_index'];
        $review_request->assured_space_check = false;
        $review_request->save();

        return $review_request;
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

    public function manufacturers()
    {
        return $this->ingredients()->with('manufacturer')->get()->pluck('manufacturer')->unique();
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function is_locked($current_user_id)
    {
        if (!$this->hed_id || $this->hed_id === $current_user_id) return false;

        try {
            return User::find($this->hed_id)->isOnline();
        } catch (\Throwable $th) {
            return true;
        }
    }

    public function get_submission_progress()
    {
        if ($this->status == "DRAFT") {
            switch ($this->type) {
                case 'NEW_FACILITY':
                    return (($this->current_step_index + 1) * 100) / 9;
                    break;

                case 'NEW_PRODUCTS':
                    return (($this->current_step_index + 1) * 100) / 6;
                    break;

                case 'NEW_FACILITY_AND_PRODUCTS':
                    return (($this->current_step_index + 1) * 100) / 11;
                    break;
            }
        } else return 100;
    }

    public function get_review_progress()
    {
        $facility_docs = Facility::find($this->facility_id)->documents;
        $facility_docs_count = $facility_docs->count();
        $approved_facility_docs_count = 0;

        foreach ($facility_docs as $doc)
            if ($doc->status == "APPROVED") $approved_facility_docs_count++;

        $facility_docs_progress = $facility_docs_count > 0 ? ($approved_facility_docs_count * 100) / $facility_docs_count : 0;

        if ($products = $this->products) {
            $product_count = $products->count();
            $ingredient_count = 0;
            $approved_product_docs_count = 0;
            $approved_ingredient_docs_count = 0;
            $haram_ingredients = 0;

            foreach ($products as $product) {
                if ($docs = $product->documents)
                    if (count($docs) > 0 && $docs[0]->status == "APPROVED") $approved_product_docs_count++;

                if ($ingredients = $product->ingredients) {
                    $ingredient_count += $ingredients->count();

                    foreach ($ingredients as $ingredient) {
                        if ($ingredient->recommendation == "HARAM") $haram_ingredients++;
                        if ($manufacturer = $ingredient->manufacturer) {
                            if ($docs = $manufacturer->documents)
                                if (count($docs) > 0 && $docs[0]->status == "APPROVED") $approved_ingredient_docs_count++;
                        }
                    }
                }
            }

            $product_docs_progress = $product_count > 0 ? ($approved_product_docs_count * 100) / $product_count : 0;

            // considering all
            if ($ingredient_count > 0) {
                $ingredients_progress = (($ingredient_count - $haram_ingredients) * 100) / $ingredient_count;
                $ingredient_docs_progress = ($approved_ingredient_docs_count * 100) / $ingredient_count;

                return ($facility_docs_progress + $product_docs_progress + $ingredients_progress + $ingredient_docs_progress) / 4;
            }

            // considering facility and products only
            return ($facility_docs_progress + $product_docs_progress) / 2;
        }

        // considering facility only
        return $facility_docs_progress;
    }
}
