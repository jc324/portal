@component('mail::message')
# New Audit Printout

{{ $body }}

Regards,<br>
{{ config('app.name') }}
@endcomponent
