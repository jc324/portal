<?php

namespace App\Mail;

use App\Models\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\HtmlString;

class NewClientDocument extends Mailable
{
    use Queueable, SerializesModels;

    public $client;
    public $document_id;
    public $document_type;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Client $client, int $document_id, string $document_type)
    {
        $this->client = $client;
        $this->document_id = $document_id;
        $this->document_type = $document_type;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->message = "<strong>" . $this->client->business_name . "</strong>";
        $this->message .= $this->client->hed_email ? " (" . $this->client->hed_email . ")" : "";
        $this->message .= " uploaded a new <strong>" . $this->document_type . "</strong> document (ID: " . $this->document_id . ") on " . now() . ".";

        return $this->html(new HtmlString($this->message));
    }
}
