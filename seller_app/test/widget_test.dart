import 'package:flutter_test/flutter_test.dart';
import 'package:seller_app/main.dart';

void main() {
  testWidgets('Seller app smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const SellerApp());

    // Verify that the dashboard is displayed
    expect(find.text('Dashboard'), findsOneWidget);

    // Verify bottom navigation items
    expect(find.text('Dashboard'), findsOneWidget);
    expect(find.text('Products'), findsOneWidget);
    expect(find.text('Orders'), findsOneWidget);
    expect(find.text('Profile'), findsOneWidget);
  });
}
