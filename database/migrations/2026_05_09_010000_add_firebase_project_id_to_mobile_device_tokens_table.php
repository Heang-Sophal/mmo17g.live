<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddFirebaseProjectIdToMobileDeviceTokensTable extends Migration
{
    public function up()
    {
        if (! Schema::hasTable('mobile_device_tokens')) {
            return;
        }

        Schema::table('mobile_device_tokens', function (Blueprint $table) {
            if (! Schema::hasColumn('mobile_device_tokens', 'firebase_project_id')) {
                $table->string('firebase_project_id', 191)
                    ->nullable()
                    ->after('app_type')
                    ->index('mobile_device_tokens_firebase_project_id_index');
            }
        });

        DB::table('mobile_device_tokens')
            ->whereNull('firebase_project_id')
            ->where('app_type', 'seller')
            ->update(['firebase_project_id' => 'g-mobile-app-92644']);

        DB::table('mobile_device_tokens')
            ->whereNull('firebase_project_id')
            ->where('app_type', 'delivery')
            ->where('platform', 'android')
            ->update(['firebase_project_id' => 'g-mobile-app-92644']);

        DB::table('mobile_device_tokens')
            ->whereNull('firebase_project_id')
            ->where('app_type', 'delivery')
            ->update(['firebase_project_id' => 'g-delivery-app']);
    }

    public function down()
    {
        if (! Schema::hasTable('mobile_device_tokens')) {
            return;
        }

        Schema::table('mobile_device_tokens', function (Blueprint $table) {
            if (Schema::hasColumn('mobile_device_tokens', 'firebase_project_id')) {
                $table->dropIndex('mobile_device_tokens_firebase_project_id_index');
                $table->dropColumn('firebase_project_id');
            }
        });
    }
}
