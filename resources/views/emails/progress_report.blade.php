@component('mail::message')
# Progress Report

{!! $body !!}

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
