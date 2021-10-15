<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Facility;

class ClientController extends Controller
{
    public function get_clients()
    {
        $clients = Client::all();

        // get client user and reviewer
        foreach ($clients as $client) {
            $client->user->profile;
            $client->reviewer->profile;
            $client['facilities_count'] = $client->facilities->count();
        }

        return $clients;
    }

    public function get_client($clientId)
    {
        $client = Client::findOrFail($clientId);
        $client->user->profile;
        $client->reviewer->profile;
        $client->facilities;

        return $client;
    }

    // for client only
    public function client_get_facility(Request $request, $facilityId)
    {
        return Facility::findOrFail($facilityId);
    }

    public function client_get_facilities(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;

        return Facility::where('client_id', $client_id)->select('id', 'name', 'address')->get();
    }

    public function add_facility(Request $request, $clientId)
    {
        $data = $request->only(
            'category_id',
            'name',
            'address',
            'country',
            'city',
            'state',
            'zip'
        );
        $data['client_id'] = $clientId;

        return Facility::create($data);
    }

    public function assign_reviewer(Request $request, $clientId)
    {
        $client = Client::findOrFail($clientId);
        $client->reviewer_id = $request['reviewer_id'];
        // $client->qualified_id_scheme = $client->reviewer->id . '::' . $client->reviewer->name;
        $client->save();

        return response('', 200);
    }
}
