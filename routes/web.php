<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\ReviewRequestController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\CertificatesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Password reset link request routes...
// Route::get('password/email', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.email');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

// Password reset routes...
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

Route::get('/avatars/{filename}', function ($filename) {
    return Storage::response('avatars/' . $filename);
});

Route::get('/documents/{filename}', function ($filename) {
    return Storage::download('documents/' . $filename);
});

Route::get('/reports/document/{id}', [ReportsController::class, 'download_document_by_id']);

Route::get('/certificates/document/{id}', [CertificatesController::class, 'download_document_by_id']);

// reviewer review request docs
Route::get('/reviewer/clients/request/{id}/documents', [ReviewRequestController::class, 'download_documents_by_id']);

// client facility docs
Route::get('/client/facility/document/{id}', [FacilityController::class, 'download_document_by_id']);

Route::get('/previews/{filename}', function ($filename) {
    return Storage::response('previews/' . $filename);
});

Route::any('{all}', function () {
    return view('index');
})
    ->where(['all' => '.*']);
