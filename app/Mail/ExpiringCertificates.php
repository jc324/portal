<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ExpiringCertificates extends Mailable
{
    use Queueable, SerializesModels;

    public $expired_certs_table;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($expired_certs_table)
    {
        $this->expired_certs_table = $expired_certs_table;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.expiring_certificates', ['expired_certs_table' => $this->expired_certs_table]);
    }
}
