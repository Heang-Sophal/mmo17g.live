<?php

namespace App\Services;

use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramService
{
    /**
     * Send message to Telegram chat
     *
     * @param  string  $chatId  Telegram Chat ID
     * @param  string  $message  Message to send
     * @param  string|null  $botToken  Optional bot token (if null, uses global config)
     * @return bool Success status
     */
    public function sendMessage(string $chatId, string $message, ?string $botToken = null, ?int $replyToMessageId = null): bool
    {
        return ! is_null($this->sendMessageResult($chatId, $message, $botToken, $replyToMessageId));
    }

    public function sendMessageResult(
        string $chatId,
        string $message,
        ?string $botToken = null,
        ?int $replyToMessageId = null
    ): ?array {
        // Use provided bot token or fallback to global config
        $token = $botToken ?: config('services.telegram.bot_token');

        \Log::info('TelegramService: Sending message with token: '.(substr($token, 0, 20).'...').' to chat: '.$chatId);

        if (empty($token)) {
            \Log::error('TelegramService: Bot token is empty');

            return null;
        }

        if (empty($chatId)) {
            \Log::error('TelegramService: Chat ID is empty');

            return null;
        }

        try {
            $payload = [
                'chat_id' => $chatId,
                'text' => $message,
                'parse_mode' => 'HTML',
            ];

            if ($replyToMessageId) {
                $payload['reply_to_message_id'] = $replyToMessageId;
                $payload['allow_sending_without_reply'] = true;
            }

            // Disable SSL verification for local development (WAMP)
            // In production, you should install proper CA certificates
            $response = Http::withOptions([
                'verify' => false,  // Disable SSL verification for self-signed certs
            ])->timeout(30)->post("https://api.telegram.org/bot{$token}/sendMessage", $payload);

            \Log::info('TelegramService: API Response Status: '.$response->status());

            if ($response->successful()) {
                $data = $response->json();
                \Log::info('TelegramService: Message sent successfully, ok='.($data['ok'] ?? 'false'));
                if ($data['ok'] ?? false) {
                    return $data['result'] ?? [];
                }

                return null;
            }

            \Log::error('Telegram API error', [
                'chat_id' => $chatId,
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return null;
        } catch (\Exception $e) {
            \Log::error('Failed to send Telegram message', [
                'chat_id' => $chatId,
                'error' => $e->getMessage(),
            ]);

            return null;
        }
    }

    /**
     * Send sale notification to warehouse Telegram group
     *
     * @param  array  $saleData  Sale data
     * @param  string  $warehouseName  Warehouse name
     * @param  string  $chatId  Telegram Chat ID
     * @param  string|null  $botToken  Optional bot token for this warehouse
     * @return bool Success status
     */
    public function sendSaleNotification(array $saleData, string $warehouseName, string $chatId, ?string $botToken = null): bool
    {
        return ! is_null($this->sendSaleNotificationResult($saleData, $warehouseName, $chatId, $botToken));
    }

    public function sendSaleNotificationResult(
        array $saleData,
        string $warehouseName,
        string $chatId,
        ?string $botToken = null
    ): ?array {
        $message = $this->formatSaleMessage($saleData, $warehouseName);
        $messageResult = $this->sendMessageResult($chatId, $message, $botToken);

        if (is_null($messageResult)) {
            return null;
        }

        $this->sendSaleProductImages($saleData, $chatId, $botToken);

        return $messageResult;
    }

    public function sendDeliveryCompletedNotification(array $deliveryData, string $warehouseName, string $chatId, ?string $botToken = null): bool
    {
        return ! is_null($this->sendDeliveryCompletedNotificationResult($deliveryData, $warehouseName, $chatId, $botToken));
    }

    public function sendDeliveryCompletedNotificationResult(
        array $deliveryData,
        string $warehouseName,
        string $chatId,
        ?string $botToken = null,
        ?int $replyToMessageId = null
    ): ?array {
        $message = $this->formatDeliveryCompletedMessage($deliveryData, $warehouseName);

        $messageResult = $this->sendMessageResult($chatId, $message, $botToken, $replyToMessageId);
        if (! is_null($messageResult) || is_null($replyToMessageId)) {
            return $messageResult;
        }

        return $this->sendMessageResult($chatId, $message, $botToken);
    }

    public function setMessageReaction(
        string $chatId,
        int $messageId,
        array $reaction,
        ?string $botToken = null,
        bool $isBig = false
    ): bool {
        $token = $botToken ?: config('services.telegram.bot_token');

        if (empty($token)) {
            Log::error('TelegramService: Bot token is empty for setMessageReaction');

            return false;
        }

        if (empty($chatId) || $messageId <= 0) {
            Log::error('TelegramService: Invalid chat ID or message ID for setMessageReaction', [
                'chat_id' => $chatId,
                'message_id' => $messageId,
            ]);

            return false;
        }

        try {
            $response = Http::withOptions([
                'verify' => false,
            ])->timeout(30)->post("https://api.telegram.org/bot{$token}/setMessageReaction", [
                'chat_id' => $chatId,
                'message_id' => $messageId,
                'reaction' => json_encode($reaction, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
                'is_big' => $isBig,
            ]);

            if ($response->successful()) {
                $data = $response->json();

                return $data['ok'] ?? false;
            }

            Log::error('Telegram message reaction API error', [
                'chat_id' => $chatId,
                'message_id' => $messageId,
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return false;
        } catch (\Throwable $e) {
            Log::error('Failed to set Telegram message reaction', [
                'chat_id' => $chatId,
                'message_id' => $messageId,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    /**
     * Format sale message for Telegram
     *
     * @param  array  $saleData  Sale data
     * @param  string  $warehouseName  Warehouse name
     * @return string Formatted message
     */
    private function formatSaleMessage(array $saleData, string $warehouseName): string
    {
        $helpers = new helpers;
        $currency = strtoupper($helpers->Get_Currency_Code() ?? 'USD');

        $warehouse = $this->escape((string) $warehouseName);
        $saleRef = $this->escape((string) ($saleData['ref'] ?? 'N/A'));
        $customerAddress = $this->escape((string) ($saleData['customer_address'] ?? 'N/A'));
        $customerPhone = $this->escape((string) ($saleData['customer_phone'] ?? 'N/A'));
        $paymentMethod = $this->paymentDisplayForSaleMessage($saleData['payment_method'] ?? null);
        $sellerName = $this->escape((string) ($saleData['seller_name'] ?? ($saleData['created_by'] ?? 'Unknown')));
        $sellerPhone = $this->escape((string) ($saleData['seller_phone'] ?? 'N/A'));
        $dateTime = $this->escape($this->formatDisplayDateTime($saleData['datetime'] ?? ($saleData['date'] ?? null)));
        $paidAmount = $this->formatAmount($saleData['paid_amount'] ?? 0);

        $message = "🛒 <b>ការលក់ថ្មី / New Sale</b>\n\n";
        $message .= "🏭 <b>ឃ្លាំង:</b> {$warehouse}\n";
        $message .= "🧾 <b>លេខយោង:</b> {$saleRef}\n";
        $message .= "📍 <b>ទីតាំងអតិថិជន:</b> {$customerAddress}\n";
        $message .= "📱 <b>លេខអតិថិជន:</b> {$customerPhone}\n";
        $message .= "💳 <b>វិធីបង់ប្រាក់:</b> {$paymentMethod}\n";
        $message .= "📋 <b>ផលិតផល៖</b>\n";
        $message .= "━━━━━━━━━━━━━━━━━\n";

        foreach ($saleData['products'] as $product) {
            $productName = $this->escape((string) ($product['product_name'] ?? 'N/A'));
            $quantity = $this->formatAmount($product['quantity'] ?? 0);
            $message .= "▫️ {$productName}   ចំនួន: {$quantity}\n";
        }

        $message .= "━━━━━━━━━━━━━━━━━\n";
        $message .= "💵 <b>ចំនួនបង់:</b> {$paidAmount} {$currency}\n\n";
        $message .= "👨‍💼 <b>អ្នកលក់:</b> {$sellerName}\n";
        $message .= "📞 <b>លេខអ្នកលក់:</b> {$sellerPhone}\n";
        $message .= "📅 <b>កាលបរិច្ឆេទ/ម៉ោង:</b> {$dateTime}\n\n";
        $message .= '<i>ប្រព័ន្ធ MMO 17G POS</i>';

        return $message;
    }

    private function paymentDisplayForSaleMessage($paymentMethod): string
    {
        $normalized = strtolower(trim((string) $paymentMethod));

        if ($normalized === 'khqr') {
            return 'ទូទាត់រួច';
        }

        if ($normalized === 'cash') {
            return 'មិនទាន់ទូទាត់(COD)';
        }

        return $this->escape((string) ($paymentMethod ?: 'N/A'));
    }

    private function formatDeliveryCompletedMessage(array $deliveryData, string $warehouseName): string
    {
        $helpers = new helpers;
        $currency = strtoupper($helpers->Get_Currency_Code() ?? 'USD');

        $saleRef = $this->escape((string) ($deliveryData['ref'] ?? 'N/A'));
        $customerAddress = $this->escape((string) ($deliveryData['customer_address'] ?? 'N/A'));
        $actorRole = strtolower(trim((string) ($deliveryData['actor_role'] ?? 'delivery')));
        $recorderName = $this->displayableTelegramText(
            $deliveryData['recorder_name'] ?? ($actorRole === 'record' ? ($deliveryData['actor_name'] ?? '') : '')
        );
        $recorderPhone = $this->displayableTelegramText(
            $deliveryData['recorder_phone'] ?? ($actorRole === 'record' ? ($deliveryData['actor_phone'] ?? '') : '')
        );
        $deliveryName = $this->displayableTelegramText(
            $deliveryData['delivery_name'] ?? ($actorRole === 'delivery' ? ($deliveryData['actor_name'] ?? '') : '')
        );
        $deliveryPhone = $this->displayableTelegramText(
            $deliveryData['delivery_phone'] ?? ($actorRole === 'delivery' ? ($deliveryData['actor_phone'] ?? '') : '')
        );
        $completedLabel = $actorRole === 'record' ? 'បានកត់ត្រារួចនៅ' : 'បានដឹករួចនៅ';
        $completedAt = $this->escape($this->formatDisplayDateTime($deliveryData['completed_at'] ?? null));
        $grandTotal = $this->formatAmount($deliveryData['GrandTotal'] ?? 0);

        $message = '';
        $message .= "🧾 <b>លេខយោង:</b> {$saleRef}\n";
        $message .= "📍 <b>អាសយដ្ឋានអតិថិជន:</b> {$customerAddress}\n";
        if ($recorderName !== '') {
            $message .= "📝 <b>អ្នកកត់ត្រា:</b> {$recorderName}\n";
        }
        if ($recorderPhone !== '') {
            $message .= "📞 <b>លេខអ្នកកត់ត្រា:</b> {$recorderPhone}\n";
        }
        if ($deliveryName !== '') {
            $message .= "🚚 <b>អ្នកដឹក:</b> {$deliveryName}\n";
        }
        if ($deliveryPhone !== '') {
            $message .= "📞 <b>លេខអ្នកដឹក:</b> {$deliveryPhone}\n";
        }
        $message .= "💵 <b>សរុប:</b> {$grandTotal} {$currency}\n";
        $message .= "🕒 <b>{$completedLabel}:</b> {$completedAt}";

        return $message;
    }

    private function displayableTelegramText($value): string
    {
        $text = trim((string) $value);

        if ($text === '' || in_array(strtolower($text), ['n/a', 'na', 'null', 'none', '-'], true)) {
            return '';
        }

        return $this->escape($text);
    }

    private function sendSaleProductImages(array $saleData, string $chatId, ?string $botToken = null): void
    {
        $saleRef = (string) ($saleData['ref'] ?? 'N/A');
        $mediaItems = [];

        foreach (($saleData['products'] ?? []) as $product) {
            $imagePath = $this->resolveProductImagePath($product['image'] ?? null);
            $imageUrl = trim((string) ($product['image_url'] ?? ''));

            if (! $imagePath && $imageUrl === '') {
                continue;
            }

            if ($imagePath) {
                $mediaItems[] = [
                    'type' => 'local',
                    'path' => $imagePath,
                    'caption' => $this->formatSaleProductPhotoCaption($saleRef, $product),
                ];

                continue;
            }

            $mediaItems[] = [
                'type' => 'url',
                'url' => $imageUrl,
                'caption' => $this->formatSaleProductPhotoCaption($saleRef, $product),
            ];
        }

        if (count($mediaItems) === 1) {
            $this->sendSingleMediaItem($chatId, $mediaItems[0], $botToken);

            return;
        }

        foreach (array_chunk($mediaItems, 10) as $chunk) {
            if ($this->sendMediaGroup($chatId, $chunk, $botToken)) {
                continue;
            }

            foreach ($chunk as $item) {
                $this->sendSingleMediaItem($chatId, $item, $botToken);
            }
        }
    }

    private function formatSaleProductPhotoCaption(string $saleRef, array $product): string
    {
        $productName = $this->escape((string) ($product['product_name'] ?? 'N/A'));
        $quantity = $this->formatAmount($product['quantity'] ?? 0);
        $saleRef = $this->escape($saleRef);

        return "🖼️ <b>{$productName}</b>\nចំនួន: {$quantity}\nSale: {$saleRef}";
    }

    private function sendPhoto(string $chatId, string $imagePath, string $caption, ?string $botToken = null): bool
    {
        $token = $botToken ?: config('services.telegram.bot_token');
        if (empty($token) || empty($chatId) || ! is_file($imagePath)) {
            return false;
        }

        try {
            $handle = fopen($imagePath, 'r');
            if ($handle === false) {
                return false;
            }

            $response = Http::withOptions([
                'verify' => false,
            ])->timeout(30)
                ->attach('photo', $handle, basename($imagePath))
                ->post("https://api.telegram.org/bot{$token}/sendPhoto", [
                    'chat_id' => $chatId,
                    'caption' => $caption,
                    'parse_mode' => 'HTML',
                ]);

            fclose($handle);

            if ($response->successful()) {
                $data = $response->json();

                return $data['ok'] ?? false;
            }

            Log::error('Telegram photo API error', [
                'chat_id' => $chatId,
                'status' => $response->status(),
                'body' => $response->body(),
                'image_path' => $imagePath,
            ]);

            return false;
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram product image', [
                'chat_id' => $chatId,
                'image_path' => $imagePath,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    private function sendPhotoUrl(string $chatId, string $imageUrl, string $caption, ?string $botToken = null): bool
    {
        $token = $botToken ?: config('services.telegram.bot_token');
        if (empty($token) || empty($chatId) || trim($imageUrl) === '') {
            return false;
        }

        try {
            $response = Http::withOptions([
                'verify' => false,
            ])->timeout(30)->post("https://api.telegram.org/bot{$token}/sendPhoto", [
                'chat_id' => $chatId,
                'photo' => $imageUrl,
                'caption' => $caption,
                'parse_mode' => 'HTML',
            ]);

            if ($response->successful()) {
                $data = $response->json();

                return $data['ok'] ?? false;
            }

            Log::error('Telegram photo URL API error', [
                'chat_id' => $chatId,
                'status' => $response->status(),
                'body' => $response->body(),
                'image_url' => $imageUrl,
            ]);

            return false;
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram product image URL', [
                'chat_id' => $chatId,
                'image_url' => $imageUrl,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    private function sendMediaGroup(string $chatId, array $items, ?string $botToken = null): bool
    {
        $token = $botToken ?: config('services.telegram.bot_token');
        if (empty($token) || empty($chatId) || count($items) < 2) {
            return false;
        }

        $request = Http::withOptions([
            'verify' => false,
        ])->timeout(30);

        $media = [];
        $handles = [];

        try {
            foreach (array_values($items) as $index => $item) {
                $mediaItem = [
                    'type' => 'photo',
                    'caption' => $item['caption'] ?? '',
                    'parse_mode' => 'HTML',
                ];

                if (($item['type'] ?? '') === 'local') {
                    $path = $item['path'] ?? null;
                    if (! $path || ! is_file($path)) {
                        continue;
                    }

                    $attachmentName = 'photo_'.$index;
                    $handle = fopen($path, 'r');
                    if ($handle === false) {
                        continue;
                    }

                    $handles[] = $handle;
                    $request = $request->attach($attachmentName, $handle, basename($path));
                    $mediaItem['media'] = 'attach://'.$attachmentName;
                } else {
                    $url = trim((string) ($item['url'] ?? ''));
                    if ($url === '') {
                        continue;
                    }

                    $mediaItem['media'] = $url;
                }

                $media[] = $mediaItem;
            }

            if (count($media) < 2) {
                return false;
            }

            $response = $request->post("https://api.telegram.org/bot{$token}/sendMediaGroup", [
                'chat_id' => $chatId,
                'media' => json_encode($media, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            ]);

            if ($response->successful()) {
                $data = $response->json();

                return $data['ok'] ?? false;
            }

            Log::error('Telegram media group API error', [
                'chat_id' => $chatId,
                'status' => $response->status(),
                'body' => $response->body(),
                'items' => count($media),
            ]);

            return false;
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram media group', [
                'chat_id' => $chatId,
                'items' => count($items),
                'error' => $e->getMessage(),
            ]);

            return false;
        } finally {
            foreach ($handles as $handle) {
                if (is_resource($handle)) {
                    fclose($handle);
                }
            }
        }
    }

    private function sendSingleMediaItem(string $chatId, array $item, ?string $botToken = null): bool
    {
        $caption = (string) ($item['caption'] ?? '');

        if (($item['type'] ?? '') === 'local') {
            return $this->sendPhoto($chatId, (string) ($item['path'] ?? ''), $caption, $botToken);
        }

        return $this->sendPhotoUrl($chatId, (string) ($item['url'] ?? ''), $caption, $botToken);
    }

    private function resolveProductImagePath(?string $image): ?string
    {
        $filename = basename(trim((string) $image));
        if ($filename === '' || $filename === '.' || $filename === '..') {
            return null;
        }

        $paths = [
            public_path('images/products/'.$filename),
            storage_path('app/public/images/products/'.$filename),
        ];

        foreach ($paths as $path) {
            if (is_file($path)) {
                return $path;
            }
        }

        return null;
    }

    private function formatAmount($value): string
    {
        $number = (float) $value;
        $formatted = number_format($number, 2, '.', '');

        return rtrim(rtrim($formatted, '0'), '.');
    }

    private function formatDisplayDateTime($value): string
    {
        if ($value instanceof \DateTimeInterface) {
            return Carbon::instance($value)
                ->setTimezone($this->displayTimezone())
                ->format('Y-m-d H:i:s');
        }

        $raw = trim((string) $value);
        if ($raw === '') {
            return 'N/A';
        }

        try {
            return Carbon::parse($raw, config('app.timezone', 'UTC'))
                ->setTimezone($this->displayTimezone())
                ->format('Y-m-d H:i:s');
        } catch (\Throwable $e) {
            return $raw;
        }
    }

    private function displayTimezone(): string
    {
        return (string) config('app.display_timezone', 'Asia/Phnom_Penh');
    }

    private function escape(string $value): string
    {
        $value = trim($value);

        return htmlspecialchars($value !== '' ? $value : 'N/A', ENT_QUOTES, 'UTF-8');
    }

    /**
     * Get bot info (for testing connection)
     *
     * @return array|null Bot info or null on failure
     */
    public function getBotInfo(): ?array
    {
        $botToken = config('services.telegram.bot_token');

        if (empty($botToken)) {
            return null;
        }

        try {
            $response = Http::timeout(10)->get("https://api.telegram.org/bot{$botToken}/getMe");

            if ($response->successful()) {
                $data = $response->json();

                return $data['result'] ?? null;
            }

            return null;
        } catch (\Exception $e) {
            Log::error('Failed to get Telegram bot info', [
                'error' => $e->getMessage(),
            ]);

            return null;
        }
    }
}
