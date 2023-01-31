<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PendingReportsNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $pending_count;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($pending_count)
    {
        $this->pending_count = $pending_count;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.pending_reports_notification', ['pending_count' => $this->pending_count]);
    }
}
