<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShippingIsFreeToSalesTable extends Migration
{
    public function up()
    {
        Schema::table('sales', function (Blueprint $table) {
            if (! Schema::hasColumn('sales', 'shipping_is_free')) {
                $table->boolean('shipping_is_free')->default(false)->after('shipping');
            }
        });
    }

    public function down()
    {
        Schema::table('sales', function (Blueprint $table) {
            if (Schema::hasColumn('sales', 'shipping_is_free')) {
                $table->dropColumn('shipping_is_free');
            }
        });
    }
}
