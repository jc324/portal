@component('mail::message')
# New Audit Report

Dear {{ $client_name }},

Congratulations! Your audit and submitted documentation have been reviewed and have passed.

If you are a new client, your Halal Certificate and final invoice will be issued within 2 business days. You will be receiving communication from the certification committee at that time.

Renewing clients will receive an updated certificate on the date of expiration.

Thank you for your transparency throughout this process.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/reports/audit'])
View Audit Report
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
