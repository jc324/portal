<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function get_current_user(Request $request)
    {
        $user = $request->user();
        $user['profile'] = $user->profile;

        return $user;
    }

    /**
     * Handle logout.
     */
    public function logout()
    {
        Auth::logout();

        return response('', 200);
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function auto_suggest_users(Request $request)
    {
        $user = $request->user();
        if ($user->role === 'ADMIN') {
            return User::orderBy('id', 'DESC')->get();
        } elseif ($user->role === 'MANAGER') {
            return User::whereIn('role', ['REVIEWER', 'CLIENT', 'HED'])->orderBy('id', 'DESC')->get();
        } elseif ($user->role === 'REVIEWER') {
            return User::whereIn('role', ['CLIENT', 'HED'])->orderBy('id', 'DESC')->get();
        } else {
            return [];
        }
    }

    public function login_as(Request $request, $user_id)
    {
        $user = $request->user();
        if (
            $user->role === "ADMIN"
            || $user->role === "MANAGER"
            || $user->role === "REVIEWER"
        ) {
            Auth::loginUsingId($user_id);
            return response('', 200);
        } else {
            return null;
        }
    }

    public function get_notifications(Request $request, $user_id)
    {
        $user_email = User::findOrFail($user_id)->email;
        $apiKey = getenv('SENDGRID_API_KEY');
        $sg = new \SendGrid($apiKey);
        $query_params = json_decode('{
    "query": "from_email=\"' . $user_email . '\"",
    "limit": 10
}');

        $response = $sg->client->messages()->get(null, $query_params);
        // print $response->statusCode() . "\n";
        // print_r($response->headers());
        // print $response->body() . "\n";

        print $apiKey;

        return response($response->body(), 200);
    }
}
