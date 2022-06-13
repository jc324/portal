<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DocumentFailures extends Mailable
{
    use Queueable, SerializesModels;

    public $client_name;
    public $request_id;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($client_name, $request_id)
    {
        $this->client_name = $client_name;
        $this->request_id = $request_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.document_failures', [
            'client_name' => $this->client_name,
            'request_id' => $this->request_id
        ]);
    }
}
