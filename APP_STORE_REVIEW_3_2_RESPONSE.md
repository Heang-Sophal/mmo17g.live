# App Store Review Response - Guideline 3.2

Use this in App Store Connect after uploading the new build. Replace the demo password before submission.

To create or refresh the review account on production, run:

```bash
php artisan app-review:ensure-seller seller@gmail.com --password="REPLACE_WITH_CURRENT_REVIEW_PASSWORD"
```

You can omit `--password` to generate a temporary password and copy it from the command output.

## Notes for Review

17G Seller is a role-based business companion app for verified 17G staff and merchant sellers. It is used to manage physical product sales, inventory, customer orders, delivery coordination, payment-status records, and seller reports.

The app does not sell or unlock digital content, subscriptions, premium app functionality, virtual currency, loans, fundraising, advertising impressions, app ratings, app reviews, rankings, or store-related actions.

Payments shown in the app are payment-status records for physical retail orders fulfilled outside the app, such as cash on delivery, bank transfer, card, or KHQR records. These payments do not unlock digital content or app features.

Seller accounts are issued by MMO 17G support after business verification. Access is role based, so users only see the seller/delivery/reporting tools assigned to their business role.

Demo account for App Review:
- Email: seller@gmail.com
- Password: REPLACE_WITH_CURRENT_REVIEW_PASSWORD

Support and business-model details:
- Seller App Access: https://mmo17g.store/seller-app-access
- Privacy Policy: https://mmo17g.store/privacy-policy
- Support: https://mmo17g.store/support
- Contact: support@mmo17g.store

## What Changed in This Build

- Added an in-app seller access/business model disclosure on the sign-in screen.
- Added visible Access, Privacy, Support, and Contact links before login and in Profile.
- Added a public Seller App Access page explaining eligibility, physical-goods payments, and App Review access.
- Updated app metadata strings so web/iOS names consistently identify the app as 17G Seller.

## Submission Checklist

- Confirm the demo account above can log in on the production server.
- Confirm the demo account has seller mobile permissions for dashboard, orders, POS, products, reports, profile, and alerts as needed.
- Confirm https://mmo17g.store/seller-app-access, https://mmo17g.store/privacy-policy, and https://mmo17g.store/support are live.
- In App Review notes, explain that KHQR/cash/card/bank transfer are physical-order payment records, not digital-content purchases.
