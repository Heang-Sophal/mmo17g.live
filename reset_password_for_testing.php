<?php

/**
 * Reset user password to a known value for testing
 * Usage: php reset_password_for_testing.php
 */

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

$user = User::find(1);

echo "\n";
echo "===========================================\n";
echo "⚠️  TEMPORARY PASSWORD RESET FOR TESTING\n";
echo "===========================================\n\n";

echo "User: {$user->firstname} {$user->lastname}\n";
echo "Email: {$user->email}\n\n";

$newPassword = 'Test@12345';

echo "Setting password to: {$newPassword}\n\n";

$user->password = Hash::make($newPassword);
$user->save();

echo "✅ Password has been reset!\n\n";
echo "You can now:\n";
echo "1. Use '{$newPassword}' as your CURRENT password\n";
echo "2. Change it to a new password using the app\n\n";
echo "===========================================\n";
echo "IMPORTANT: After testing, change your password\n";
echo "to something secure that you'll remember!\n";
echo "===========================================\n\n";
