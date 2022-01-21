<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Report;
use App\Models\Client;
use Illuminate\Support\Facades\Storage;

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
        $reports = Report::where(['client_id' => $client_id, 'type' => 'REVIEW_REPORT'])->get()->reverse()->values();;

        return $reports;
    }

    // for client
    public function get_audit_reports(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $reports = Report::where(['client_id' => $client_id, 'type' => 'AUDIT_REPORT'])->get();

        return $reports;
    }

    // for client
    public function get_review_reports(Request $request)
    {
        $client_id = Client::where('user_id', $request->user()->id)->first()->id;
        $reports = Report::where(['client_id' => $client_id, 'type' => 'REVIEW_REPORT'])->get();

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

        return response($report, 200);
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
}
