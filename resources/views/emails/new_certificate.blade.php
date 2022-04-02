@component('mail::message')
# New Certificate

Dear {{ $client_name }},

A new certificate has been uploaded to your profile. You may find it under the **Certificates** section in the Client Portal.

@component('mail::button', ['url' => 'https://www.halalwatchworld.org/client/certificates'])
View Certificates
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
