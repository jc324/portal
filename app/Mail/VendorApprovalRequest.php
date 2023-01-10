<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VendorApprovalRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $manufacturer_name;
    public $reviewer_name;
    public $business_name;
    public $products;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(
        $manufacturer_name,
        $reviewer_name,
        $business_name,
        $products
    ) {
        $this->manufacturer_name = $manufacturer_name;
        $this->reviewer_name = $reviewer_name;
        $this->business_name = $business_name;
        $this->products = $products;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.vendor_approval_request', [
            'manufacturer_name' => $this->manufacturer_name,
            'reviewer_name' => $this->reviewer_name,
            'business_name' => $this->business_name,
            'products' => $this->products,
        ]);
    }
}
