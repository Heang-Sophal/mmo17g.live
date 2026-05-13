<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddMobileAlertsPermissions extends Migration
{
    public function up()
    {
        $permissions = [
            ['name' => 'mobile_seller_alerts'],
            ['name' => 'mobile_delivery_alerts'],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                $permission
            );
        }

        $ownerRoleId = DB::table('roles')
            ->whereRaw('LOWER(name) = ?', ['owner'])
            ->value('id');

        if (! $ownerRoleId) {
            return;
        }

        $permissionIds = DB::table('permissions')
            ->whereIn('name', ['mobile_seller_alerts', 'mobile_delivery_alerts'])
            ->pluck('id');

        foreach ($permissionIds as $permissionId) {
            DB::table('permission_role')->updateOrInsert(
                ['permission_id' => $permissionId, 'role_id' => $ownerRoleId],
                ['permission_id' => $permissionId, 'role_id' => $ownerRoleId]
            );
        }
    }

    public function down()
    {
        DB::table('permissions')
            ->whereIn('name', ['mobile_seller_alerts', 'mobile_delivery_alerts'])
            ->delete();
    }
}
