<?php

use Illuminate\Support\Facades\Hash;

function randomPassword()
{
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}

$clients = \App\Models\Client::all();
$output = '';

foreach ($clients as $client) {
    $client->user->password = Hash::make(randomPassword());
    $client->user->save();

    $output .= $client->business_name . ":\n    email: " . $client->user->email . ":\n    password: " . $client->user->password . "\n";
}

file_put_contents('global_user_password_reset.md', $output);
