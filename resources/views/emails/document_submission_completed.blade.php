@component('mail::message')
# Registration Completed

{!! $body !!}

@component('mail::button', ['url' => $link])
Review Submission
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
