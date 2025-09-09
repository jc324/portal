@component('mail::message')
# New NAQ Received

Dear Admin,

An NAQ form has been submitted. Please review it at your earliest convenience.

Details:

{{ $details }}

@component('mail::button', ['url' => 'https://www.meistertask.com/app/project/wyEANjTm/prospect-tracking'])
View Prospect Tracking
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
