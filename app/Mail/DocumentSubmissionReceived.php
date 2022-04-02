<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DocumentSubmissionReceived extends Mailable
{
    use Queueable, SerializesModels;

    public $intro;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($intro)
    {
        $this->intro = $intro;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.document_submission_received', ['intro' => $this->intro]);
    }
}
