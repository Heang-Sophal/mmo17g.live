<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ClearAllSales extends Command
{
    protected $signature = 'sales:clear-all {--force : Force the operation to run without confirmation}';

    protected $description = 'Delete all sales and related data from the system';

    public function handle()
    {
        $this->warn('⚠️  WARNING: This will permanently delete ALL sales and related data!');
        $this->info('This includes:');
        $this->line('  - Sales records & sale details');
        $this->line('  - Payment sales & sale returns');
        $this->line('  - Sale documents & shipments');
        $this->line('  - Draft sales');

        if (! $this->option('force')) {
            if (! $this->confirm('Are you absolutely sure you want to proceed?')) {
                $this->info('Operation cancelled.');

                return 0;
            }

            if (! $this->confirm('This action CANNOT be undone. Confirm?')) {
                $this->info('Operation cancelled.');

                return 0;
            }
        }

        $this->info('Starting deletion process...');

        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $deleted = [];

        try {
            // Delete in correct order (children first, then parents)
            $tables = [
                'sale_return_details' => 'Sale Return Details',
                'payment_sale_returns' => 'Payment Sale Returns',
                'sale_returns' => 'Sale Returns',
                'payment_sales' => 'Payment Sales',
                'sale_documents' => 'Sale Documents',
                'shipments' => 'Shipments',
                'sale_details' => 'Sale Details',
                'sales' => 'Sales',
                'draft_sale_details' => 'Draft Sale Details',
                'draft_sales' => 'Draft Sales',
            ];

            foreach ($tables as $table => $label) {
                if (Schema::hasTable($table)) {
                    $count = DB::table($table)->count();
                    if ($count > 0) {
                        DB::table($table)->truncate();
                        $deleted[$label] = $count;
                    }
                }
            }

            // Re-enable foreign key checks
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');

            $this->newLine();
            $this->info('✅ All sales data deleted successfully!');
            $this->newLine();

            $tableData = [];
            foreach ($deleted as $table => $count) {
                $tableData[] = [$table, $count];
            }
            $this->table(['Table', 'Records Deleted'], $tableData);

            $total = array_sum($deleted);
            $this->newLine();
            $this->info("🗑️  Total records deleted: {$total}");
            $this->warn('💡 Note: Customer records, products, and other data remain intact.');

            return 0;

        } catch (\Exception $e) {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            $this->error('❌ Error occurred: '.$e->getMessage());

            return 1;
        }
    }
}
