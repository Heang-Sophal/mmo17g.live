<?php

namespace App\Services;

use App\utils\helpers;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class TelegramService
{
    /**
     * Send message to Telegram chat
     *
     * @param string $chatId Telegram Chat ID
     * @param string $message Message to send
     * @param string|null $botToken Optional bot token (if null, uses global config)
     * @return bool Success status
     */
    public function sendMessage(string $chatId, string $message, ?string $botToken = null): bool
    {
        // Use provided bot token or fallback to global config
        $token = $botToken ?: config('services.telegram.bot_token');
        
        \Log::info('TelegramService: Sending message with token: ' . (substr($token, 0, 20) . '...') . ' to chat: ' . $chatId);
        
        if (empty($token)) {
            \Log::error('TelegramService: Bot token is empty');
            return false;
        }
        
        if (empty($chatId)) {
            \Log::error('TelegramService: Chat ID is empty');
            return false;
        }

        try {
            // Disable SSL verification for local development (WAMP)
            // In production, you should install proper CA certificates
            $response = Http::withOptions([
                'verify' => false,  // Disable SSL verification for self-signed certs
            ])->timeout(30)->post("https://api.telegram.org/bot{$token}/sendMessage", [
                'chat_id' => $chatId,
                'text' => $message,
                'parse_mode' => 'HTML',
            ]);

            \Log::info('TelegramService: API Response Status: ' . $response->status());

            if ($response->successful()) {
                $data = $response->json();
                \Log::info('TelegramService: Message sent successfully, ok=' . ($data['ok'] ?? 'false'));
                return $data['ok'] ?? false;
            }

            \Log::error('Telegram API error', [
                'chat_id' => $chatId,
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return false;
        } catch (\Exception $e) {
            \Log::error('Failed to send Telegram message', [
                'chat_id' => $chatId,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    /**
     * Send sale notification to warehouse Telegram group
     *
     * @param array $saleData Sale data
     * @param string $warehouseName Warehouse name
     * @param string $chatId Telegram Chat ID
     * @param string|null $botToken Optional bot token for this warehouse
     * @return bool Success status
     */
    public function sendSaleNotification(array $saleData, string $warehouseName, string $chatId, ?string $botToken = null): bool
    {
        $message = $this->formatSaleMessage($saleData, $warehouseName);
        return $this->sendMessage($chatId, $message, $botToken);
    }

    /**
     * Format sale message for Telegram
     *
     * @param array $saleData Sale data
     * @param string $warehouseName Warehouse name
     * @return string Formatted message
     */
    private function formatSaleMessage(array $saleData, string $warehouseName): string
    {
        $helpers = new helpers();
        $currency = strtoupper($helpers->Get_Currency_Code() ?? 'USD');

        $warehouse = $this->escape((string) $warehouseName);
        $customerAddress = $this->escape((string) ($saleData['customer_address'] ?? 'N/A'));
        $customerPhone = $this->escape((string) ($saleData['customer_phone'] ?? 'N/A'));
        $paymentMethod = $this->escape((string) ($saleData['payment_method'] ?? 'N/A'));
        $sellerName = $this->escape((string) ($saleData['seller_name'] ?? ($saleData['created_by'] ?? 'Unknown')));
        $sellerPhone = $this->escape((string) ($saleData['seller_phone'] ?? 'N/A'));
        $dateTime = $this->escape((string) ($saleData['datetime'] ?? ($saleData['date'] ?? 'N/A')));
        $paidAmount = $this->formatAmount($saleData['paid_amount'] ?? 0);

        $message = "🛒 <b>ការលក់ថ្មី / New Sale</b>\n\n";
        $message .= "🏭 <b>ឃ្លាំង:</b> {$warehouse}\n";
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
        $message .= "<i>ប្រព័ន្ធ MMO 17G POS</i>";

        return $message;
    }

    private function formatAmount($value): string
    {
        $number = (float) $value;
        $formatted = number_format($number, 2, '.', '');

        return rtrim(rtrim($formatted, '0'), '.');
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
