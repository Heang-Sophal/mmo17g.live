<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\ClientRepository;

class SetupController extends Controller
{
    public function changeEnv($data = [])
    {
        if (count($data) > 0) {
            // Read .env file
            $env = file_get_contents(base_path().'/.env');

            // Split into lines
            $lines = preg_split('/(\r\n|\n|\r)/', $env);
            $newLines = [];

            // Loop through .env lines
            foreach ($lines as $line) {
                $entry = explode('=', $line, 2);
                $key = isset($entry[0]) ? trim($entry[0]) : '';

                // Check if this key should be updated
                if (array_key_exists($key, $data) && $data[$key] !== null) {
                    $newLines[] = $key.'='.$data[$key];
                } else {
                    $newLines[] = $line;
                }
            }

            // Turn the array back to a string
            $env = implode("\n", $newLines);

            // And overwrite the .env with the new data
            file_put_contents(base_path().'/.env', $env);

            return true;
        } else {
            return false;
        }
    }

    public function viewStep1()
    {

        $data = [
            'APP_NAME' => session('env.APP_NAME') ? str_replace('"', '', session('env.APP_NAME')) : str_replace('"', '', config('app.name')),
            'APP_ENV' => session('env.APP_ENV') ? session('env.APP_ENV') : config('app.env'),
            'APP_DEBUG' => session('env.APP_DEBUG') ? session('env.APP_DEBUG') : config('app.debug'),
            'APP_KEY' => session('env.APP_KEY') ? session('env.APP_KEY') : config('app.key'),
        ];

        return view('setup.step1', compact('data'));
    }

    public function viewCheck()
    {
        return view('setup.check');
    }

    public function viewStep2()
    {

        if (config('database.default') == 'mysql') {
            $db = config('database.connections.mysql');

        }

        $data = [
            'DB_CONNECTION' => session('env.DB_CONNECTION') ? session('env.DB_CONNECTION') : config('database.default'),
            'DB_HOST' => session('env.DB_HOST') ? session('env.DB_HOST') : (isset($db['host']) ? $db['host'] : ''),
            'DB_PORT' => session('env.DB_PORT') ? session('env.DB_PORT') : (isset($db['port']) ? $db['port'] : ''),
            'DB_DATABASE' => session('env.DB_DATABASE') ? session('env.DB_DATABASE') : (isset($db['database']) ? $db['database'] : ''),
            'DB_USERNAME' => session('env.DB_USERNAME') ? session('env.DB_USERNAME') : (isset($db['username']) ? $db['username'] : ''),
            'DB_PASSWORD' => session('env.DB_PASSWORD') ? str_replace('"', '', session('env.DB_PASSWORD')) : (isset($db['password']) ? str_replace('"', '', $db['password']) : ''),
        ];

        return view('setup.step2', ['data' => $data]);
    }

    public function viewStep3()
    {
        $dbtype = null;

        if (session('env.DB_CONNECTION') == null) {
            $dbtype = config('database.default');
        } else {
            $dbtype = session('env.DB_CONNECTION');
        }

        if ($dbtype == 'mysql') {
            $db = config('database.connections.mysql');

        }

        $dbDatabase = session('env.DB_DATABASE');

        $data = [

            'APP_NAME' => str_replace('"', '', session('env.APP_NAME')) == str_replace('"', '', config('app.name')) ? 'old' : str_replace('"', '', session('env.APP_NAME')),
            'APP_ENV' => session('env.APP_ENV') == config('app.env') ? 'old' : session('APP_ENV'),
            'APP_DEBUG' => session('env.APP_DEBUG') == config('app.debug') ? 'old' : session('env.APP_DEBUG'),
            'APP_KEY' => session('env.APP_KEY') == config('app.key') ? 'old' : session('env.APP_KEY'),
            'DB_CONNECTION' => session('env.DB_CONNECTION') == config('database.default') ? 'old' : session('env.DB_CONNECTION'),
            'DB_HOST' => session('env.DB_HOST') == (isset($db['host']) ? $db['host'] : '') ? 'old' : session('env.DB_HOST'),
            'DB_PORT' => session('env.DB_PORT') == (isset($db['port']) ? $db['port'] : '') ? 'old' : session('env.DB_PORT'),
            'DB_DATABASE' => $dbDatabase == (isset($db['database']) ? $db['database'] : '') ? 'old' : session('env.DB_DATABASE'),
            'DB_USERNAME' => session('env.DB_USERNAME') == (isset($db['username']) ? $db['username'] : '') ? 'old' : session('env.DB_USERNAME'),
            'DB_PASSWORD' => str_replace('"', '', session('env.DB_PASSWORD')) == (isset($db['password']) ? str_replace('"', '', $db['password']) : '') ? 'old' : str_replace('"', '', session('env.DB_PASSWORD')),

        ];

        $count = 0;

        foreach ($data as $mydata) {

            $mydata !== 'old' ? $count++ : false;
        }

        $view = view('setup.step3', compact('data'));

        return $view;
    }

    public function lastStep(Request $request)
    {
        set_time_limit(0);
        ini_set('memory_limit', '1024M');

        try {
            // 1) Update .env file first
            $this->changeEnv([
                'APP_NAME' => session('env.APP_NAME'),
                'APP_ENV' => session('env.APP_ENV'),
                'APP_KEY' => session('env.APP_KEY'),
                'APP_DEBUG' => session('env.APP_DEBUG'),
                'APP_URL' => session('env.APP_URL'),
                'LOG_CHANNEL' => session('env.LOG_CHANNEL'),

                'DB_CONNECTION' => session('env.DB_CONNECTION'),
                'DB_HOST' => session('env.DB_HOST'),
                'DB_PORT' => session('env.DB_PORT'),
                'DB_DATABASE' => session('env.DB_DATABASE'),
                'DB_USERNAME' => session('env.DB_USERNAME'),
                'DB_PASSWORD' => session('env.DB_PASSWORD'),
            ]);

            // 2) Clear any old config cache
            Artisan::call('config:clear');
            Artisan::call('cache:clear');
            Artisan::call('route:clear');
            Artisan::call('view:clear');

            // 3) Drop all tables and re-run migrations (without seed - we'll seed separately)
            Artisan::call('migrate:fresh', [
                '--force' => true,
            ]);

            // 4) Run seeders with increased memory
            Artisan::call('db:seed', [
                '--force' => true,
            ]);

            // 5) Generate Passport keys
            Artisan::call('passport:keys', [
                '--force' => true,
            ]);

            $clientRepository = app(ClientRepository::class);
            $appUrl = config('app.url') ?: 'http://localhost';

            // Create Personal Access Client
            $clientRepository->createPersonalAccessClient(
                null,
                'Laravel Personal Access Client',
                $appUrl
            );

            // Create Password Grant Client
            $clientRepository->createPasswordGrantClient(
                null,
                'Laravel Password Grant Client',
                $appUrl
            );

            // 6) Mark the install as done
            Storage::disk('public')->put('installed', 'OK');

            // 7) Final cache clear
            Artisan::call('config:cache');

        } catch (\Exception $e) {
            \Log::error('Setup lastStep error: '.$e->getMessage());

            return response()->view('errors.500', [
                'exception' => $e,
                'message' => 'Setup failed: '.$e->getMessage(),
            ], 500);
        }

        return view('setup.finishedSetup');
    }

    public function getNewAppKey()
    {

        Artisan::call('key:generate', ['--show' => true]);
        $output = (Artisan::output());
        $output = substr($output, 0, -2);

        return $output;
    }

    public function setupStep1(Request $request)
    {
        $allow = 'false';

        $request->session()->put('env.APP_ENV', $request->app_env);
        $request->session()->put('env.APP_DEBUG', $request->app_debug);

        if (strlen($request->app_name) > 0) {
            $request->session()->put('env.APP_NAME', '"'.$request->app_name.'"');
        }

        if (strlen($request->app_key) > 0) {
            $request->session()->put('env.APP_KEY', $request->app_key);
        }

        return $this->viewStep2();
    }

    public function setupStep2(Request $request)
    {

        if (strlen($request->db_password) > 0) {
            $request->session()->put('env.DB_PASSWORD', '"'.$request->db_password.'"');
        }
        $request->session()->put('env.DB_CONNECTION', $request->db_connection);
        $request->session()->put('env.DB_HOST', $request->db_host);
        $request->session()->put('env.DB_PORT', $request->db_port);
        $request->session()->put('env.DB_DATABASE', $request->db_database);
        $request->session()->put('env.DB_USERNAME', $request->db_username);
        // $request->session()->put('env.DB_PASSWORD', $request->db_password);

        if ($request->db_connection == 'sqlite') {
            TestDbController::testSqLite();
        }

        return $this->viewStep3();
    }
}
