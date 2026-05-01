<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddMobilePermissionsToPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $permissions = [
            ['name' => 'mobile_seller_pos'],
            ['name' => 'mobile_seller_orders'],
            ['name' => 'mobile_seller_products'],
            ['name' => 'mobile_seller_sale_returns'],
            ['name' => 'mobile_seller_profile'],
            ['name' => 'mobile_seller_reports'],

            ['name' => 'mobile_delivery_record_items'],
            ['name' => 'mobile_delivery_deliveries'],
            ['name' => 'mobile_delivery_reports'],
            ['name' => 'mobile_delivery_profile'],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                $permission
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $permissions = [
            'mobile_seller_pos',
            'mobile_seller_orders',
            'mobile_seller_products',
            'mobile_seller_sale_returns',
            'mobile_seller_profile',
            'mobile_seller_reports',

            'mobile_delivery_record_items',
            'mobile_delivery_deliveries',
            'mobile_delivery_reports',
            'mobile_delivery_profile',
        ];

        DB::table('permissions')->whereIn('name', $permissions)->delete();
    }
}
