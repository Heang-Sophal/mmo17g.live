<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class UpdateDeliveryDeviceTokensFirebaseProjectId extends Migration
{
    public function up()
    {
        if (! Schema::hasTable('mobile_device_tokens') ||
            ! Schema::hasColumn('mobile_device_tokens', 'firebase_project_id')) {
            return;
        }

        DB::table('mobile_device_tokens')
            ->where('app_type', 'delivery')
            ->update(['firebase_project_id' => 'g-delivery-app']);
    }

    public function down()
    {
        if (! Schema::hasTable('mobile_device_tokens') ||
            ! Schema::hasColumn('mobile_device_tokens', 'firebase_project_id')) {
            return;
        }

        DB::table('mobile_device_tokens')
            ->where('app_type', 'delivery')
            ->where('platform', 'android')
            ->update(['firebase_project_id' => 'g-mobile-app-92644']);
    }
}
