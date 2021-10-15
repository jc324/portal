<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    // get profile
    public function get_current_user_profile(Request $request)
    {
        return $request->user()->profile;
    }

    // update profile
    public function update_current_user_profile(Request $request)
    {
        $input = $request->only([
            'first_name',
            'last_name',
            'phone_number',
            'cell_number',
            'address',
            'country',
            'city',
            'state',
            'zip',
            'avatar',
        ]);
        $profile = $request->user()->profile;
        $profile->update($input);
        $profile->save();

        response(null, 200);
    }

    public function update_avatar(Request $request)
    {
        $path = Storage::putFile('avatars', $request->file('avatar'));
        $profile = $request->user()->profile;
        Storage::delete($profile->avatar); // delete existing avatar if exists
        $profile->update(['avatar' => $path]);

        return response($path, 200);
    }

    // @TODO add better error reporting
    public function change_password(Request $request)
    {
        $input = $request->only([
            'current_password',
            'new_password',
            'confirm_new_password'
        ]);

        $current_user = $request->user();
        $current_password = $current_user->password;

        if ($input['new_password'] !== $input['confirm_new_password']) {
            return response(null, 422);
        } elseif (Hash::check($input['current_password'], $current_password)) {
            $current_user->password = Hash::make($input['new_password']);
            $current_user->save();
            return response(null, 200);
        } else {
            return response(null, 422);
        }
    }
}
