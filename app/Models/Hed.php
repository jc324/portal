<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Profile;

class Hed extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [];

    public static function create(array $data)
    {
        // client user
        $user = User::create([
            'name' => $data['first_name'] . " " . $data['last_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $user->role = 'HED';
        $user->save();

        // client user profile
        $profile = new Profile;
        $profile->user_id = $user->id;
        $profile->first_name = $data['first_name'];
        $profile->last_name = $data['last_name'];
        $profile->phone_number = $data['phone_number'];
        $profile->save();

        // hed
        $hed = new self();
        $hed->user_id = $user->id;
        $hed->client_id = $data['client_id'];
        $hed->save();

        return $hed;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    function get_email()
    {
        return $this->user->email;
    }
}
