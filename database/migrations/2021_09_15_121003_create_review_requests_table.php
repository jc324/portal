<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('reviewer_id');
            $table->unsignedInteger('facility_id')->nullable();
            $table->enum('type', [
                'NEW_FACILITY',
                'NEW_PRODUCTS',
                'NEW_FACILITY_AND_PRODUCTS',
                'NEW_INGREDIENTS',
                'FACILITY_UPDATE',
                'PRODUCT_UPDATE',
                'INGREDIENT_UPDATE',
                'MANUFACTURER_UPDATE',
            ]);
            $table->enum('status', [
                'APPROVED',
                'REJECTED',
                'DRAFT',
                'CERTIFIED',
                'REVOKED',
                'IN_REVIEW',
                'SUSPENDED',
            ]);
            $table->unsignedInteger('current_step_index');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_requests');
    }
}
