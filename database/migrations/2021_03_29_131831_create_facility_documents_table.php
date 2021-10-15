<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilityDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('facility_id');
            $table->enum('type', [
                'HIP',
                'SSOP',
                'RECALL_PLAN',
                'WATER_REPORT',
                'PEST_CONTROL',
                'INSPECTION_SHEET',
            ]);
            $table->string('path');
            $table->dateTime('expires_at')->nullable();
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
        Schema::dropIfExists('facility_documents');
    }
}
