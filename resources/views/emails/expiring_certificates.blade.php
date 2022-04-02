@component('mail::message')
To Whom It May Concern,

The following client certificate(s) have expired today:

| Business Name | HED Name | HED Email | Created |            |
|---------------|----------|-----------|---------|------------|
{!! $expired_certs_table !!}

Please be sure to renew your client certificates if they have been approved for recertification. For more details, head over to the Client Portal.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/'])
Client Portal
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
