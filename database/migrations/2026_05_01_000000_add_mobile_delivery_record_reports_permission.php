<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddMobileDeliveryRecordReportsPermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('permissions')->updateOrInsert(
            ['name' => 'mobile_delivery_record_reports'],
            ['name' => 'mobile_delivery_record_reports']
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('permissions')
            ->where('name', 'mobile_delivery_record_reports')
            ->delete();
    }
}
