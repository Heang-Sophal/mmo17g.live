import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class LegalSupportLinks extends StatelessWidget {
  const LegalSupportLinks({
    super.key,
    this.compact = false,
    this.foregroundColor,
  });

  static final Uri supportUrl = Uri.parse('https://mmo17g.store/support');
  static final Uri accessUrl = Uri.parse(
    'https://mmo17g.store/seller-app-access',
  );
  static final Uri privacyUrl = Uri.parse(
    'https://mmo17g.store/privacy-policy',
  );
  static final Uri contactEmail = Uri(
    scheme: 'mailto',
    path: 'support@mmo17g.store',
    queryParameters: {'subject': '17G Seller Support'},
  );

  final bool compact;
  final Color? foregroundColor;

  @override
  Widget build(BuildContext context) {
    final color = foregroundColor ?? Theme.of(context).colorScheme.primary;
    final spacing = compact ? 0.0 : 8.0;

    return Wrap(
      alignment: WrapAlignment.center,
      crossAxisAlignment: WrapCrossAlignment.center,
      spacing: spacing,
      runSpacing: 0,
      children: [
        _LinkButton(
          icon: Icons.verified_user_outlined,
          label: 'Access',
          uri: accessUrl,
          color: color,
          compact: compact,
        ),
        _LinkButton(
          icon: Icons.privacy_tip_outlined,
          label: 'Privacy Policy',
          uri: privacyUrl,
          color: color,
          compact: compact,
        ),
        _LinkButton(
          icon: Icons.support_agent_outlined,
          label: 'Support',
          uri: supportUrl,
          color: color,
          compact: compact,
        ),
        _LinkButton(
          icon: Icons.email_outlined,
          label: 'Contact',
          uri: contactEmail,
          color: color,
          compact: compact,
        ),
      ],
    );
  }
}

class LegalSupportTileGroup extends StatelessWidget {
  const LegalSupportTileGroup({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _SupportTile(
          icon: Icons.verified_user_outlined,
          title: 'Seller App Access',
          subtitle: 'Business model, account eligibility, and reviewer access',
          uri: LegalSupportLinks.accessUrl,
        ),
        const Divider(height: 1),
        _SupportTile(
          icon: Icons.privacy_tip_outlined,
          title: 'Privacy Policy',
          subtitle: 'How account, delivery, and device data is handled',
          uri: LegalSupportLinks.privacyUrl,
        ),
        const Divider(height: 1),
        _SupportTile(
          icon: Icons.support_agent_outlined,
          title: 'Support',
          subtitle: 'Get help with your account or store access',
          uri: LegalSupportLinks.supportUrl,
        ),
        const Divider(height: 1),
        _SupportTile(
          icon: Icons.email_outlined,
          title: 'Developer Contact',
          subtitle: 'support@mmo17g.store',
          uri: LegalSupportLinks.contactEmail,
        ),
      ],
    );
  }
}

class _LinkButton extends StatelessWidget {
  const _LinkButton({
    required this.icon,
    required this.label,
    required this.uri,
    required this.color,
    required this.compact,
  });

  final IconData icon;
  final String label;
  final Uri uri;
  final Color color;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: () => _openUri(context, uri),
      icon: Icon(icon, size: compact ? 16 : 18),
      label: Text(label),
      style: TextButton.styleFrom(
        foregroundColor: color,
        textStyle: TextStyle(
          fontSize: compact ? 12 : 13,
          fontWeight: FontWeight.w700,
        ),
        padding: EdgeInsets.symmetric(
          horizontal: compact ? 6 : 10,
          vertical: compact ? 4 : 8,
        ),
      ),
    );
  }
}

class _SupportTile extends StatelessWidget {
  const _SupportTile({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.uri,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final Uri uri;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.teal.withValues(alpha: 0.1),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Icon(icon, color: Colors.teal),
      ),
      title: Text(title),
      subtitle: Text(subtitle),
      trailing: const Icon(Icons.open_in_new_rounded),
      onTap: () => _openUri(context, uri),
    );
  }
}

Future<void> _openUri(BuildContext context, Uri uri) async {
  final messenger = ScaffoldMessenger.maybeOf(context);
  final ok = await launchUrl(uri, mode: LaunchMode.externalApplication);

  if (!ok) {
    messenger?.showSnackBar(
      SnackBar(content: Text('Could not open ${uri.toString()}')),
    );
  }
}
