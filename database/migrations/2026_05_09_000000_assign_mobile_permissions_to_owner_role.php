<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AssignMobilePermissionsToOwnerRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $ownerRoleId = DB::table('roles')
            ->whereRaw('LOWER(name) = ?', ['owner'])
            ->value('id');

        if (! $ownerRoleId) {
            return;
        }

        $permissionIds = DB::table('permissions')
            ->whereIn('name', $this->mobilePermissions())
            ->pluck('id');

        foreach ($permissionIds as $permissionId) {
            DB::table('permission_role')->updateOrInsert(
                [
                    'permission_id' => $permissionId,
                    'role_id' => $ownerRoleId,
                ],
                [
                    'permission_id' => $permissionId,
                    'role_id' => $ownerRoleId,
                ]
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
        $ownerRoleId = DB::table('roles')
            ->whereRaw('LOWER(name) = ?', ['owner'])
            ->value('id');

        if (! $ownerRoleId) {
            return;
        }

        $permissionIds = DB::table('permissions')
            ->whereIn('name', $this->mobilePermissions())
            ->pluck('id');

        DB::table('permission_role')
            ->where('role_id', $ownerRoleId)
            ->whereIn('permission_id', $permissionIds)
            ->delete();
    }

    private function mobilePermissions()
    {
        return [
            'mobile_seller_pos',
            'mobile_seller_orders',
            'mobile_seller_products',
            'mobile_seller_sale_returns',
            'mobile_seller_profile',
            'mobile_seller_reports',
            'mobile_delivery_record_items',
            'mobile_delivery_record_reports',
            'mobile_delivery_deliveries',
            'mobile_delivery_reports',
            'mobile_delivery_profile',
        ];
    }
}
