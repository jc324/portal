@component('mail::message')
# New Corrections Submitted

Dear Review Team,

{{ $client_name }} submitted their corrections for submission ID: {{ $request_id }}.

@component('mail::button', ['url' => 'https://portal.halalwatchworld.org/reviewer/clients/request/' . $request_id . '/review'])
View Corrections
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
