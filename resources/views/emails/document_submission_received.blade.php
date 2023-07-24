@component('mail::message')
# Registration Received

{!! $intro !!}

Your submitted registration is now in queue for review. You will be notified of its progress via email. Reviews are typically completed between a 2 and 5 week timeframe.

For questions/comments, please contact our review team:

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
