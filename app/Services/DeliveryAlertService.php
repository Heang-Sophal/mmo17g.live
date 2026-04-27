<?php

namespace App\Services;

use App\Models\DeliveryAlert;
use App\Models\Role;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Schema;

class DeliveryAlertService
{
    public function createAlertsForSale(Sale $sale): void
    {
        if (! $this->canCreateAlertsForSale($sale)) {
            return;
        }

        $deliveryUsers = $this->queryDeliveryUsersForWarehouse((int) $sale->warehouse_id)->get();
        if ($deliveryUsers->isEmpty()) {
            return;
        }

        $sale->loadMissing('warehouse', 'client', 'user');

        $warehouseName = $sale->warehouse?->name ?: ('Warehouse #'.$sale->warehouse_id);
        $customerName = $sale->client?->name ?: 'អតិថិជនដើរចូល';
        $createdBy = $sale->user?->name ?: ($sale->user?->username ?: 'ប្រព័ន្ធ');
        $formattedTotal = number_format((float) $sale->GrandTotal, 2, '.', ',');
        $saleRef = $sale->Ref ?: ('SALE-'.$sale->id);

        $payload = [
            'sale_id' => (int) $sale->id,
            'sale_ref' => $saleRef,
            'warehouse_id' => (int) $sale->warehouse_id,
            'warehouse_name' => $warehouseName,
            'customer_name' => $customerName,
            'grand_total' => (float) $sale->GrandTotal,
            'shipping_status' => $sale->shipping_status ?: 'pending',
            'created_at' => optional($sale->created_at)->toIso8601String(),
        ];

        foreach ($deliveryUsers as $user) {
            $this->createAlertForUser(
                $user,
                $sale,
                'sale_created',
                'ការបញ្ជាទិញថ្មីពីឃ្លាំង',
                "ការបញ្ជាទិញ {$saleRef} របស់ {$customerName} ({$formattedTotal}) ត្រូវបានបង្កើតពី {$warehouseName} ដោយ {$createdBy}។",
                $payload
            );
        }
    }

    public function createSellerAcceptedAlert(Sale $sale, User $deliveryUser): void
    {
        $this->createSellerStatusAlert(
            $sale,
            $deliveryUser,
            'delivery_accepted',
            'អ្នកដឹកបានទទួលការបញ្ជាទិញ',
            'បានទទួល '
        );
    }

    public function createSellerCompletedAlert(Sale $sale, User $deliveryUser): void
    {
        $this->createSellerStatusAlert(
            $sale,
            $deliveryUser,
            'delivery_completed',
            'ការដឹកជញ្ជូនបានបញ្ចប់',
            'បានបញ្ចប់ '
        );
    }

    protected function canCreateAlertsForSale(Sale $sale): bool
    {
        if (! $sale->warehouse_id) {
            return false;
        }

        if (! Schema::hasTable('delivery_alerts') || ! Schema::hasTable('roles') || ! Schema::hasTable('user_warehouse')) {
            return false;
        }

        $status = strtolower((string) $sale->statut);

        return in_array($status, ['completed', 'delivered', 'shipped'], true);
    }

    protected function queryDeliveryUsersForWarehouse(int $warehouseId): Builder
    {
        $deliveryRoleIds = Role::query()
            ->whereIn('name', ['Delivery', 'Laivrison'])
            ->pluck('id');

        return User::query()
            ->whereNull('users.deleted_at')
            ->where('users.statut', 1)
            ->where(function (Builder $query) use ($deliveryRoleIds) {
                if ($deliveryRoleIds->isNotEmpty()) {
                    $query->whereIn('users.role_id', $deliveryRoleIds)
                        ->orWhereHas('roles', function (Builder $roleQuery) use ($deliveryRoleIds) {
                            $roleQuery->whereIn('roles.id', $deliveryRoleIds);
                        });

                    return;
                }

                $query->whereHas('roles', function (Builder $roleQuery) {
                    $roleQuery->whereIn('roles.name', ['Delivery', 'Laivrison']);
                });
            })
            ->whereHas('assignedWarehouses', function (Builder $warehouseQuery) use ($warehouseId) {
                $warehouseQuery->where('warehouses.id', $warehouseId);
            });
    }

    protected function createSellerStatusAlert(
        Sale $sale,
        User $deliveryUser,
        string $type,
        string $title,
        string $statusLabel
    ): void {
        if (! Schema::hasTable('delivery_alerts') || ! $sale->user_id) {
            return;
        }

        $sale->loadMissing('warehouse', 'client', 'user');

        $seller = $sale->user;
        if (! $seller) {
            return;
        }

        $warehouseName = $sale->warehouse?->name ?: ('Warehouse #'.$sale->warehouse_id);
        $customerName = $sale->client?->name ?: 'អតិថិជនដើរចូល';
        $saleRef = $sale->Ref ?: ('SALE-'.$sale->id);
        $deliveryName = $deliveryUser->name ?: ($deliveryUser->username ?: 'អ្នកដឹក');
        $formattedTotal = number_format((float) $sale->GrandTotal, 2, '.', ',');

        $payload = [
            'sale_id' => (int) $sale->id,
            'sale_ref' => $saleRef,
            'warehouse_id' => (int) $sale->warehouse_id,
            'warehouse_name' => $warehouseName,
            'customer_name' => $customerName,
            'grand_total' => (float) $sale->GrandTotal,
            'shipping_status' => $sale->shipping_status ?: 'pending',
            'payment_status' => $sale->payment_statut ?: 'unpaid',
            'delivery_name' => $deliveryName,
            'delivery_phone' => $deliveryUser->phone ?? '',
            'event' => $type,
            'updated_at' => now()->toIso8601String(),
        ];

        $message = "{$deliveryName} {$statusLabel}ការបញ្ជាទិញ {$saleRef} របស់ {$customerName} ({$formattedTotal}) ពី {$warehouseName}។";

        $this->createAlertForUser($seller, $sale, $type, $title, $message, $payload);
    }

    protected function createAlertForUser(
        User $user,
        Sale $sale,
        string $type,
        string $title,
        string $message,
        array $payload = []
    ): void {
        DeliveryAlert::create([
            'user_id' => $user->id,
            'sale_id' => $sale->id,
            'warehouse_id' => $sale->warehouse_id,
            'type' => $type,
            'title' => $title,
            'message' => $message,
            'payload' => $payload,
        ]);
    }
}
