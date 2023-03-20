@component('mail::message')
# Registration Received

{!! $intro !!}

Your registration will be picked up by a review agent shortly. Once assigned, you will be notified via email. Reviews are typically completed between a 2 and 5 week timeframe.

For questions/comments, please contact our review team:

@component('mail::button', ['url' => 'mailto:review@halalwatchworld.org'])
Contact Review
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
