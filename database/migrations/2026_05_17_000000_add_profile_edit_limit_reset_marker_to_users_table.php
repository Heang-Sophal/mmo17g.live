<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('users')) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'profile_edit_limit_reset_at')) {
                $table->timestamp('profile_edit_limit_reset_at', 6)->nullable()->index();
            }

            if (! Schema::hasColumn('users', 'profile_edit_limit_reset_by')) {
                $table->integer('profile_edit_limit_reset_by')->nullable()->index();
            }
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('users')) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'profile_edit_limit_reset_by')) {
                $table->dropColumn('profile_edit_limit_reset_by');
            }

            if (Schema::hasColumn('users', 'profile_edit_limit_reset_at')) {
                $table->dropColumn('profile_edit_limit_reset_at');
            }
        });
    }
};
