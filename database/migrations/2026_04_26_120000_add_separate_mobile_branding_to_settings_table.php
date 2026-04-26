<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->string('seller_mobile_app_name')->nullable()->after('mobile_app_logo');
            $table->string('seller_mobile_app_logo')->nullable()->after('seller_mobile_app_name');
            $table->string('delivery_mobile_app_name')->nullable()->after('seller_mobile_app_logo');
            $table->string('delivery_mobile_app_logo')->nullable()->after('delivery_mobile_app_name');
        });

        DB::table('settings')->get()->each(function ($setting) {
            DB::table('settings')
                ->where('id', $setting->id)
                ->update([
                    'seller_mobile_app_name' => $setting->mobile_app_name ?: $setting->app_name,
                    'seller_mobile_app_logo' => $setting->mobile_app_logo,
                ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->dropColumn([
                'seller_mobile_app_name',
                'seller_mobile_app_logo',
                'delivery_mobile_app_name',
                'delivery_mobile_app_logo',
            ]);
        });
    }
};
