<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EnsureAppReviewSeller extends Command
{
    protected $signature = 'app-review:ensure-seller
                            {email=appreview@mmo17g.store : Email for the App Review seller account}
                            {--password= : Password to set. If omitted, a secure temporary password is generated}';

    protected $description = 'Create or refresh a role-based 17G Seller account for App Store Review.';

    private const SELLER_MOBILE_PERMISSIONS = [
        'mobile_seller_pos',
        'mobile_seller_orders',
        'mobile_seller_products',
        'mobile_seller_sale_returns',
        'mobile_seller_profile',
        'mobile_seller_reports',
        'mobile_seller_alerts',
    ];

    public function handle(): int
    {
        $email = strtolower(trim((string) $this->argument('email')));
        $password = trim((string) ($this->option('password') ?: ''));

        if ($email === '' || ! filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->error('Please provide a valid email address.');

            return self::FAILURE;
        }

        if ($password === '') {
            $password = 'Review@'.Str::random(12);
        }

        DB::transaction(function () use ($email, $password) {
            $roleId = $this->ensureSaleRole();
            $this->ensureSellerPermissions($roleId);

            $user = User::query()->firstOrNew(['email' => $email]);
            $user->firstname = 'App';
            $user->lastname = 'Review';
            $user->username = 'App Review Seller';
            $user->phone = '0000000000';
            $user->password = Hash::make($password);
            $user->avatar = $user->avatar ?: 'no_avatar.png';
            $user->role_id = $roleId;
            $user->statut = 1;
            $user->is_all_warehouses = 1;
            $user->record_view = 1;
            $user->save();

            DB::table('role_user')->updateOrInsert(
                ['user_id' => $user->id, 'role_id' => $roleId],
                ['user_id' => $user->id, 'role_id' => $roleId]
            );

            $firstWarehouseId = DB::table('warehouses')
                ->whereNull('deleted_at')
                ->orderBy('id')
                ->value('id');

            if ($firstWarehouseId) {
                DB::table('user_warehouse')->updateOrInsert(
                    ['user_id' => $user->id, 'warehouse_id' => $firstWarehouseId],
                    ['user_id' => $user->id, 'warehouse_id' => $firstWarehouseId]
                );
            }
        });

        $this->info('App Review seller account is ready.');
        $this->line('Email: '.$email);
        $this->line('Password: '.$password);
        $this->comment('Paste these credentials into App Store Connect review notes, then rotate the password after review.');

        return self::SUCCESS;
    }

    private function ensureSaleRole(): int
    {
        $roleId = (int) DB::table('roles')
            ->whereRaw('LOWER(name) = ?', ['sale'])
            ->value('id');

        if ($roleId > 0) {
            return $roleId;
        }

        return (int) DB::table('roles')->insertGetId([
            'name' => 'Sale',
            'label' => 'Sale',
            'status' => 1,
            'description' => 'Seller mobile app access',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    private function ensureSellerPermissions(int $roleId): void
    {
        foreach (self::SELLER_MOBILE_PERMISSIONS as $permissionName) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permissionName],
                ['name' => $permissionName]
            );

            $permissionId = DB::table('permissions')
                ->where('name', $permissionName)
                ->value('id');

            if (! $permissionId) {
                continue;
            }

            DB::table('permission_role')->updateOrInsert(
                ['permission_id' => $permissionId, 'role_id' => $roleId],
                ['permission_id' => $permissionId, 'role_id' => $roleId]
            );
        }
    }
}
