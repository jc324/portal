<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ReviewerController extends Controller
{
    //
    public function register_client(Request $request)
    {
        $validated = $request->validate([
            'business_name' => 'required',
            'website' => '',
            'description' => '',
            'address' => '',
            'country' => '',
            'city' => '',
            'state' => '',
            'zip' => '',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone_number' => '',
            'cell_number' => '',
            'password' => 'required',
            'confirm_password' => 'required'
        ]);
        $validated['reviewer_id'] = $request->user()->id;

        if ($validated['password'] !== $validated['confirm_password'])
            return response()->json([
                'message' => 'Passwords do not match.'
            ], 422);

        $client = Client::create($validated);

        return $client;
    }
}
