@component('mail::message')
# New Account

{!! $body !!}

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/'])
Login
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
