@component('mail::message')
# New Certificate

Dear {{ $client_name }},

Congratulations! Your facility and/or products have been approved as halal certified!

A new certificate has been uploaded to your profile. You may find it under the **Certificates** section on the left side of your client portal.

If you are a new client, welcome to the Halal Watch World Family!

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/client/certificates'])
View Certificates
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
