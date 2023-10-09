<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ReviewRequest;
use Illuminate\Http\Request;
use PhpOffice\PhpWord\TemplateProcessor;

class TestController extends Controller
{
    public function test(Request $request)
    {
        $registration_report_temp = resource_path() . '/templates/registration_report.docx';
        $save_file_name = 'registration-report' . '_' . date('YmdHis') . '.docx';
        $tp = new TemplateProcessor($registration_report_temp);
        $tp->setValue('ClientName', 'Demo Business');
        $tp->setValue('ProductName', 'Demo Product');
        $tp->setValue('ProductsCount', 13);
        $tp->setValue('IngredientsCount', 13);
        $tp->saveAs($save_file_name);

        return response()->download($save_file_name)->deleteFileAfterSend(true);
    }
}
