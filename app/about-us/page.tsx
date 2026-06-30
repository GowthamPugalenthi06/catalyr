import type { Metadata } from "next";
import AboutPage from "@/components/sections/AboutPage";
import ContactForm from "@/components/sections/ContactForm";
import { copyAboutAssets } from "@/lib/copyAboutAssets";

export const metadata: Metadata = {
  title: "About Us | Product Design and Development Agency - Catalyr",
  description:
    "Learn about Catalyr, a product design and development agency. Discover our team, our values, and how we collaborate to deliver digital products.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/about-us/` },
};

export default function AboutRoute() {
  copyAboutAssets();
  return (
    <>
      <main>
        <AboutPage />
      </main>
      <ContactForm />
    </>
  );
}
