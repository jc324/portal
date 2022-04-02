@component('mail::message')
# Weekly Progress Report

{!! $body !!}

@component('mail::button', ['url' => 'mailto:support@halalwatchworld.org'])
Contact Support
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
