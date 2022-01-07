<?php

namespace App\Mail;

use App\Models\Certificate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\HtmlString;

class CertificateHardCopyRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $certificate_id;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(int $certificate_id)
    {
        $this->certificate_id = $certificate_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $certificate = Certificate::findOrFail($this->certificate_id);
        $this->message = "<strong>" . $certificate->client->business_name . "</strong> requested a hard copy for certificate <strong>" . $this->certificate_id . "</strong> (" . $certificate->created_at . ").";

        return $this->html(new HtmlString($this->message));
    }
}
