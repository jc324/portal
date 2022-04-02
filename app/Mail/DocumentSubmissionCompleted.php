<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DocumentSubmissionCompleted extends Mailable
{
    use Queueable, SerializesModels;

    public $body;
    public $link;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($body, $link)
    {
        $this->body = $body;
        $this->link = $link;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.document_submission_completed', ['body' => $this->body, 'link' => $this->link]);
    }
}
