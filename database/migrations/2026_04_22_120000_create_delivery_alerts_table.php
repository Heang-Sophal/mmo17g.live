<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryAlertsTable extends Migration
{
    public function up()
    {
        Schema::create('delivery_alerts', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->integer('user_id')->index('delivery_alerts_user_id');
            $table->integer('sale_id')->nullable()->index('delivery_alerts_sale_id');
            $table->integer('warehouse_id')->nullable()->index('delivery_alerts_warehouse_id');
            $table->string('type', 100)->default('sale_created');
            $table->string('title', 191);
            $table->text('message');
            $table->json('payload')->nullable();
            $table->timestamp('read_at')->nullable();
            $table->timestamps(6);
        });

        Schema::table('delivery_alerts', function (Blueprint $table) {
            $table->foreign('user_id', 'delivery_alerts_user_foreign')
                ->references('id')
                ->on('users')
                ->onUpdate('RESTRICT')
                ->onDelete('CASCADE');
            $table->foreign('sale_id', 'delivery_alerts_sale_foreign')
                ->references('id')
                ->on('sales')
                ->onUpdate('RESTRICT')
                ->onDelete('SET NULL');
            $table->foreign('warehouse_id', 'delivery_alerts_warehouse_foreign')
                ->references('id')
                ->on('warehouses')
                ->onUpdate('RESTRICT')
                ->onDelete('SET NULL');
        });
    }

    public function down()
    {
        Schema::table('delivery_alerts', function (Blueprint $table) {
            $table->dropForeign('delivery_alerts_user_foreign');
            $table->dropForeign('delivery_alerts_sale_foreign');
            $table->dropForeign('delivery_alerts_warehouse_foreign');
        });

        Schema::dropIfExists('delivery_alerts');
    }
}
