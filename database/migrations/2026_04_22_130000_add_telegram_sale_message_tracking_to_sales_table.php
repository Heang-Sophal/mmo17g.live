<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->string('telegram_sale_chat_id')->nullable()->after('payment_method');
            $table->bigInteger('telegram_sale_message_id')->nullable()->after('telegram_sale_chat_id');
        });
    }

    public function down(): void
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->dropColumn(['telegram_sale_chat_id', 'telegram_sale_message_id']);
        });
    }
};
