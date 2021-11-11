<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Report;
use App\Models\Client;

class ReportsController extends Controller
{
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
