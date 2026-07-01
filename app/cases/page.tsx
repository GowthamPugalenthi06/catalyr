import type { Metadata } from "next";
import CasesPage from "@/components/sections/CasesPage";
import ContactForm from "@/components/sections/ContactForm";

import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title:
    "Product design & development company specializing in data-driven solutions and business-centric digital products. - Projects",
  description:
    "We use fact- and research-based methodologies whilst partnering closely with clients to deliver their end-goal vision.",
  alternates: { canonical: '/work' },
  openGraph: {
    locale: "en_US",
    type: "article",
    title:
      "Product design & development company specializing in data-driven solutions and business-centric digital products. - Projects",
    description:
      "We use fact- and research-based methodologies whilst partnering closely with clients to deliver their end-goal vision.",
    url: '/work',
    siteName: "Catalyr",
  },
  twitter: {
    card: "summary_large_image",
    site: "@catalyrstud1",
  },
};

function copyMissingImages() {
  const srcDir = path.join(process.cwd(), "cases", "images");
  const destDir = path.join(process.cwd(), "public", "images");

  const files = [
    "Case-preview-52.png.webp",
    "Case-preview-14.png.webp",
    "Rectangle-34624328-2.png.webp",
    "cover-mobile-4.png.webp",
    "Case-preview-1-9.png.webp",
    "arrow-down.svg",
    "image-3.svg",
    "image.svg"
  ];

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  files.forEach((f) => {
    const srcPath = path.join(srcDir, f);
    const destPath = path.join(destDir, f);
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Successfully copied ${f} to public/images/`);
      } catch (err) {
        console.error(`Failed to copy ${f}:`, err);
      }
    }
  });
}

export default function CasesRoute() {
  copyMissingImages();
  return (
    <>
      <main>
        <CasesPage />
      </main>
      <ContactForm />
    </>
  );
}
