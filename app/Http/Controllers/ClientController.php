<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Facility;
use App\Models\Product;
use App\Models\ReviewRequest;
use App\Models\User;
use App\Models\Profile;

class ClientController extends Controller
{
    public function get_profile($client_id)
    {
        $client = Client::findOrFail($client_id);
        $profile = $client->user->profile;

        $client_info = $client->only([
            'hed_type',
            'hed_name',
            'hed_phone_number',
            'hed_email'
        ]);

        return array_merge($profile->toArray(), $client_info);
    }

    public function get_dashboard(Request $request)
    {
        $client = Client::where('user_id', $request->user()->id)->first();
        $client_id = $client->id;
        $facility_count = Facility::where('client_id', $client_id)->count();
        $product_count = Product::where('client_id', $client_id)->count();
        $review_request_count = ReviewRequest::where('client_id', $client_id)->count();
        $current_rr = ReviewRequest::where('client_id', $client_id)->latest()->first();
        $current_rr_status = "NONE";
        $current_request_progress = 0;

        if ($current_rr) {
            $current_rr_status = $current_rr->status;

            if ($current_rr->status == "DRAFT") {
                switch ($current_rr->type) {
                    case 'NEW_FACILITY':
                        $current_request_progress = (($current_rr->current_step_index + 1) * 100) / 9;
                        break;

                    case 'NEW_PRODUCTS':
                        $current_request_progress = (($current_rr->current_step_index + 1) * 100) / 4;
                        break;

                    case 'NEW_FACILITY_AND_PRODUCTS':
                        $current_request_progress = (($current_rr->current_step_index + 1) * 100) / 10;
                        break;
                }
            }
        }

        return array(
            'current_request_status' => $current_rr_status,
            'current_request_progress' => $current_request_progress,
            'facility_count' => $facility_count,
            'product_count' => $product_count,
            'has_hed' => $this->has_hed($client),
            'review_request_count' => $review_request_count
        );
    }

    public function has_hed(Client $client)
    {
        return ($client->hed_name && $client->hed_phone_number && $client->hed_email) ? true : false;
    }

    public function get_dashboard_latest_requests(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;

        $review_requests = ReviewRequest::where('client_id', $client_id)->orderBy('id', 'DESC')->take(5)->get();

        // get reviewer, type_color and email
        foreach ($review_requests as $review_request) {
            $reviewer_user = User::find($review_request->reviewer_id);
            $review_request->reviewer = Profile::find($review_request->reviewer_id);
            $review_request->type_color = REVIEW_REQUEST_TYPE_COLOR_MAP[$review_request->type];
            if ($reviewer_user) $review_request->reviewer_email = $reviewer_user->email;
        }

        return $review_requests;
    }

    public function get_clients()
    {
        $clients = Client::all()->reverse()->values();

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

    // for client only // get profile
    public function get_current_user_profile(Request $request)
    {
        $profile = $request->user()->profile;
        $client_info = Client::where('user_id', $request->user()->id)->get([
            'hed_type',
            'hed_name',
            'hed_phone_number',
            'hed_email'
        ]);

        return array_merge($profile->toArray(), $client_info->toArray()[0]);
    }

    // for client only // update profile
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
            'hed_type',
            'hed_name',
            'hed_phone_number',
            'hed_email'
        ]);
        $profile = $request->user()->profile;
        $profile->update($input);
        $profile->save();
        $client = Client::where('user_id', $request->user()->id);
        $client->update([
            'hed_type' => $input['hed_type'],
            'hed_name' => $input['hed_name'],
            'hed_phone_number' => $input['hed_phone_number'],
            'hed_email' => $input['hed_email'],
        ]);

        response(null, 200);
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
