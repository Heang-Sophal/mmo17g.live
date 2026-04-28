class PhoneValidator {
  /// Country phone code patterns
  static const Map<String, Map<String, dynamic>> _countryCodes = {
    'KH': {
      'code': '+855',
      'flag': '🇰🇭',
      'pattern': r'^(?:\+855|0)[0-9]{8,9}$',
      'name': 'Cambodia',
    },
    'TH': {
      'code': '+66',
      'flag': '🇹🇭',
      'pattern': r'^(?:\+66|0)[0-9]{8,9}$',
      'name': 'Thailand',
    },
    'VN': {
      'code': '+84',
      'flag': '🇻🇳',
      'pattern': r'^(?:\+84|0)[0-9]{9,10}$',
      'name': 'Vietnam',
    },
    'LA': {
      'code': '+856',
      'flag': '🇱🇦',
      'pattern': r'^(?:\+856|0)[0-9]{8,9}$',
      'name': 'Laos',
    },
    'MM': {
      'code': '+95',
      'flag': '🇲🇲',
      'pattern': r'^(?:\+95|0)[0-9]{7,9}$',
      'name': 'Myanmar',
    },
    'MY': {
      'code': '+60',
      'flag': '🇲🇾',
      'pattern': r'^(?:\+60|0)[0-9]{8,10}$',
      'name': 'Malaysia',
    },
    'SG': {
      'code': '+65',
      'flag': '🇸🇬',
      'pattern': r'^(?:\+65)[0-9]{8}$',
      'name': 'Singapore',
    },
    'PH': {
      'code': '+63',
      'flag': '🇵🇭',
      'pattern': r'^(?:\+63|0)[0-9]{9,10}$',
      'name': 'Philippines',
    },
    'ID': {
      'code': '+62',
      'flag': '🇮🇩',
      'pattern': r'^(?:\+62|0)[0-9]{8,11}$',
      'name': 'Indonesia',
    },
    'CN': {
      'code': '+86',
      'flag': '🇨🇳',
      'pattern': r'^(?:\+86|0)[0-9]{10,11}$',
      'name': 'China',
    },
    'JP': {
      'code': '+81',
      'flag': '🇯🇵',
      'pattern': r'^(?:\+81|0)[0-9]{9,10}$',
      'name': 'Japan',
    },
    'KR': {
      'code': '+82',
      'flag': '🇰',
      'pattern': r'^(?:\+82|0)[0-9]{9,10}$',
      'name': 'South Korea',
    },
    'IN': {
      'code': '+91',
      'flag': '🇮🇳',
      'pattern': r'^(?:\+91|0)[0-9]{10}$',
      'name': 'India',
    },
    'US': {
      'code': '+1',
      'flag': '🇺🇸',
      'pattern': r'^(?:\+1)[0-9]{10}$',
      'name': 'USA',
    },
    'GB': {
      'code': '+44',
      'flag': '🇬🇧',
      'pattern': r'^(?:\+44|0)[0-9]{10,11}$',
      'name': 'UK',
    },
    'AU': {
      'code': '+61',
      'flag': '🇦🇺',
      'pattern': r'^(?:\+61|0)[0-9]{9}$',
      'name': 'Australia',
    },
    'CA': {
      'code': '+1',
      'flag': '🇨',
      'pattern': r'^(?:\+1)[0-9]{10}$',
      'name': 'Canada',
    },
    'DE': {
      'code': '+49',
      'flag': '🇩',
      'pattern': r'^(?:\+49|0)[0-9]{10,11}$',
      'name': 'Germany',
    },
    'FR': {
      'code': '+33',
      'flag': '🇫🇷',
      'pattern': r'^(?:\+33|0)[0-9]{9}$',
      'name': 'France',
    },
  };

  /// Normalize phone number by removing spaces, dashes, etc.
  static String normalizePhone(String phone) {
    return phone.trim().replaceAll(RegExp(r'[\s\-\(\)]'), '');
  }

  /// Get country info from phone number
  static Map<String, dynamic>? getCountryInfo(String phone) {
    String normalized = normalizePhone(phone);
    if (normalized.isEmpty) return null;

    // Try to match with country code
    for (var entry in _countryCodes.entries) {
      String code = entry.value['code'] as String;
      if (normalized.startsWith(code) ||
          (code == '+1' && normalized.startsWith('1')) ||
          normalized.startsWith(code.replaceFirst('+', '00'))) {
        return entry.value;
      }
    }

    // Check if starts with 0 (local format)
    if (normalized.startsWith('0')) {
      // Default to Cambodia for local numbers
      return _countryCodes['KH'];
    }

    return null;
  }

  /// Get country flag emoji from phone number
  static String? getCountryFlag(String phone) {
    var info = getCountryInfo(phone);
    return info?['flag'] as String?;
  }

  /// Validate phone number
  static bool isValidPhone(String phone) {
    String normalized = normalizePhone(phone);
    if (normalized.isEmpty) return false;

    var info = getCountryInfo(normalized);
    if (info == null) return false;

    String pattern = info['pattern'] as String;
    return RegExp(pattern).hasMatch(normalized);
  }

  /// Get validation error message
  static String? getValidationError(String phone) {
    String normalized = normalizePhone(phone);
    if (normalized.isEmpty) {
      return 'Please enter phone number';
    }

    var info = getCountryInfo(normalized);
    if (info == null) {
      return 'Unknown country code';
    }

    String pattern = info['pattern'] as String;
    if (!RegExp(pattern).hasMatch(normalized)) {
      return 'Invalid ${info['name']} phone number';
    }

    return null;
  }

  /// Format phone number with country code
  static String formatPhone(String phone) {
    String normalized = normalizePhone(phone);
    var info = getCountryInfo(normalized);

    if (info != null && normalized.startsWith('0')) {
      String code = info['code'] as String;
      return '$code${normalized.substring(1)}';
    }

    return normalized;
  }
}
