import shutil
import os

source_dir = "contact folder/images"
dest_dir = "public/images"

for file_name in os.listdir(source_dir):
    if "Frame" in file_name:
        src = os.path.join(source_dir, file_name)
        dst = os.path.join(dest_dir, file_name)
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
