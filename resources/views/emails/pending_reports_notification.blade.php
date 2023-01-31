@component('mail::message')
# Pending Reports Notification

Dear Manager,

There {{ $pending_count > 1 ? "are" : "is" }} **{{ $pending_count }}** {{ $pending_count > 1 ? "reports" : "report" }} in a 'PENDING' state.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/reviewer/clients'])
View Pending Reports
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
