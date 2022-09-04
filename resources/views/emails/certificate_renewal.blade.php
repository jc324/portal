@component('mail::message')
# Halal Certificate Renewal

Dear {{ $client_name }},

Halal Watch World LLC would like to thank you for remaining a loyal customer of ours and to welcome you in another year of Halal compliance.

Your certificate (ID: {{ $cert_id }}) is set to **expire within 30 days**. To view your expiring certificate, you may login to your [client portal account](https://portal.halalwatchworld.org/).

You are expected to complete the following prior to certificate expiry in order to extend your certificate an additional year, and maintain your premises as a Halal producing facility:

1. **Audit - (Scheduled Date To Be Emailed)**
2. **Invoice payment (To Be Emailed)**

After renewal, you will receive a new certificate in the mail for the upcoming year.

You will receive an email specifying the exact date and time soon.

If you need to reschedule, **inform us immediately**. You may do so via your audit email.

Failure to attend your audit pre expiration will result in a certificate suspension, and you will not be allowed to sell any products as halal certified during this period.

On behalf of everyone at Halal Watch World, we thank you for your compliance, and your trust in our services. To another year!

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Kind regards,<br>
{{ config('app.name') }}
@endcomponent
