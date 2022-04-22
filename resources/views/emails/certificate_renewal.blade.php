@component('mail::message')
# Certificate Renewal

Dear {{ $client_name }},

This is a notice to let you know that your certificate will expire in 30 days.

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
