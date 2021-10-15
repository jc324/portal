<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReviewRequestIdToModels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('facilities', function (Blueprint $table) {
            $table->unsignedInteger('review_request_id')->nullable()->after('id');
        });
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedInteger('review_request_id')->nullable()->after('id');
        });
        Schema::table('ingredients', function (Blueprint $table) {
            $table->unsignedInteger('review_request_id')->nullable()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('models', function (Blueprint $table) {
            //
        });
    }
}
