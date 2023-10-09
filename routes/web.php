<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\ReviewRequestController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\TestController;

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

// Route::post('login', [ 'as' => 'login', 'uses' => 'LoginController@do']);

Route::get('/avatars/{filename}', function ($filename) {
    return Storage::response('avatars/' . $filename);
});

Route::get('/previews/{filename}', function ($filename) {
    return Storage::response('previews/' . $filename);
});

Route::get('/login', function () {
    return redirect('/');
})->name('login');

// private resources
Route::middleware('auth:sanctum')->get('/documents/{filename}', function ($filename) {
    return Storage::download('documents/' . $filename);
});
// http://127.0.0.1:8000/reports/document/3
Route::middleware('auth:sanctum')->get('/client/document/{id}', [DocumentController::class, 'download_document_by_id']);
Route::middleware('auth:sanctum')->get('/reports/document/{id}', [ReportsController::class, 'download_document_by_id']);
Route::middleware('auth:sanctum')->get('/certificates/document/{id}', [CertificatesController::class, 'download_document_by_id']);
// reviewer review request docs
Route::middleware('auth:sanctum')->get('/reviewer/clients/request/{id}/documents', [ReviewRequestController::class, 'download_documents_by_id']);
Route::middleware('auth:sanctum')->get('/reviewer/clients/request/{id}/progress-report', [ReviewRequestController::class, 'generate_progress_report']);
Route::middleware('auth:sanctum')->get('/reviewer/clients/request/{id}/registration-report', [ReviewRequestController::class, 'generate_registration_report']);
// client facility docs
Route::middleware('auth:sanctum')->get('/client/facility/document/{id}', [FacilityController::class, 'download_document_by_id']);
Route::middleware('auth:sanctum')->get('/client/product/document/{id}', [ProductController::class, 'download_document_by_id']);
Route::middleware('auth:sanctum')->get('/client/manufacturer/document/{id}', [ManufacturerController::class, 'download_document_by_id']);

// Crons (cron-jobs.org)
Route::get('/cron/certificates', [CertificatesController::class, 'certifcates_cron']);

// test
Route::get('/test', [TestController::class, 'test']);

Route::any('{all}', function () {
    return view('index');
})
    ->where(['all' => '.*']);
