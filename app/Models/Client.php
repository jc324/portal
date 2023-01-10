<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Profile;
use App\Models\Hed;
use App\Models\Facility;
use App\Models\Product;
use App\Models\Ingredient;
use App\Models\ReviewRequest;

class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'hed_type',
        'hed_name',
        'hed_phone_number',
        'hed_email',
        'risk_type',
        'status',
        'heds',
        'check_expired_certs',
        'check_new_certs'
    ];

    public static function create(array $data)
    {
        // client user
        $user = User::create([
            'name' => $data['business_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $user->role = 'CLIENT';
        $user->save();

        // client user profile
        $profile = new Profile;
        $profile->user_id = $user->id;
        $profile->first_name = $data['first_name'];
        $profile->last_name = $data['last_name'];
        $profile->phone_number = $data['phone_number'];
        $profile->cell_number = $data['cell_number'];
        $profile->address = $data['address'];
        $profile->country = $data['country'];
        $profile->city = $data['city'];
        $profile->state = $data['state'];
        $profile->zip = $data['zip'];
        $profile->save();

        // client
        $client = new self();
        $client->user_id = $user->id;
        $client->reviewer_id = $data['reviewer_id'];
        $client->business_name = $data['business_name'];
        $client->website = $data['website'];
        $client->description = $data['description'];
        $client->heds = '[]';
        $client->check_expired_certs = false;
        $client->check_new_certs = false;
        $client->save();

        return $client;
    }

    /**
     * Get the user that owns this client 'profile'.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviewer()
    {
        return $this->hasOne(User::class, 'id', 'reviewer_id');
    }

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

    public function approved_report_count()
    {
        return Report::where(['client_id' => $this->id, 'status' => 'APPROVED'])->count();
    }

    public function facilities_count()
    {
        return $this->facilities->count();
    }

    function get_email()
    {
        return $this->user->email;
    }

    function get_hed_emails()
    {
        $emails = [];
        $heds = Hed::where('client_id', $this->id)->get();

        foreach ($heds as $hed) {
            $emails[] = $hed->user->email;
        }

        return $emails;
    }

    function get_emails()
    {
        $emails = [$this->get_email()];
        $heds = Hed::where('client_id', $this->id)->get();

        foreach ($heds as $hed) {
            $emails[] = $hed->user->email;
        }

        return $emails;
    }

    function has_failed_submissions()
    {
        return ReviewRequest::where(['client_id' => $this->id, 'status' => 'REJECTED'])->first() ? true : false;
    }
}
