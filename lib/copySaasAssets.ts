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

function convertStyleAttr(styleStr: string): string {
  const parts = styleStr.split(';');
  const props: string[] = [];
  for (let part of parts) {
    part = part.trim();
    if (!part || !part.includes(':')) continue;
    const colonIdx = part.indexOf(':');
    const key = part.slice(0, colonIdx).trim();
    const val = part.slice(colonIdx + 1).trim();

    // camelCase key
    const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    // Check if value is numeric
    if (!isNaN(Number(val)) && val !== '') {
      props.push(`${camelKey}: ${val}`);
    } else {
      const escapedVal = val.replace(/'/g, "\\'");
      props.push(`${camelKey}: '${escapedVal}'`);
    }
  }
  return `style={{ ${props.join(', ')} }}`;
}

export function copySaasAssets() {
  console.log("[copySaasAssets] Starting asset copy...");
  
  const srcImages = path.join(process.cwd(), "saas", "images");
  const destImages = path.join(process.cwd(), "public", "images");
  copyFolderRecursive(srcImages, destImages);

  const srcMedia = path.join(process.cwd(), "saas", "media");
  const destMedia = path.join(process.cwd(), "public", "media");
  copyFolderRecursive(srcMedia, destMedia);

  const srcJs = path.join(process.cwd(), "saas", "js");
  const destJs = path.join(process.cwd(), "public", "js");
  copyFolderRecursive(srcJs, destJs);

  const srcCss = path.join(process.cwd(), "saas", "css");
  const destCss = path.join(process.cwd(), "public", "css");
  copyFolderRecursive(srcCss, destCss);

  console.log("[copySaasAssets] Asset copy completed. Starting HTML to JSX conversion...");

  try {
    const htmlPath = path.join(process.cwd(), "saas", "index.html");
    const destJsxPath = path.join(process.cwd(), "components", "sections", "SaasPage.tsx");

    if (fs.existsSync(htmlPath)) {
      let html = fs.readFileSync(htmlPath, "utf-8");

      // Extract main content
      const startTag = '<main class="next_block_sticky">';
      const endTag = '</main>';

      let startIdx = html.indexOf(startTag);
      if (startIdx === -1) {
        startIdx = html.indexOf('<main');
      }
      const endIdx = html.indexOf(endTag, startIdx);

      if (startIdx !== -1 && endIdx !== -1) {
        let mainContent = html.slice(startIdx, endIdx + endTag.length);

        // Pre-replace the special cases of `>` within attributes and text nodes to avoid regex splits
        mainContent = mainContent.replace(/value=">\$100k"/g, 'value="&gt;$100k"');
        mainContent = mainContent.replace(/>>\$100k/g, '>&gt;$100k');

        // 1. Convert class to className
        mainContent = mainContent.replace(/\bclass="/g, 'className="');
        mainContent = mainContent.replace(/\bclass='/g, "className='");

        // 2. Convert inline style to React style object
        mainContent = mainContent.replace(/style="([^"]*)"/g, (match, p1) => {
          return convertStyleAttr(p1);
        });
        mainContent = mainContent.replace(/style='([^']*)'/g, (match, p1) => {
          return convertStyleAttr(p1);
        });

        // 3. Ensure self-closing tags are terminated (including all HTML5 void elements like wbr, base, etc.)
        mainContent = mainContent.replace(/<(img|br|input|source|hr|wbr|area|base|col|embed|link|meta|param|track)([^>]*?)>/g, (match, tag, attrs) => {
          if (attrs.trim().endsWith('/')) {
            return match;
          }
          return `<${tag}${attrs} />`;
        });

        // 4. Convert HTML comments to JSX comments
        mainContent = mainContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

        // 5. Convert standard attributes to camelCase React names
        mainContent = mainContent.replace(/\bautoplay\b/g, 'autoPlay');
        mainContent = mainContent.replace(/\bplaysinline\b/g, 'playsInline');
        mainContent = mainContent.replace(/\bloop\b/g, 'loop');
        mainContent = mainContent.replace(/\bmuted\b/g, 'muted');
        mainContent = mainContent.replace(/\bcontrols\b/g, 'controls');
        mainContent = mainContent.replace(/\bsrcset\b/g, 'srcSet');
        mainContent = mainContent.replace(/\bcrossorigin\b/g, 'crossOrigin');
        mainContent = mainContent.replace(/\breadonly\b/g, 'readOnly');
        mainContent = mainContent.replace(/\bonclick\b/g, 'onClick');
        mainContent = mainContent.replace(/\bframeborder\b/g, 'frameBorder');

        // 5b. Clean empty boolean values (e.g. autoPlay="") for React compatibility
        mainContent = mainContent.replace(/\bautoPlay=""/g, 'autoPlay');
        mainContent = mainContent.replace(/\bplaysInline=""/g, 'playsInline');
        mainContent = mainContent.replace(/\bloop=""/g, 'loop');
        mainContent = mainContent.replace(/\bmuted=""/g, 'muted');
        mainContent = mainContent.replace(/\bcontrols=""/g, 'controls');

        // 6. Convert for attribute to htmlFor in labels
        mainContent = mainContent.replace(/\bfor="/g, 'htmlFor="');
        mainContent = mainContent.replace(/\bfor='/g, "htmlFor='");

        // 7. Convert SVG specific attributes
        mainContent = mainContent.replace(/\bfill-rule\b/g, 'fillRule');
        mainContent = mainContent.replace(/\bclip-rule\b/g, 'clipRule');
        mainContent = mainContent.replace(/\bstroke-width\b/g, 'strokeWidth');
        mainContent = mainContent.replace(/\bstroke-linecap\b/g, 'strokeLinecap');
        mainContent = mainContent.replace(/\bstroke-linejoin\b/g, 'strokeLinejoin');

        // 8. Adjust relative paths to absolute public paths
        mainContent = mainContent.replace(/src="images\//g, 'src="/images/');
        mainContent = mainContent.replace(/src='images\//g, "src='/images/");
        mainContent = mainContent.replace(/src="media\//g, 'src="/media/');
        mainContent = mainContent.replace(/src='media\//g, "src='/media/");

        mainContent = mainContent.replace(/href="images\//g, 'href="/images/');
        mainContent = mainContent.replace(/href='images\//g, "href='/images/");
        mainContent = mainContent.replace(/href="media\//g, 'href="/media/');
        mainContent = mainContent.replace(/href='media\//g, "href='/media/");

        const jsxComponent = `import React from "react";

export default function SaasPage() {
  return (
    ${mainContent}
  );
}
`;
        fs.writeFileSync(destJsxPath, jsxComponent, "utf-8");
        console.log("[copySaasAssets] JSX component converted and written to SaasPage.tsx!");
      } else {
        console.error("[copySaasAssets] Could not locate <main> tags in index.html");
      }
    }
  } catch (err) {
    console.error("[copySaasAssets] Error during JSX conversion:", err);
  }
}
