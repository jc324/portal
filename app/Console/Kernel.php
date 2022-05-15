<?php

namespace App\Console;

use App\Http\Controllers\ReviewRequestController;
use App\Mail\CertificateExpired;
use App\Mail\CertificateRenewal;
use App\Mail\ExpiringCertificates;
use App\Mail\ProgressReport;
use App\Models\Certificate;
use App\Models\ReviewRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            cron_weekly_progress_report();
        })->tuesdays();

        $schedule->call(function () {
            cron_notify_expired_certs();
        })->daily();

        $schedule->call(function () {
            cron_notify_pre_expired_certs();
        })->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}

// TASKS

// * * * * * cd /home2/halalwa1/public_html && php artisan schedule:run >> /dev/null 2>&1
// * * * * * php /home2/halalwa1/public_html/artisan schedule:run 1>> /dev/null 2>&1
// /usr/local/bin/php /home2/halalwa1/public_html/artisan schedule:run 1>> /dev/null 2>&1
// /usr/local/bin/php /home2/halalwa1/public_html/app/Crons/daily.php >/dev/null 2>&1

function cron_weekly_progress_report()
{
    $review_requests = ReviewRequest::where('status', '!=', 'APPROVED')->where('status', '!=', 'REJECTED')->get();

    foreach ($review_requests as $review_request) {
        $controller = new ReviewRequestController();
        $body = $controller->generate_progress_report_email($review_request);
        $client = $review_request->client;
        $to = !empty($client->hed_email) ? $client->hed_email : $client->user->email;

        Mail::to($to)->cc(['review@halalwatchworld.org'])->send(new ProgressReport($body));
    }
}

function cron_notify_expired_certs()
{
    $to = "review@halalwatchworld.org";
    $expired_certs_table = "";
    $certs = Certificate::whereDate('expires_at', DB::raw('CURDATE()'))->get();

    if (!count($certs)) return;

    foreach ($certs as $cert) {
        $client = $cert->client;
        $client_name = !empty($client->hed_name) ? $client->hed_name : $client->business_name;
        $client_email = !empty($client->hed_email) ? $client->hed_email : $client->user->email;

        // to client
        Mail::to($client_email)->cc(['review@halalwatchworld.org'])->send(new CertificateExpired($client_name));

        $expired_certs_table .= '|' . $client->business_name;
        $expired_certs_table .= '|' . $client->hed_name;
        $expired_certs_table .= '|' . $client->hed_email;
        $expired_certs_table .= '|' . $cert->created_at;
        $expired_certs_table .= '|[[DOWNLOAD]](https://portal.halalwatchworld.org/' . $cert->path . ")|\n";
    }

    // to admin/review-team
    Mail::to($to)->send(new ExpiringCertificates($expired_certs_table));
}

function cron_notify_pre_expired_certs()
{
    $certs = Certificate::whereDate('expires_at', date("Y-m-d", strtotime("+30 days")))->get();

    if (!count($certs)) return;

    foreach ($certs as $cert) {
        $client = $cert->client;
        $client_name = !empty($client->hed_name) ? $client->hed_name : $client->business_name;
        $client_email = !empty($client->hed_email) ? $client->hed_email : $client->user->email;
        $form_d_link = $client->risk_type === "HIGH"
            ? "https://www.halalwatchworld.org/docsubmit/form-d-highrisk"
            : "https://www.halalwatchworld.org/docsubmit/form-d-lowrisk";
        // $form_d_link = "https://www.halalwatchworld.org/docsubmit/form-d-highrisk";

        // to client
        Mail::to($client_email)->cc(['review@halalwatchworld.org'])->send(new CertificateRenewal($client_name, $form_d_link));
    }
}
