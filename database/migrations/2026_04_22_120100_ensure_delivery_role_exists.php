<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class EnsureDeliveryRoleExists extends Migration
{
    public function up()
    {
        if (! Schema::hasTable('roles')) {
            return;
        }

        $deliveryRoleExists = DB::table('roles')
            ->whereIn('name', ['Delivery', 'Laivrison'])
            ->exists();

        if ($deliveryRoleExists) {
            return;
        }

        DB::table('roles')->insert([
            'name' => 'Delivery',
            'label' => 'Delivery',
            'description' => 'Delivery mobile user',
            'status' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function down()
    {
        if (! Schema::hasTable('roles')) {
            return;
        }

        DB::table('roles')
            ->where('name', 'Delivery')
            ->where('label', 'Delivery')
            ->delete();
    }
}
