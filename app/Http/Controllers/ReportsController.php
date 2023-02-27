<?php

namespace App\Http\Controllers;

use App\Mail\AuditReportApproved;
use App\Mail\NewAuditReport;
use App\Mail\NewDocumentReport;
use App\Mail\PendingReportsNotification;
use Illuminate\Http\Request;

use App\Models\Report;
use App\Models\User;
use App\Models\Client;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;

class ReportsController extends Controller
{
    // for admin
    public function get_client_audit_reports($client_id)
    {
        $reports = Report::where(['client_id' => $client_id, 'type' => 'AUDIT_REPORT'])->get()->reverse()->values();;

        return $reports;
    }

    // for admin
    public function get_client_review_reports($client_id)
    {
        $reports = Report::where(['client_id' => $client_id, 'type' => 'REVIEW_REPORT'])->get()->reverse()->values();

        return $reports;
    }

    // for client
    public function get_audit_reports(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $reports = Report::where(['client_id' => $client_id, 'type' => 'AUDIT_REPORT'])->get()->reverse()->values();

        return $reports;
    }

    // for client
    public function get_review_reports(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $reports = Report::where(['client_id' => $client_id, 'type' => 'REVIEW_REPORT'])->get()->reverse()->values();

        return $reports;
    }

    public function add_audit_report(Request $request, $client_id)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $report = new Report;
        $report->client_id = $client_id;
        $report->request_id = 0; // null
        $report->type = "AUDIT_REPORT";
        $report->path = $path;
        $report->save();

        $client = Client::find($client_id);
        $client_name = $client->business_name;
        $to = $client->get_emails();

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new NewAuditReport($client_name));

        return response($report, 200);
    }

    public function add_review_report(Request $request, $client_id)
    {
        $path = Storage::putFile('documents', $request->file('document'));
        $report = new Report;
        $report->client_id = $client_id;
        $report->request_id = 0; // null
        $report->type = "REVIEW_REPORT";
        $report->path = $path;
        $report->save();

        $client = Client::find($client_id);
        $client_name = $client->business_name;
        $to = $client->get_emails();

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new NewDocumentReport($client_name));

        return response($report, 200);
    }

    public function set_status(Request $request, $report_id)
    {
        $data = $request->only('status');
        $report = Report::findOrFail($report_id);
        $report->status = $data['status'];
        $report->save();
        $non_approved = Report::where([
            ['client_id', '=', $report->client_id],
            ['status', '!=', 'APPROVED']
        ])->count();

        if ($report->type === 'AUDIT_REPORT' && $data['status'] === 'APPROVED' && $non_approved === 0) {
            $client = Client::find($report->client_id);
            $client_name = $client->business_name;
            $to = $client->get_emails();

            Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new AuditReportApproved($client_name));
        }

        return response('', 200);
    }

    public function download_document_by_id($report_id)
    {
        $report = Report::findOrFail($report_id);
        $client = Client::findOrFail($report->client_id);
        $file_name = ($report->type === 'AUDIT_REPORT') ? "Audit Report" : "Review Report";
        $path = storage_path('app/' . $report->path);
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        $file_name .= " " . $report->created_at;
        $file_name .= " - " . $client->business_name;
        $file_name .= "." . $ext;

        return response()->download($path, $file_name);
    }

    public function set_tags(Request $request, $report_id)
    {
        $report = Report::findOrFail($report_id);
        $report->update(['tags' => $request['tags']]);
        $report->save();

        return response($report, 200);
    }

    // webhook: https://portal.halalwatchworld.org/api/webhooks/audit-report
    public function audit_report_webhook(Request $request)
    {
        ignore_user_abort(true);

        $data = $request->only('resource', 'data.audit.header_items');

        if ($data['resource']['type'] !== 'INSPECTION')
            return response('', 200);

        $token = env('SAFETYCULTURE_TOKEN');
        $audit_id = $data['resource']['id'];
        $client_id_field = array_filter($data['data']['audit']['header_items'], function ($field) {
            return $field['label'] === 'Enter ClientID from Auditor Printout' ? true : false;
        });
        $client_id = (int) reset($client_id_field)['responses']['text'];
        $client = Client::find($client_id);
        $client_name = $client->business_name;
        $to = $client->get_emails();
        $report_link_res = Http::withToken($token)->get('https://api.safetyculture.io/audits/' . $audit_id . '/web_report_link');
        $report_link = $report_link_res->json()['url'];

        if (Report::where('path', '=', $report_link)->exists())
            return response('', 200);

        $report = new Report;
        $report->client_id = $client_id;
        $report->request_id = 0; // null
        $report->type = "AUDIT_REPORT";
        $report->path = $report_link;
        $report->save();

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new NewAuditReport($client_name));

        return response('', 200);
    }

    public function pending_status_notification()
    {
        ignore_user_abort(true);

        if ($pending_count = Report::where('status', '=', 'PENDING')->count()) {
            $to = User::where('role', '=', 'MANAGER')->pluck('email')->toArray();

            Mail::to($to)->send(new PendingReportsNotification($pending_count));
        }

        return response('', 200);
    }
}
