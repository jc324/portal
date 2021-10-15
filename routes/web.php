<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\FacilityController;

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

Route::get('/avatars/{filename}', function ($filename) {
    return Storage::response('avatars/' . $filename);
});

Route::get('/documents/{filename}', function ($filename) {
    return Storage::download('documents/' . $filename);
});

Route::get('/client/facility/document/{id}', [FacilityController::class, 'download_document_by_id']);

Route::get('/previews/{filename}', function ($filename) {
    return Storage::response('previews/' . $filename);
});

Route::any('{all}', function () {
    return view('index');
})
    ->where(['all' => '.*']);
