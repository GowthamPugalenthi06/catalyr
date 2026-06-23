const fs = require('fs');
const path = require('path');

function copyFolderRecursive(srcDir, destDir) {
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
          console.log(`Copied: ${entry.name}`);
        } catch (err) {
          console.error(`Failed to copy ${entry.name}:`, err);
        }
      }
    }
  }
}

console.log("Starting copy of SaaS assets...");
copyFolderRecursive(path.join(__dirname, "saas", "images"), path.join(__dirname, "public", "images"));
copyFolderRecursive(path.join(__dirname, "saas", "media"), path.join(__dirname, "public", "media"));
copyFolderRecursive(path.join(__dirname, "saas", "fonts"), path.join(__dirname, "public", "fonts"));
console.log("SaaS assets copied successfully!");
