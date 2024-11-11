<?php

namespace App\Http\Controllers;

use App\Mail\NewAccount;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Mail;

class ReviewerController extends Controller
{
    public function register_client(Request $request)
    {
        $validated = $request->validate([
            'business_name' => '',
            'website' => '',
            'description' => '',
            'address' => '',
            'country' => '',
            'city' => '',
            'state' => '',
            'zip' => '',
            'first_name' => '',
            'last_name' => '',
            'email' => '',
            'phone_number' => '',
            'cell_number' => '',
            'password' => '',
            'confirm_password' => ''
        ]);
        $validated['reviewer_id'] = $request->user()->id;

        if ($validated['password'] !== $validated['confirm_password'])
            return response()->json([
                'message' => 'Passwords do not match.'
            ], 422);

        $client = Client::create($validated);
        $to = $validated['email'];
        $body = 'Dear ' . $validated['first_name'] . ' ' . $validated['last_name'] . ",\n\n";
        $body .= "A new Client Portal account has been registered at [portal.halalwatchworld.org](https://portal.halalwatchworld.org/). You may complete your profile after logging in using the below credentials:\n\n";
        $body .= " - Username: **" . $to . "**\n";
        $body .= " - Password: **" . $validated['password'] . "**\n";

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new NewAccount($body));

        return $client;
    }
}
