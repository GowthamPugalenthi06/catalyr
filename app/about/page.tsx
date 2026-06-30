import type { Metadata } from "next";
import AboutPage from "@/components/sections/AboutPage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "About | Catalyr",
  description:
    "Learn about Catalyr, a technology and growth partner. Discover our team, our values, and how we collaborate to deliver digital products.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/about` },
};

export default function AboutRoute() {
  return (
    <>
      <main>
        <AboutPage />
      </main>
      <ContactForm />
    </>
  );
}
