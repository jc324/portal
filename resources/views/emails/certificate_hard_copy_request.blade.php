@component('mail::message')
# Certificate Hard Copy Request

Dear {{ $client_name }},

We have successfully received your request for a hard copy of certificate (ID: {{ $certificate_id }}). We will get back to you within 5 business days. If you have questions, feel free to contact support.

@component('mail::button', ['url' => 'mailto:support@halalwatchworld.org'])
Contact Support
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
