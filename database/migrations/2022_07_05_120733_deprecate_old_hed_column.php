<?php

use App\Models\Client;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeprecateOldHedColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Migrate data
        $clients = Client::all();

        foreach ($clients as $client) {
            $heds = [];

            if (
                !empty($client->hed_name)
                && !empty($client->hed_email)
            ) {
                $phone_number = !empty($client->hed_phone_number) ? $client->hed_phone_number : "";
                array_push($heds, array(
                    "name" => $client->hed_name,
                    "phone_number" => $phone_number,
                    "email" => $client->hed_email
                ));
            }

            $client->heds = json_encode($heds);
            $client->save();
        }

        // @TODO Drop columns
        // Schema::table('clients', function ($table) {
        //     $table->dropColumn([
        //         'hed_type',
        //         'hed_name',
        //         'hed_phone_number',
        //         'hed_email',
        //     ]);
        // });
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
