<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Facility;
use App\Models\FacilityCategories;
use App\Models\Hed;
use App\Models\Product;
use App\Models\ProductCategories;
use App\Models\ReviewRequest;
use App\Models\User;
use App\Models\Profile;
use App\Models\Report;
use App\Mail\NewAccount;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

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
        $client = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client
            : Client::where('user_id', $request->user()->id)->first();
        $client_id = $client->id;
        $facility_count = Facility::where('client_id', $client_id)->count();
        $product_count = Product::where('client_id', $client_id)->count();
        $review_request_count = ReviewRequest::where('client_id', $client_id)->count();
        $current_rr = ReviewRequest::where('client_id', $client_id)->latest()->first();
        $current_rr_type = $current_rr ? $current_rr->type : "NONE";
        $current_rr_status = $current_rr ? $current_rr->status : "NONE";
        $cr_doc_report = $current_rr ? !is_null(Report::where(['request_id' => $current_rr->id, 'type' => "REVIEW_REPORT"])->first()) : false;
        $cr_audit_report = $current_rr ? !is_null(Report::where(['request_id' => $current_rr->id, 'type' => "AUDIT_REPORT"])->first()) : false;
        $cr_certificate = $current_rr ? !is_null(Certificate::whereDate('created_at', '>', $current_rr->created_at)->first()) : false;

        return array(
            'account_status' => $client->status,
            'cr_id' => $current_rr ? $current_rr->id : null,
            'cr_type' => $current_rr_type,
            'cr_status' => $current_rr_status,
            'cr_submission_progress' => $current_rr ? $current_rr->get_submission_progress() : 0,
            'cr_review_progress' => $current_rr ? $current_rr->get_review_progress() : 0,
            'cr_doc_report' => $cr_doc_report,
            'cr_audit_report' => $cr_audit_report,
            'cr_certificate' => $cr_certificate,
            'facility_count' => $facility_count,
            'product_count' => $product_count,
            'has_hed' => $this->has_hed($client),
            'review_request_count' => $review_request_count,
            'has_expired_certs' => $client->check_expired_certs,
            'has_new_certs' => $client->check_new_certs,
            'has_failed_submissions' => $client->has_failed_submissions(),
        );
    }

    public function get_heds(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $heds = Hed::where('client_id', $client_id)->get();
        $profiles = Profile::whereIn('user_id', $heds->pluck('user_id')->toArray())->get();

        // foreach ($profiles as $profile) {
        //     $profile->email = User::find($profile->user_id)->email;
        // }

        for ($i=0; $i < $profiles->count(); $i++) {
            $profile = $profiles[$i];
            $profile->hed_id = $heds[$i]->id;
            $profile->email = User::find($profile->user_id)->email;
        }

        return $profiles;
    }

    public function register_hed(Request $request)
    {
        $client = Client::where('user_id', $request->user()->id)->first();
        $password = generateRandomString(8);
        $validated = $request->validate([
            'first_name' => '',
            'last_name' => '',
            'email' => '',
            'phone_number' => '',
        ]);
        $validated['client_id'] = $client->id;
        $validated['password'] = $password;

        $hed = Hed::create($validated);
        $to = $validated['email'];
        $body = 'Dear ' . $validated['first_name'] . ' ' . $validated['last_name'] . ",\n\n";
        $body .= "**" . $client->business_name . "** registered you as a Halal Enforcement Director on their Client Portal account at [portal.halalwatchworld.org](https://portal.halalwatchworld.org/). You may complete your profile after logging in using the below credentials:\n\n";
        $body .= " - Username: **" . $to . "**\n";
        $body .= " - Password: **" . $password . "**\n";

        Mail::to($to)->bcc(['review@halalwatchworld.org'])->send(new NewAccount($body));

        $profile = $hed->user->profile;
        $profile->hed_id = $hed->id;
        $profile->email = $to;

        return $profile;
    }

    public function has_hed(Client $client)
    {
        return Hed::where('client_id', $client->id)->first() ? true : false;
    }

    public function delete_hed(Request $request, $hed_id)
    {
        $hed = Hed::findOrFail($hed_id);
        $user = $hed->user;
        $profile = $user->profile;

        $profile->delete();
        $user->delete();
        $hed->delete();

        return response(null, 200);
    }

    public function get_dashboard_latest_requests(Request $request)
    {
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;

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
        $clients = Client::all()->values();

        // get client user and reviewer
        foreach ($clients as $client) {
            $client->user->profile;
            $client->reviewer->profile;
            $client['facility_count'] = $client->facilities->count();
            $client['product_count'] = $client->products->count();
            $client['report_count'] = $client->reports->count();
            $client['approved_report_count'] = $client->approved_report_count();
        }

        $clients_list = $clients->toArray();

        usort($clients_list, function ($a, $b) {
            return $a['report_count'] - $a['approved_report_count'];
        });

        return array_reverse($clients_list);
    }

    public function get_client($clientId)
    {
        $client = Client::findOrFail($clientId);
        $client->user->profile;
        $client->reviewer->profile;
        $client->facilities;
        $client['report_count'] = $client->reports->count();
        $client['approved_report_count'] = $client->approved_report_count();

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

        return response(null, 200);
    }

    public function get_last_draft_submission(Request $request)
    {
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;

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
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;
        $facilities = Facility::where('client_id', $client_id)->get();

        foreach ($facilities as $facility) {
            $facility->qualified_id = FacilityCategories::find($facility->category_id)->code . $facility->id;
        }

        return $facilities;
    }

    // for client only
    public function client_get_all_products(Request $request)
    {
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;
        $products = Product::where('client_id', $client_id)->get();

        foreach ($products as $product) {
            $facility = $product->facility;
            $product_facility_category_code = $facility ? FacilityCategories::find($product->facility->category_id)->code : '00';
            $product_category_code = '00';
            if ($p = ProductCategories::find($product->category_id)) $product_category_code = $p->code;
            $qualified_id = $product_facility_category_code . $product->facility_id . '_' . $product_category_code . $product->id;
            $product->qualified_id = $qualified_id;
        }

        return $products;
    }

    public function client_get_facilities(Request $request)
    {
        $client_id = $request->user()->role === "HED"
            ? Hed::where('user_id', $request->user()->id)->first()->client_id
            : Client::where('user_id', $request->user()->id)->first()->id;

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

    public function update_qrcode(Request $request, $client_id)
    {
        $path = Storage::putFile('qrcodes', $request->file('qrcode'));
        $client = Client::findOrFail($client_id);
        Storage::delete($client->qrcode); // delete existing qrcode if exists
        $client->update(['qrcode' => $path]);

        return response($path, 200);
    }
}

function generateRandomString($length = 10)
{
    return substr(str_shuffle(str_repeat(
        $x = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ceil($length / strlen($x))
    )), 1, $length);
}
