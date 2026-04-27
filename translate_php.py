import urllib.request
import urllib.parse
import json
import time
import re
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

def translate_batch(texts, sl="en", tl="km"):
    # Combine texts with a unique delimiter that Google Translate won't mess up
    delimiter = " |===| "
    combined_text = delimiter.join(texts)
    
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sl + "&tl=" + tl + "&dt=t&q=" + urllib.parse.quote(combined_text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        translated_combined = "".join([x[0] for x in data[0] if x[0]])
        # Google Translate might add spaces around the delimiter
        # e.g. " | === | " or something similar, so we use regex split
        parts = re.split(r'\s*\|\s*===\s*\|\s*', translated_combined)
        
        # If the number of parts doesn't match, we fallback to returning originals
        if len(parts) == len(texts):
            return parts
        else:
            print(f"Warning: Batch mismatch. Sent {len(texts)}, received {len(parts)}. Falling back to slow method for this batch.")
            return [translate_single(t, sl, tl) for t in texts]
    except Exception as e:
        print(f"Error in batch: {e}")
        return texts

def translate_single(text, sl="en", tl="km"):
    if not text.strip(): return text
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sl + "&tl=" + tl + "&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        return "".join([x[0] for x in data[0]])
    except Exception as e:
        return text

def main():
    php_file = "database/seeders/translations/en.php"
    out_file = "database/seeders/translations/kh.php"
    
    with open(php_file, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = r"(['\"])(.*?)\1\s*=>\s*(['\"])(.*?)\3\s*,"
    matches = re.findall(pattern, content)
    unique_values = list(set([m[3] for m in matches]))
    
    translated_dict = {}
    
    batch_size = 50
    print(f"Starting translation of {len(unique_values)} unique items in batches of {batch_size}...")
    
    for i in range(0, len(unique_values), batch_size):
        batch = unique_values[i:i+batch_size]
        unescaped_batch = [v.replace("\\'", "'").replace('\\"', '"') for v in batch]
        
        translated_batch = translate_batch(unescaped_batch)
        
        for orig, trans in zip(batch, translated_batch):
            translated_dict[orig] = trans.replace("'", "\\'").replace('"', '\\"')
            
        print(f"Processed {min(i+batch_size, len(unique_values))}/{len(unique_values)}")
        time.sleep(0.5) # small delay between batches
        
    def replacer(match):
        q1, key, q2, val = match.groups()
        new_val = translated_dict.get(val, val)
        return f"{q1}{key}{q1} => '{new_val}',"
        
    new_content = re.sub(pattern, replacer, content)
    new_content = new_content.replace("Language Anglais", "Language Khmer")
    
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("Translation saved to", out_file)

if __name__ == '__main__':
    main()