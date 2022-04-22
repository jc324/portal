@component('mail::message')
# Audit Scheduling Preparation & Instructions

Dear {{ $client_name }},

We appreciate your being transparent and cooperative throughout the process. You may now proceed to schedule your audit.

Please feel free to reach out with any questions that you may have. Thank you for your cooperation, and for your trust in our services.

@component('mail::button', ['url' => 'https://www.halalwatchworld.org/requirements/halal-audit-preparation-instructions'])
Schedule Audit
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
