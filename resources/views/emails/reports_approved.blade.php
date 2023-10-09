@component('mail::message')
# Registration & Audit Report Approved

Dear {{ $client_name }},

Congratulations! Your registration report and audit reports have been reviewed by the Halal Certification Committee and have passed!

Thank you for your transparency throughout this process.

Next Steps: **Contract**

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/reports/'])
View Reports
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
