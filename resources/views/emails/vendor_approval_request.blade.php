@component('mail::message')
# Vendor Approval Request

Dear {{ $manufacturer_name }},

My name is {{ $reviewer_name }}, review agent at Halal Watch World LLC. We are a Halal certification agency based out of Albany, New York.

**{{ $business_name }}** is requesting Halal vendor approval for your company and products. In full disclosure, signing of this form will give halal producing companies the ability to purchase your listed products from the listed producing facility.

{{ $manufacturer_name }} has been listed as a supplier for the following products:

{{ $products }}

Before we are able to issue their halal certificate, we need to verify that you are either halal certified, or halal compliant. 

If you maintain a halal certificate by a reputable agency, please respond to this email with your halal certificate attached.

If you are not currently a halal certified establishment, please fill out the halal disclosure statement by clicking on the button below.

@component('mail::button', ['url' => 'https://www.halalwatchworld.org/docsubmit/halal-disclosure-statement'])
Halal Disclosure Statement
@endcomponent

This information will allow us to complete our review.

Thank you for your assistance.

Regards,<br>
{{ config('app.name') }}
@endcomponent
