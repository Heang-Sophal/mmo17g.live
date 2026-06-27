<?php

namespace App\Services;

use App\Events\MobileRealtimeUpdated;
use App\Models\Sale;
use App\Models\SaleReturn;
use Illuminate\Support\Facades\Log;

class MobileRealtimeService
{
    public function saleCreated(Sale $sale): void
    {
        $this->saleUpdated($sale, 'sale.created', 'all');
    }

    public function saleUpdated(Sale $sale, string $type = 'sale.updated', string $scope = 'all', array $extra = []): void
    {
        $this->broadcast($scope, $type, $sale, $extra);
    }

    public function saleReturned(SaleReturn $saleReturn): void
    {
        $saleReturn->loadMissing('sale');
        $this->broadcast('all', 'sale.returned', $saleReturn->sale, [
            'sale_return_id' => $saleReturn->id,
            'sale_return_ref' => $saleReturn->Ref,
        ]);
    }

    public function broadcast(string $scope, string $type, ?Sale $sale = null, array $extra = []): void
    {
        try {
            broadcast(new MobileRealtimeUpdated(
                scope: $scope,
                type: $type,
                saleId: $sale?->id,
                saleRef: $sale?->Ref,
                warehouseId: $sale?->warehouse_id,
                sellerId: $sale?->user_id,
                extra: $extra
            ));
        } catch (\Throwable $exception) {
            Log::warning('Mobile realtime broadcast failed', [
                'type' => $type,
                'scope' => $scope,
                'sale_id' => $sale?->id,
                'error' => $exception->getMessage(),
            ]);
        }
    }
}
