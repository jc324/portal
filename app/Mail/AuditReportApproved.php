<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AuditReportApproved extends Mailable
{
    use Queueable, SerializesModels;

    public $client_name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($client_name)
    {
        $this->client_name = $client_name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.audit_report_approved', ['client_name' => $this->client_name]);
    }
}
