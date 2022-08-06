@component('mail::message')
# Halal Certificate Expires Today

Dear {{ $client_name }},

This is a notice to let you know that your certificate will expire by 11:59pm today.

If you have already been approved for recertification, CONGRATULATIONS! you will receive an email with a link to your updated certificate for the new year.

If you have not been approved for recertification, please contact your account specialist at 877-425-2599 extension 3.

@component('mail::button', ['url' => 'mailto:support@halalwatchworld.org'])
Contact Support
@endcomponent

Thank you!<br>
{{ config('app.name') }}
@endcomponent
