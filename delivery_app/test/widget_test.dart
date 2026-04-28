import 'package:delivery_app/main.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUp(() {
    SharedPreferences.setMockInitialValues({});
  });

  testWidgets('shows delivery app sign-in flow', (WidgetTester tester) async {
    await tester.pumpWidget(const DeliveryApp());

    expect(find.text('17G Delivery'), findsOneWidget);

    await tester.pumpAndSettle();

    expect(find.text('ចូលគណនី'), findsOneWidget);
    expect(find.text('ចូលគណនីដើម្បីគ្រប់គ្រងការដឹកជញ្ជូន'), findsOneWidget);
  });
}
