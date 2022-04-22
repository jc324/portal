@component('mail::message')
# New Audit Report

Dear {{ $client_name }},

A new audit report has been uploaded to your profile. You may find it under the **Reports > Audit Reports** section in the Client Portal.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/reports/audit'])
View Audit Report
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
