#!/bin/bash

# Test script for password change endpoint
# Usage: ./test_password_change.sh

echo "Testing Password Change Endpoint"
echo "================================"
echo ""

# Configuration - UPDATE THESE VALUES
BASE_URL="http://localhost:8000/api"
EMAIL="seller@gmail.com"
CURRENT_PASSWORD="your_current_password"
NEW_PASSWORD="newpassword123"
NEW_PASSWORD_CONFIRM="newpassword123"

# First, login to get a token
echo "1. Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$CURRENT_PASSWORD\"}")

echo "Login Response:"
echo "$LOGIN_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$LOGIN_RESPONSE"
echo ""

# Extract token (assuming the response has a 'token' field)
TOKEN=$(echo "$LOGIN_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin).get('data', {}).get('token', ''))" 2>/dev/null)

if [ -z "$TOKEN" ]; then
  echo "❌ Failed to get token from login response"
  echo "Please check your login credentials"
  exit 1
fi

echo "✓ Got token: ${TOKEN:0:20}..."
echo ""

# Now test password change
echo "2. Testing password change..."
PASSWORD_RESPONSE=$(curl -s -X POST "$BASE_URL/profile/change-password" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{
    \"current_password\": \"$CURRENT_PASSWORD\",
    \"new_password\": \"$NEW_PASSWORD\",
    \"new_password_confirmation\": \"$NEW_PASSWORD_CONFIRM\"
  }")

echo "Password Change Response:"
echo "$PASSWORD_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$PASSWORD_RESPONSE"
echo ""

# Check if successful
if echo "$PASSWORD_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Password change successful!"
else
  echo "❌ Password change failed"
fi

echo ""
echo "3. Testing login with new password..."
NEW_LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$NEW_PASSWORD\"}")

echo "New Login Response:"
echo "$NEW_LOGIN_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$NEW_LOGIN_RESPONSE"
echo ""

if echo "$NEW_LOGIN_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Can login with new password!"
else
  echo "❌ Cannot login with new password"
fi
