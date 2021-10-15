<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManufacturerDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manufacturer_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('manufacturer_id');
            $table->enum('type', [
                'CERTIFICATE_OR_DISCLOSURE',
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
        Schema::dropIfExists('manufacturer_documents');
    }
}
