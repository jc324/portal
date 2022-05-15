@component('mail::message')
# Halal Certificate Renewal

Dear {{ $client_name }},

Halal Watch World LLC would like to thank you for remaining a loyal customer of ours and to welcome you in another year of Halal compliance.

Your certificate is set to **expire within 30 days**. To view your expiring certificate, login to your [client portal](https://portal.halalwatchworld.org/).

In order to extend your certificate an additional year, and maintain your premises as a Halal producing facility, the following must be completed prior to expiration.

1. **Document Submission Form D - [Recertification]({{ $form_d_link }})**
2. **Remote Audit**
3. **Invoice payment**

After renewal, you will receive a new certificate in the mail for the upcoming year.

Please complete **Form D as soon as possible**. Your audit will be scheduled thereafter.

You will receive an email specifying the exact date and time soon.

If you need to reschedule, **inform us immediately**. You may do so via your remote audit email.

Failure to attend your audit pre expiration will result in a certificate suspension, and you will not be allowed to sell any products as halal certified during this period.

On behalf of everyone at Halal Watch World, we thank you for your compliance, and your trust in our services. To another year!

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Kind regards,<br>
{{ config('app.name') }}
@endcomponent
