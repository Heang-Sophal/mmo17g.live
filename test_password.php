<?php

/**
 * Quick password test script
 * Usage: php test_password.php
 */

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

$user = User::find(1);

echo "\n";
echo "===========================================\n";
echo "Testing Password for User ID: {$user->id}\n";
echo "Email: {$user->email}\n";
echo "Name: {$user->firstname} {$user->lastname}\n";
echo "===========================================\n\n";

echo "Password hash in database:\n{$user->password}\n\n";

// Ask for password to test
fwrite(STDOUT, "Enter password to test: ");
$password = trim(fgets(STDIN));

if (empty($password)) {
    echo "\n❌ No password entered!\n\n";
    exit(1);
}

echo "\n";

if (Hash::check($password, $user->password)) {
    echo "✅ SUCCESS! The password matches!\n\n";
    echo "This is the correct current password.\n";
    echo "You can use this password to change to a new password.\n\n";
} else {
    echo "❌ FAILED! The password does NOT match!\n\n";
    echo "The password you entered is incorrect.\n";
    echo "Please try again with the correct current password.\n\n";
    
    // Try some common passwords
    $common_passwords = ['password', 'password123', '12345678', 'admin', 'admin123', 'seller', 'seller123'];
    echo "Testing common passwords:\n";
    foreach ($common_passwords as $test_password) {
        if (Hash::check($test_password, $user->password)) {
            echo "  ✅ Found match! Password is: {$test_password}\n";
            exit(0);
        }
    }
    echo "  ❌ None of the common passwords matched.\n\n";
}
