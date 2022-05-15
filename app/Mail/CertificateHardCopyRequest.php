<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CertificateHardCopyRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $client_name;
    public $certificate_id;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($client_name, int $certificate_id)
    {
        $this->client_name = $client_name;
        $this->certificate_id = $certificate_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.certificate_hard_copy_request', [
            'client_name' => $this->client_name,
            'certificate_id' => $this->certificate_id,
        ]);
    }
}
