<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FacilityDocumentTypeUpdate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('facility_documents', function (Blueprint $table) {
            $table->dropColumn('type');
        });
        Schema::table('facility_documents', function (Blueprint $table) {
            $table->enum('type', [
                'HIP',
                'SSOP',
                'RECALL_PLAN',
                'WATER_REPORT',
                'PEST_CONTROL',
                'INSPECTION_SHEET',
                'LEGAL_BUSINESS_DOCUMENTS',
                'TRACEABILITY_PLAN',
                'FLOWCHART_OF_PROCESSING'
            ])->after('facility_id');
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
