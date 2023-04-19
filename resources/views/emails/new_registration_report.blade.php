@component('mail::message')
# New Registration Report

Dear {{ $client_name }},

A new registration report has been uploaded to your profile. You may find it under the **Reports > Registration Reports** section in the Client Portal.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/reports/document'])
View Registration Report
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
