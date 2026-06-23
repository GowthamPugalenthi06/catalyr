import fs from "fs";
import path from "path";

function copyFolderRecursive(srcDir: string, destDir: string) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        try {
          fs.copyFileSync(srcPath, destPath);
        } catch (err) {
          console.error(`Failed to copy ${entry.name}:`, err);
        }
      }
    }
  }
}

export function copyAboutAssets() {
  const srcImages = path.join(process.cwd(), "about", "images");
  const destImages = path.join(process.cwd(), "public", "images");
  copyFolderRecursive(srcImages, destImages);

  const srcMedia = path.join(process.cwd(), "about", "media");
  const destMedia = path.join(process.cwd(), "public", "media");
  copyFolderRecursive(srcMedia, destMedia);

  const srcJs = path.join(process.cwd(), "about", "js");
  const destJs = path.join(process.cwd(), "public", "js");
  copyFolderRecursive(srcJs, destJs);

  const srcCss = path.join(process.cwd(), "about", "css");
  const destCss = path.join(process.cwd(), "public", "css");
  copyFolderRecursive(srcCss, destCss);
}
