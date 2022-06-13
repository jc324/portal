@component('mail::message')
# Document Failures

Dear {{ $client_name }},

The review team rejected some of your documents in submission (ID: {{ $request_id }}). Click the button below to view the details and update all failed documents.

@component('mail::button', ['url' => 'http://127.0.0.1:8000/client/request/' . $request_id . '/corrections'])
View Failures
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
