<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('manufacturer_id');
            $table->string('name')->nullable();
            $table->enum('recommendation', [
                'HALAL_ASLAN',
                'MASHBUH',
                'HARAM'
            ]);
            $table->enum('source', [
                'ANIMAL',
                'PLANT',
                'SYNTHETIC',
                'MINERAL',
                'GAS'
            ]);
            $table->text('description')->nullable();
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
        Schema::dropIfExists('ingredients');
    }
}
