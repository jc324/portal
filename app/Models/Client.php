<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Profile;
use App\Models\Facility;

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
        'heds',
        'risk_type',
        'status'
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

    public function facilities_count()
    {
        return $this->facilities->count();
    }

    function get_emails()
    {
        $to = [$this->user->email];
        $heds = json_decode($this->heds, true);

        foreach ($heds as $hed) {
            array_push($to, $hed['email']);
        }

        return $to;
    }
}
