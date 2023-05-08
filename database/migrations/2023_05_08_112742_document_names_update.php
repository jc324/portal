<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DocumentNamesUpdate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('facility_documents', function (Blueprint $table) {
            $table->string('name')->after('status');
        });
        Schema::table('product_documents', function (Blueprint $table) {
            $table->string('name')->after('status');
        });
        Schema::table('manufacturer_documents', function (Blueprint $table) {
            $table->string('name')->after('status');
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
