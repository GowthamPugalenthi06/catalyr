import ContactForm from "@/components/sections/ContactForm";
import Worldwide from "@/components/sections/Worldwide";
import IndustriesTabs from "@/components/sections/IndustriesTabs";
import Testimonials from "@/components/sections/Testimonials";

import fs from "fs";
import path from "path";

export default function ContactUsPage() {
  try {
    const dirsToSync = [
      { src: "contact folder/images", dest: "public/images" },
      { src: "contact folder/media", dest: "public/media" }
    ];

    for (const { src, dest } of dirsToSync) {
      const srcDir = path.resolve(src);
      const destDir = path.resolve(dest);
      if (fs.existsSync(srcDir)) {
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        const files = fs.readdirSync(srcDir);
        for (const file of files) {
          const srcFile = path.join(srcDir, file);
          const destFile = path.join(destDir, file);
          if (!fs.existsSync(destFile) && fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
          }
        }
      }
    }
  } catch (err) {
    console.error("Failed to sync assets:", err);
  }

  return (
    <main className="next_block_sticky">
      <ContactForm 
        caption="WE TURN BOLD IDEAS INTO SUCCESSFUL PRODUCTS"
        titleLine1={["Got", "an", "idea?"]}
        titleLine2={["Let's", "talk!"]}
        isHero={true}
      />
      <Worldwide />
      <IndustriesTabs />
      <Testimonials />
    </main>
  );
}
