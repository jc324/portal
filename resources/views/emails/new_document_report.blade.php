@component('mail::message')
# New Document Report

Dear {{ $client_name }},

A new document report has been uploaded to your profile. You may find it under the **Reports > Document Reports** section in the Client Portal.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/reports/document'])
View Document Report
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
