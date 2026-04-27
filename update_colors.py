import os
import re

replacements = {
    "0xFF0F766E": "0xFFD6A735", # Primary Gold
    "0xFF0B5E55": "0xFF8D6208", # Deep Gold
    "0xFF155E75": "0xFF735F33", # Warm Muted
    "0xFFE6FFFB": "0xFFFFFBF2", # Warm Background
    "0xFFF7F7F2": "0xFFFFFEFA", # Warm Surface
    "0xFF0F172A": "0xFF201607", # Warm Ink
    "0xFFFB923C": "0xFFFFD86A", # Gold Accent
    "0x220F766E": "0x22D6A735", # Primary Gold alpha
    "0x120F172A": "0x12201607", # Warm Ink alpha
    "0x660F766E": "0x66D6A735",
    "0x1A0F766E": "0x1AD6A735",
}

def update_colors():
    updated_files = 0
    for root, dirs, files in os.walk("delivery_app/lib"):
        for file in files:
            if file.endswith(".dart"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    # Case insensitive replace for the hex code
                    new_content = re.sub(old, new, new_content, flags=re.IGNORECASE)
                    
                if new_content != content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    updated_files += 1
                    print(f"Updated {filepath}")
    print(f"Total files updated: {updated_files}")

if __name__ == '__main__':
    update_colors()