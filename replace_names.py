import os

directory = "/home/gowtham/Downloads/next_version"

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        return # Skip binary files
        
    new_content = content
    
    # Specific URLs/socials to maintain valid handles where possible, though they might be broken until updated
    new_content = new_content.replace('phenomenonstudio.com', 'catalyr.com')
    new_content = new_content.replace('phenomenonstudio', 'catalyr')
    new_content = new_content.replace('Phenomenon Studio', 'Catalyr')
    
    # General casing replacements
    new_content = new_content.replace('Phenomenon', 'Catalyr')
    new_content = new_content.replace('phenomenon', 'catalyr')
    new_content = new_content.replace('PHENOMENON', 'CATALYR')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk(directory):
    # Skip node_modules and .git
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.git' in dirs:
        dirs.remove('.git')
    if '.next' in dirs:
        dirs.remove('.next')
        
    for file in files:
        # Ignore this script itself
        if file == 'replace_names.py':
            continue
        if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json', '.md')):
            replace_in_file(os.path.join(root, file))

print("Replacement complete.")
