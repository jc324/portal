<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CertificateRenewal extends Mailable
{
    use Queueable, SerializesModels;

    public $cert_id;
    public $client_name;
    public $form_d_link;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($cert_id, $client_name, $form_d_link)
    {
        $this->cert_id = $cert_id;
        $this->client_name = $client_name;
        $this->form_d_link = $form_d_link;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.certificate_renewal', [
            'cert_id' => $this->cert_id,
            'client_name' => $this->client_name,
            'form_d_link' => $this->form_d_link,
        ]);
    }
}
