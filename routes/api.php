<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewerController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\ReviewRequestController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\CertificatesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// For auth
Route::middleware('auth:sanctum')->post('/user', [UserController::class, 'get_current_user']);

// Common
Route::middleware('auth:sanctum')->post('/profile', [ProfileController::class, 'get_current_user_profile']);
Route::middleware('auth:sanctum')->put('/profile', [ProfileController::class, 'update_current_user_profile']);
Route::middleware('auth:sanctum')->post('/profile/avatar', [ProfileController::class, 'update_avatar']);
Route::middleware('auth:sanctum')->put('/profile/change-password', [ProfileController::class, 'change_password']);

// Client
Route::middleware('auth:sanctum')->post('/client/dashboard', [ClientController::class, 'get_dashboard']);
Route::middleware('auth:sanctum')->post('/client/dashboard/latest-requests', [ClientController::class, 'get_dashboard_latest_requests']);
Route::middleware('auth:sanctum')->post('/client/profile', [ClientController::class, 'get_current_user_profile']);
Route::middleware('auth:sanctum')->post('/client/{id}/profile', [ClientController::class, 'get_profile']);
Route::middleware('auth:sanctum')->put('/client/profile', [ClientController::class, 'update_current_user_profile']);
Route::middleware('auth:sanctum')->put('/client/{id}/profile', [ClientController::class, 'update_user_profile']);
Route::middleware('auth:sanctum')->post('/client/last-draft-submission', [ClientController::class, 'get_last_draft_submission']);
Route::middleware('auth:sanctum')->post('/client/documents/recent', [DocumentController::class, 'get_recent_documents']);
Route::middleware('auth:sanctum')->post('/client/documents/uploaded', [DocumentController::class, 'get_documents']);
Route::middleware('auth:sanctum')->post('/client/documents/add', [DocumentController::class, 'add_document']);
Route::middleware('auth:sanctum')->delete('/client/documents/{id}', [DocumentController::class, 'delete_document']);

// Reviewer
Route::middleware('auth:sanctum')->put('/reviewer/register-client', [ReviewerController::class, 'register_client']);
Route::middleware('auth:sanctum')->post('/clients', [ClientController::class, 'get_clients']);
Route::middleware('auth:sanctum')->post('/client/{id}', [ClientController::class, 'get_client']);
Route::middleware('auth:sanctum')->post('/client/{id}/assign-reviewer', [ClientController::class, 'assign_reviewer']);
Route::middleware('auth:sanctum')->post('/client/{id}/risk-type', [ClientController::class, 'set_risk_type']);
Route::middleware('auth:sanctum')->post('/client/{id}/status', [ClientController::class, 'set_status']);
// Route::middleware('auth:sanctum')->post('/client/{id}/facilities', [ClientController::class, 'get_facilities']);
// for client only
Route::middleware('auth:sanctum')->get('/client/facility/{id}', [ClientController::class, 'client_get_facility']);
Route::middleware('auth:sanctum')->get('/client/facilities', [ClientController::class, 'client_get_facilities']);
Route::middleware('auth:sanctum')->get('/client/all-facilities', [ClientController::class, 'client_get_all_facilities']);
Route::middleware('auth:sanctum')->get('/client/all-products', [ClientController::class, 'client_get_all_products']);
// Facility
Route::middleware('auth:sanctum')->put('/client/{id}/facility', [FacilityController::class, 'add_facility']);
Route::middleware('auth:sanctum')->put('/client/facility/{id}', [FacilityController::class, 'update_facility']);
Route::middleware('auth:sanctum')->delete('/client/facility/{id}', [FacilityController::class, 'delete_facility']);
Route::middleware('auth:sanctum')->post('/client/facility/categories', [FacilityController::class, 'get_categories']);
Route::middleware('auth:sanctum')->post('/client/facility/documents', [FacilityController::class, 'get_all_documents']);
Route::middleware('auth:sanctum')->post('/client/facility/{id}/documents', [FacilityController::class, 'get_documents']);
Route::middleware('auth:sanctum')->post('/client/facility/{id}/document', [FacilityController::class, 'add_document']);
Route::middleware('auth:sanctum')->post('/client/facility/document/{id}', [FacilityController::class, 'update_document']);
Route::middleware('auth:sanctum')->post('/client/facility/document/{id}/status', [FacilityController::class, 'set_document_status']);
Route::middleware('auth:sanctum')->post('/client/facility/document/{id}/note', [FacilityController::class, 'set_document_note']);
Route::middleware('auth:sanctum')->delete('/client/facility/document/{id}', [FacilityController::class, 'delete_document']);
Route::middleware('auth:sanctum')->put('/client/facility/document/{id}/expires-at', [FacilityController::class, 'update_document_expiration']);
Route::middleware('auth:sanctum')->post('/client/facility/{id}/audit-printout', [FacilityController::class, 'generate_audit_printout']);
// @TODO why does it fail when prepended with '/client'
Route::middleware('auth:sanctum')->post('/review-requests', [ReviewRequestController::class, 'get_client_review_requests']);
Route::middleware('auth:sanctum')->post('/clients/review-requests', [ReviewRequestController::class, 'get_review_requests']);
Route::middleware('auth:sanctum')->post('/client/review-request/new', [ReviewRequestController::class, 'add_review_request']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}', [ReviewRequestController::class, 'get_review_request']);
Route::middleware('auth:sanctum')->put('/client/review-request/{id}', [ReviewRequestController::class, 'update_review_request']);
Route::middleware('auth:sanctum')->delete('/client/review-request/{id}', [ReviewRequestController::class, 'delete_review_request']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/assign-reviewer', [ReviewRequestController::class, 'assign_reviewer']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/send-report', [ReviewRequestController::class, 'generate_progress_report']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/products', [ReviewRequestController::class, 'get_review_request_products']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/products/docs', [ReviewRequestController::class, 'get_review_request_products_docs']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/ingredients', [ReviewRequestController::class, 'get_review_request_ingredients']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/manufacturers', [ReviewRequestController::class, 'get_review_request_manufacturers']);
Route::middleware('auth:sanctum')->put('/client/review-request/{id}/status', [ReviewRequestController::class, 'set_status']);
Route::middleware('auth:sanctum')->put('/client/review-request/{id}/corrections', [ReviewRequestController::class, 'submit_corrections']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/audit-reports', [ReviewRequestController::class, 'get_review_request_audit_reports']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/review-reports', [ReviewRequestController::class, 'get_review_request_review_reports']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/audit-report', [ReviewRequestController::class, 'add_review_request_audit_report']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/review-report', [ReviewRequestController::class, 'add_review_request_review_report']);
Route::middleware('auth:sanctum')->delete('/client/review-request/reports/{id}', [ReviewRequestController::class, 'delete_review_request_report']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/certificates', [ReviewRequestController::class, 'get_review_request_certificates']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/certificate', [ReviewRequestController::class, 'add_review_request_certificate']);
Route::middleware('auth:sanctum')->delete('/client/review-request/certificates/{id}', [ReviewRequestController::class, 'delete_review_request_certificate']);
Route::middleware('auth:sanctum')->post('/client/review-request/{id}/step-eight-check', [ReviewRequestController::class, 'step_eight_check']);
Route::middleware('auth:sanctum')->post('/client/reports/audit', [ReportsController::class, 'get_audit_reports']);
Route::middleware('auth:sanctum')->post('/client/reports/review', [ReportsController::class, 'get_review_reports']);
Route::middleware('auth:sanctum')->get('/client/certificates', [CertificatesController::class, 'get_certificates']);
Route::middleware('auth:sanctum')->put('/client/certificate/{id}/expires-at', [CertificatesController::class, 'update_certificate_expiration']);
Route::middleware('auth:sanctum')->put('/client/certificate/{id}/request-hard-copy', [CertificatesController::class, 'request_hard_copy']);
Route::middleware('auth:sanctum')->post('/client/certificate/{id}/tags', [CertificatesController::class, 'set_tags']);
// admin
Route::middleware('auth:sanctum')->post('/client/{id}/certificate', [CertificatesController::class, 'add_client_certificate']);
Route::middleware('auth:sanctum')->post('/client/{id}/certificate/auto-email', [CertificatesController::class, 'add_client_certificate_auto_email']);
Route::middleware('auth:sanctum')->post('/client/{id}/reports/audit', [ReportsController::class, 'get_client_audit_reports']);
Route::middleware('auth:sanctum')->post('/client/{id}/reports/review', [ReportsController::class, 'get_client_review_reports']);
Route::middleware('auth:sanctum')->post('/client/{id}/reports/audit/add', [ReportsController::class, 'add_audit_report']);
Route::middleware('auth:sanctum')->post('/client/{id}/reports/review/add', [ReportsController::class, 'add_review_report']);
Route::middleware('auth:sanctum')->get('/client/{id}/certificates', [CertificatesController::class, 'get_client_certificates']);
// Products
Route::middleware('auth:sanctum')->post('/client/facility/{id}/products', [ProductController::class, 'get_products']);
Route::middleware('auth:sanctum')->put('/client/product', [ProductController::class, 'add_product']);
Route::middleware('auth:sanctum')->put('/client/product/{id}', [ProductController::class, 'update_product']);
Route::middleware('auth:sanctum')->post('/client/product/{id}/duplicate', [ProductController::class, 'duplicate_product']);
Route::middleware('auth:sanctum')->delete('/client/product/{id}', [ProductController::class, 'delete_product']);
Route::middleware('auth:sanctum')->post('/client/product/categories', [ProductController::class, 'get_categories']);
Route::middleware('auth:sanctum')->post('/client/product/documents', [ProductController::class, 'get_all_documents']);
Route::middleware('auth:sanctum')->post('/client/product/{id}/documents', [ProductController::class, 'get_documents']);
Route::middleware('auth:sanctum')->post('/client/product/{id}/document', [ProductController::class, 'add_document']);
Route::middleware('auth:sanctum')->post('/client/product/document/{id}', [ProductController::class, 'update_document']);
Route::middleware('auth:sanctum')->post('/client/product/document/{id}/status', [ProductController::class, 'set_document_status']);
Route::middleware('auth:sanctum')->post('/client/product/document/{id}/note', [ProductController::class, 'set_document_note']);
Route::middleware('auth:sanctum')->delete('/client/product/document/{id}', [ProductController::class, 'delete_document']);
Route::middleware('auth:sanctum')->put('/client/product/document/{id}/expires-at', [ProductController::class, 'update_document_expiration']);
Route::middleware('auth:sanctum')->post('/client/product/{id}/preview', [ProductController::class, 'update_preview_image']);
// Ingredients
Route::middleware('auth:sanctum')->post('/client/product/{id}/ingredients', [IngredientController::class, 'get_ingredients']);
Route::middleware('auth:sanctum')->put('/client/ingredient', [IngredientController::class, 'add_ingredient']);
Route::middleware('auth:sanctum')->put('/client/ingredient/{id}', [IngredientController::class, 'update_ingredient']);
Route::middleware('auth:sanctum')->post('/client/ingredient/{id}/recommendation', [IngredientController::class, 'set_ingredient_recommendation']);
Route::middleware('auth:sanctum')->post('/client/ingredient/{id}/source', [IngredientController::class, 'set_ingredient_source']);
Route::middleware('auth:sanctum')->post('/client/ingredient/{id}/description', [IngredientController::class, 'set_ingredient_description']);
Route::middleware('auth:sanctum')->delete('/client/ingredient/{id}', [IngredientController::class, 'delete_ingredient']);
Route::middleware('auth:sanctum')->delete('/client/ingredient/{id}', [IngredientController::class, 'delete_ingredient']);
// Manufacturer
Route::middleware('auth:sanctum')->post('/manufacturers', [ManufacturerController::class, 'auto_suggest_search_list']);
Route::middleware('auth:sanctum')->post('/client/manufacturer/documents', [ManufacturerController::class, 'get_all_documents']);
Route::middleware('auth:sanctum')->post('/manufacturer/{id}/documents', [ManufacturerController::class, 'get_documents']);
Route::middleware('auth:sanctum')->post('/manufacturer/{id}/document', [ManufacturerController::class, 'add_document']);
Route::middleware('auth:sanctum')->post('/client/manufacturer/document/{id}/status', [ManufacturerController::class, 'set_document_status']);
Route::middleware('auth:sanctum')->post('/client/manufacturer/document/{id}/note', [ManufacturerController::class, 'set_document_note']);
Route::middleware('auth:sanctum')->delete('/client/manufacturer/document/{id}', [ManufacturerController::class, 'delete_document']);
Route::middleware('auth:sanctum')->put('/client/manufacturer/document/{id}/expires-at', [ManufacturerController::class, 'update_document_expiration']);
Route::middleware('auth:sanctum')->post('/manufacturer/document/{id}', [ManufacturerController::class, 'update_document']);
Route::middleware('auth:sanctum')->delete('/manufacturer/document/{id}', [ManufacturerController::class, 'delete_document']);
Route::middleware('auth:sanctum')->put('/manufacturer/document/{id}/expires-at', [ManufacturerController::class, 'update_document_expiration']);
