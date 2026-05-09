import 'package:flutter_test/flutter_test.dart';
import 'package:seller_app/main.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUp(() {
    SharedPreferences.setMockInitialValues({});
  });

  testWidgets('shows seller app sign-in flow', (WidgetTester tester) async {
    await tester.pumpWidget(const SellerApp());

    expect(find.text('17G Seller'), findsOneWidget);

    await tester.pumpAndSettle();

    expect(find.text('ចូលគណនី'), findsWidgets);
    expect(find.text('អ៊ីមែល'), findsOneWidget);
    expect(find.text('ពាក្យសម្ងាត់'), findsOneWidget);
  });
}
