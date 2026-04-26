# ការផាក់ jQuery iOS App ទៅក្នុង Apple App Store
# Publishing iOS App to Apple App Store - Flutter Guide

## ដំណាក់កាលបឋម (Prerequisites)

- [ ] Apple Developer Account ($99/year) - https://developer.apple.com
- [ ] Xcode 13.0 or higher
- [ ] Flutter SDK for iOS
- [ ] App Store Connect access
- [ ] Local backend server must be stable (fix 500 errors first)

## পদক্ষেप 1: កម្មវិធីត្រៀមខ្លួន (App Preparation)

### 1.1 Update Flutter Project Configuration

```bash
cd seller_app
flutter pub get
```

### 1.2 Update iOS app configuration files

Edit `ios/Runner/Info.plist`:
```xml
<key>CFBundleName</key>
<string>Your App Name</string>
<key>CFBundleShortVersionString</key>
<string>1.0</string>
<key>CFBundleVersion</key>
<string>1</string>
```

### 1.3 Update pubspec.yaml with version

```yaml
version: 1.0.0+1
```

Format: `semantic-version+build-number`

## পদক্ষেप 2: Apple Developer appointmentการตั้งค่า

### 2.1 Create App ID in Apple Developer Portal
- Go to https://developer.apple.com/account
- Certificates, Identifiers & Profiles → Identifiers
- Create new App ID (Bundle ID format: `com.yourcompany.sellerapp`)

### 2.2 Create App Record in App Store Connect
- Go to https://appstoreconnect.apple.com
- My Apps → Create New App
- Select iOS platform
- Enter app name, Bundle ID, SKU, primary category

### 2.3 Generate Certificates

**Create Certificate Signing Request (CSR):**
- Keychain Access → Certificate Assistant → Request from CA
- Save to disk

**In Apple Developer Portal:**
- Upload CSR to create iOS Distribution Certificate
- Download certificate and double-click to install

### 2.4 Create Provisioning Profile
- In Apple Developer Portal
- Provisioning Profiles → Distribution
- Select your Bundle ID and certificate
- Download and install (double-click)

## ដំណាក់កាលទី 3: ដាក់ Xcode Signing (Code Signing)

### 3.1 Configure Xcode Project
```bash
cd ios
open Runner.xcworkspace  # NOT Runner.xcodeproj
```

### 3.2 In Xcode:
1. Select "Runner" project in sidebar
2. Select "Runner" target (not "Tests")
3. Go to "Signing & Capabilities" tab
4. Check "Automatically manage signing"
5. Select your Team ID
6. Verify Bundle Identifier matches App Store app

### 3.3 Update build settings if needed:
- General → Identity → Bundle Identifier
- Build Settings → Search for "signing"
- CODE_SIGN_IDENTITY: "Apple Distribution"

## ដំណាក់កាលទី 4: তৈরি Release Build

### 4.1 Build iOS Archive

```bash
cd /path/to/seller_app

# Clean build
flutter clean

# Get dependencies
flutter pub get

# Build release for iOS
flutter build ios --release
```

### 4.2 Create .ipa file (using Xcode)

```bash
# Option 1: Using xcodebuild
cd ios
xcodebuild -workspace Runner.xcworkspace \
  -scheme Runner \
  -configuration Release \
  -derivedDataPath build \
  -archivePath build/Runner.xcarchive \
  archive

xcodebuild -exportArchive \
  -archivePath build/Runner.xcarchive \
  -exportOptionsPlist ExportOptions.plist \
  -exportPath build/ios/ipa
```

### 4.3 Alternatively, using Xcode GUI:
1. Open `ios/Runner.xcworkspace`
2. Select "Product" → "Archive"
3. Select your Archive
4. Click "Distribute App"
5. Select "App Store Connect"
6. Follow wizard to generate .ipa

## ដំណាក់កាលទី 5: Upload to App Store

### 5.1 Using App Store Connect website:
1. Log in to https://appstoreconnect.apple.com
2. Select your app
3. Go to "TestFlight" tab (for testing first - RECOMMENDED)
4. Click "+" to add new build
5. Upload .ipa file

### 5.2 Using Transporter (Apple's official tool):
```bash
# Download Transporter from App Store
# Or use CLI:
xcrun altool --upload-app --type ios \
  --file /path/to/app.ipa \
  --username your-apple-id@email.com \
  --password app-specific-password
```

### 5.3 Using Apple Transporter app:
1. Download from Mac App Store
2. Sign in with Apple ID
3. Drag and drop .ipa file
4. Click "Deliver"

## ដំណាក់កាលទី 6: Submit for Review

### 6.1 Prepare App Store Listing:
In App Store Connect:
- [ ] Add screenshots (5-6 per iPhone screen size)
- [ ] Write app description
- [ ] Add keywords (search terms)
- [ ] Add release notes
- [ ] Select category
- [ ] Add support URL and privacy policy URL
- [ ] Set price (free or paid)
- [ ] Configure content rating

### 6.2 Add Build to Release:
1. In "TestFlight", test your build thoroughly first
2. Once tested, go to "App Information" tab
3. Under "Version Release", select your build
4. Review all metadata

### 6.3 Submit for Review:
1. Click "Submit for Review" button
2. Confirm content rating
3. Export Compliance information
4. Sign agreements
5. Submit

## សំខាន់ៗ (Important Notes)

⚠️ **Before Publishing:**
- [ ] Test backend API thoroughly (FIX current 500 errors first!)
- [ ] Test app on real device, not just simulator
- [ ] Use TestFlight to get feedback from testers
- [ ] Ensure privacy policy URL is active
- [ ] Test all login/authentication flows

📋 **App Store Review Guidelines:**
- https://developer.apple.com/app-store/review/guidelines/
- Common rejection reasons:
  - Crashes on launch
  - Broken backend/API
  - Missing privacy policy
  - Inadequate app description
  - Poor UI/UX

⏱️ **Review Times:**
- Typically 24-48 hours
- Can take longer during peak times
- May need revisions before approval

## បញ្ហាលម្អិត (Troubleshooting)

**Problem: "No matching provisioning profile found"**
```bash
# Remove old profiles and let Xcode regenerate
rm -rf ~/Library/MobileDevice/Provisioning\ Profiles/
# Restart Xcode
```

**Problem: "Certificate expired"**
- Create new certificate in Apple Developer Portal
- Re-download and install

**Problem: "App rejected due to backend errors"**
- Fix server-side issues (your current 500 errors)
- Ensure API is stable before resubmission

**Problem: "Bundle ID mismatch"**
- Verify `ios/Runner/Info.plist` matches App Store app
- Verify `pubspec.yaml` version number
- Clean and rebuild

## ចាប់ផ្តើមឥឡូវ (Next Steps)

1. ✅ Fix your current backend 500 errors first
2. ✅ Test app thoroughly in TestFlight
3. ✅ Create Apple Developer Account
4. ✅ Create App ID and Provisioning Profile
5. ✅ Build Release version
6. ✅ Upload to TestFlight for testing
7. ✅ Submit for App Store Review

---

**Resource Links:**
- Apple Developer: https://developer.apple.com
- App Store Connect: https://appstoreconnect.apple.com
- Flutter iOS Deployment: https://flutter.dev/docs/deployment/ios
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
