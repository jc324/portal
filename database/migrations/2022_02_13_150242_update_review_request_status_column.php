<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateReviewRequestStatusColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('review_requests', function (Blueprint $table) {
            $table->dropColumn('status');
        });
        Schema::table('review_requests', function (Blueprint $table) {
            $table->enum('status', [
                'DRAFT',
                'SUBMITTED',
                'IN_REVIEW',
                'APPROVED',
                'REJECTED'
            ])->after('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
