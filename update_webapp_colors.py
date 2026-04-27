import os
import re

replacements = {
    r"#8b5cf6": "#D6A735",
    r"#8B5CF6": "#D6A735",
    r"#7c3aed": "#8D6208",
    r"#7C3AED": "#8D6208",
    r"#6366f1": "#735F33",
    r"#A78BFA": "#FFD86A",
    r"#a78bfa": "#FFD86A",
    r"#C4B5FD": "#FFE8A7",
    r"#c4b5fd": "#FFE8A7",
    r"#DDD6FE": "#FFFBF2",
    r"#ddd6fe": "#FFFBF2",
}

def update_colors():
    updated_files = 0
    for root, dirs, files in os.walk("resources/src"):
        for file in files:
            if file.endswith((".vue", ".js", ".scss", ".css")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    new_content = content
                    for old, new in replacements.items():
                        new_content = re.sub(old, new, new_content)
                        
                    if new_content != content:
                        with open(filepath, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        updated_files += 1
                        print(f"Updated {filepath}")
                except Exception as e:
                    pass
    print(f"Total files updated: {updated_files}")

if __name__ == '__main__':
    update_colors()