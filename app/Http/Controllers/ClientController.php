<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Facility;
use App\Models\FacilityCategories;
use App\Models\Product;
use App\Models\ProductCategories;
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
            'heds',
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
        $has_expired_certs = Certificate::where('client_id', $client_id)->where('expires_at', '<=', now())->first() ? true : false;

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
            'account_status' => $client->status,
            'current_request_id' => $current_rr ? $current_rr->id : null,
            'current_request_status' => $current_rr_status,
            'current_request_progress' => $current_request_progress,
            'facility_count' => $facility_count,
            'product_count' => $product_count,
            'has_hed' => $this->has_hed($client),
            'review_request_count' => $review_request_count,
            'has_expired_certs' => $has_expired_certs
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
            $review_request->status_color = REVIEW_REQUEST_STATUS_COLOR_MAP[$review_request->status];
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
            'heds',
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
            'heds',
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
            'heds' => $input['heds'],
            'hed_type' => $input['hed_type'],
            'hed_name' => $input['hed_name'],
            'hed_phone_number' => $input['hed_phone_number'],
            'hed_email' => $input['hed_email'],
        ]);

        response(null, 200);
    }

    public function get_last_draft_submission(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;

        $current_draft = ReviewRequest::where(['client_id' => $client_id, 'status' => 'DRAFT'])->orderBy('id', 'DESC')->first();

        return $current_draft;
    }

    public function update_user_profile(Request $request, $client_id)
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
            'heds',
            'hed_type',
            'hed_name',
            'hed_phone_number',
            'hed_email'
        ]);
        $client = Client::findOrFail($client_id);
        $client->update([
            'heds' => $input['heds'],
            'hed_type' => $input['hed_type'],
            'hed_name' => $input['hed_name'],
            'hed_phone_number' => $input['hed_phone_number'],
            'hed_email' => $input['hed_email'],
        ]);
        $profile = $client->user->profile;
        $profile->update($input);
        $profile->save();

        response(null, 200);
    }

    // for client only
    public function client_get_facility(Request $request, $facilityId)
    {
        return Facility::findOrFail($facilityId);
    }

    // for client only
    public function client_get_all_facilities(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $facilities = Facility::where('client_id', $client_id)->get();

        foreach ($facilities as $facility) {
            $facility->qualified_id = FacilityCategories::find($facility->category_id)->code . $facility->id;
        }

        return $facilities;
    }

    // for client only
    public function client_get_all_products(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $products = Product::where('client_id', $client_id)->get();

        foreach ($products as $product) {
            $facility = $product->facility;
            $product_facility_category_code = $facility ? FacilityCategories::find($product->facility->category_id)->code : '00';
            $product_category_code = ProductCategories::find($product->category_id)->code;
            $qualified_id = $product_facility_category_code . $product->facility_id . '_' . $product_category_code . $product->id;
            $product->qualified_id = $qualified_id;
        }

        return $products;
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

    public function set_risk_type(Request $request, $client_id)
    {
        $client = Client::findOrFail($client_id);
        $client->update(['risk_type' => $request['risk_type']]);
        $client->save();

        return response('', 200);
    }

    public function set_status(Request $request, $client_id)
    {
        $client = Client::findOrFail($client_id);
        $client->update(['status' => $request['status']]);
        $client->save();

        return response('', 200);
    }
}
