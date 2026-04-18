# Password Change Debugging Guide

## Problem
The "Change Password" function in the Seller App Profile is not working.

## Recent Changes Made

### 1. Backend (Laravel)
- ✅ Created dedicated endpoint: `POST /api/profile/change-password`
- ✅ Added `changePassword()` method in `ProfileApiController`
- ✅ Removed password handling from `update()` method
- ✅ Added detailed logging for debugging
- ✅ Fixed field names: `firstname`, `lastname` instead of `name`

### 2. Frontend (Flutter)
- ✅ Created dedicated `changePassword()` method in API service
- ✅ Separated profile updates from password changes in ProfileProvider
- ✅ Updated profile screen to use new password change endpoint
- ✅ Added better error handling and display

## How to Debug

### Step 1: Check Laravel Logs

The backend now has detailed logging. Check the logs when trying to change password:

```bash
tail -f /Users/sreyleaknem/Desktop/WebApp03/storage/logs/laravel.log
```

Look for these log entries:
- "Password change request received" - Shows what data was received
- "Attempting password change for user" - Shows which user is trying
- "Validation passed, checking current password" - Validation succeeded
- "Current password is incorrect" - Current password doesn't match
- "Password changed successfully" - Success!

### Step 2: Test with Curl Script

I've created a test script. Update the values and run it:

```bash
cd /Users/sreyleaknem/Desktop/WebApp03

# Edit the script and update these values:
# - CURRENT_PASSWORD (your current password)
# - NEW_PASSWORD (new password to test with)

./test_password_change.sh
```

### Step 3: Check Flutter Console

Run the Flutter app with verbose logging:

```bash
cd /Users/sreyleaknem/Desktop/WebApp03/seller_app
flutter run -v
```

Look for error messages in the console when you try to change password.

### Step 4: Common Issues & Solutions

#### Issue 1: "Current password is incorrect"
**Cause**: The current password you entered doesn't match the stored password.
**Solution**: 
- Verify you're using the correct current password
- Check if the user was created with the password properly hashed
- Try logging in with the current password first

#### Issue 2: "Validation failed"
**Cause**: Missing or invalid input fields
**Solution**:
- Make sure all three fields are filled (current, new, confirm)
- New password must be at least 8 characters
- New password and confirmation must match

#### Issue 3: "User not found"
**Cause**: Authentication token is missing or invalid
**Solution**:
- Make sure you're logged in
- Check if the token is being sent in the Authorization header
- Try logging out and logging back in

#### Issue 4: Network Error
**Cause**: Cannot connect to the backend
**Solution**:
- Check if Laravel server is running
- Verify the API URL in `api_config.dart` is correct
- For Android emulator: use `http://10.0.2.2:8000/api`
- For physical device: use your computer's IP address

### Step 5: Test the API Directly

You can test the endpoint directly with curl:

```bash
# First get your token from login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"seller@gmail.com","password":"YOUR_PASSWORD"}'

# Then use the token to change password
curl -X POST http://localhost:8000/api/profile/change-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "current_password": "YOUR_CURRENT_PASSWORD",
    "new_password": "NEW_PASSWORD_123",
    "new_password_confirmation": "NEW_PASSWORD_123"
  }'
```

### Step 6: Database Check

Verify the user exists and has a password:

```sql
SELECT id, firstname, lastname, email, password, phone 
FROM users 
WHERE email = 'seller@gmail.com';
```

The password field should contain a bcrypt hash (starts with `$2y$`).

## Expected Behavior

### Successful Password Change:
1. User enters current password, new password, and confirmation
2. App validates (passwords match, min 8 chars)
3. App calls `POST /api/profile/change-password`
4. Backend verifies current password
5. Backend updates password
6. Backend logs the change in `profile_edit_logs` table
7. App shows success message
8. User can login with new password

### Failed Password Change:
1. App shows clear error message explaining what went wrong
2. Error message appears in red SnackBar
3. Error details are logged in Laravel logs
4. Password remains unchanged

## Files Changed

### Backend:
- `/app/Http/Controllers/Api/ProfileApiController.php` - Added changePassword method
- `/routes/api.php` - Added route for password change
- `/app/Models/User.php` - Added accessors for role and is_active

### Frontend:
- `/seller_app/lib/services/api_service.dart` - Added changePassword API call
- `/seller_app/lib/providers/profile_provider.dart` - Separated password logic
- `/seller_app/lib/screens/profile_screen.dart` - Updated to use new method

## Next Steps

1. **Check Laravel logs** to see what error is occurring
2. **Run the test script** to verify the backend works
3. **Try changing password** in the app and note the exact error message
4. **Share the error message** so I can help fix it

## Quick Test

To quickly test if the endpoint works:

```bash
# Start Laravel server
cd /Users/sreyleaknem/Desktop/WebApp03
php artisan serve

# In another terminal, run the test
cd /Users/sreyleaknem/Desktop/WebApp03
./test_password_change.sh
```

Make sure to update the test script with your actual current password!
