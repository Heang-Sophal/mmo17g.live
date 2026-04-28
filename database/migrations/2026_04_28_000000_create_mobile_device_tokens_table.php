<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMobileDeviceTokensTable extends Migration
{
    public function up()
    {
        Schema::create('mobile_device_tokens', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->integer('user_id')->index('mobile_device_tokens_user_id');
            $table->string('fcm_token', 512)->unique('mobile_device_tokens_fcm_token_unique');
            $table->string('app_type', 50)->default('seller')->index('mobile_device_tokens_app_type');
            $table->string('platform', 50)->nullable();
            $table->string('device_name', 191)->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamps(6);

            $table->index(['user_id', 'app_type'], 'mobile_device_tokens_user_app_index');
        });

        Schema::table('mobile_device_tokens', function (Blueprint $table) {
            $table->foreign('user_id', 'mobile_device_tokens_user_foreign')
                ->references('id')
                ->on('users')
                ->onUpdate('RESTRICT')
                ->onDelete('CASCADE');
        });
    }

    public function down()
    {
        Schema::table('mobile_device_tokens', function (Blueprint $table) {
            $table->dropForeign('mobile_device_tokens_user_foreign');
        });

        Schema::dropIfExists('mobile_device_tokens');
    }
}
