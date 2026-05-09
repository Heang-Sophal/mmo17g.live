<?php

namespace App\Providers;

use App\Models\Setting;
use App\Models\Sale;
use App\Services\DeliveryAlertService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Console\ClientCommand;
use Laravel\Passport\Console\InstallCommand;
use Laravel\Passport\Console\KeysCommand;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Schema::defaultStringLength(191);

        /* ADD THIS LINES */
        $this->commands([
            InstallCommand::class,
            ClientCommand::class,
            KeysCommand::class,
        ]);

        View::composer('*', function ($view) {
            $excluded = [
                'api',
                'setup',
                'update',
                'password',
                'online_store',
            ];

            $firstSegment = Request::segment(1); // Get the first segment of the URL

            if (! in_array($firstSegment, $excluded)) {
                $view->with('app_settings', Setting::first());
            }
        });

        Sale::created(function (Sale $sale) {
            $sendDeliveryAlert = function () use ($sale) {
                try {
                    $freshSale = $sale->fresh(['warehouse', 'client', 'user']) ?: $sale;

                    app(DeliveryAlertService::class)->createAlertsForSale($freshSale);
                } catch (\Throwable $e) {
                    Log::warning('Failed to create delivery notification for new sale.', [
                        'sale_id' => $sale->id,
                        'message' => $e->getMessage(),
                    ]);
                }
            };

            if (DB::transactionLevel() > 0) {
                DB::afterCommit($sendDeliveryAlert);

                return;
            }

            $sendDeliveryAlert();
        });

        // Set the default guard to 'store' for all 'store/*' routes
        $this->app['router']->matched(function (\Illuminate\Routing\Events\RouteMatched $event) {
            if ($event->route->action['middleware'] === 'auth.store') {
                Auth::shouldUse('store');
            }
        });
    }
}
