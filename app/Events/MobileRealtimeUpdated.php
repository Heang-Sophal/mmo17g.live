<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MobileRealtimeUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public string $scope,
        public string $type,
        public ?int $saleId = null,
        public ?string $saleRef = null,
        public ?int $warehouseId = null,
        public ?int $sellerId = null,
        public array $extra = []
    ) {}

    public function broadcastOn(): array
    {
        $channels = [new Channel('mobile.all')];

        if (in_array($this->scope, ['all', 'seller'], true)) {
            $channels[] = new Channel('mobile.seller');
        }

        if (in_array($this->scope, ['all', 'delivery'], true)) {
            $channels[] = new Channel('mobile.delivery');
        }

        if ($this->warehouseId !== null) {
            $channels[] = new Channel('mobile.warehouse.'.$this->warehouseId);
        }

        return $channels;
    }

    public function broadcastAs(): string
    {
        return 'mobile.refresh';
    }

    public function broadcastWith(): array
    {
        return array_filter([
            'scope' => $this->scope,
            'type' => $this->type,
            'sale_id' => $this->saleId,
            'sale_ref' => $this->saleRef,
            'warehouse_id' => $this->warehouseId,
            'seller_id' => $this->sellerId,
            'sent_at' => now()->toIso8601String(),
            'extra' => $this->extra,
        ], fn ($value) => $value !== null);
    }
}
