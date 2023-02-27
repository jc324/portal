<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
use App\Models\ReviewRequest;

class Report extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tags',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function review_request()
    {
        return $this->belongsTo(ReviewRequest::class);
    }
}
