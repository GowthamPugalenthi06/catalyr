import type { Metadata } from "next";
import CasesPage from "@/components/sections/CasesPage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Our Work | Catalyr",
  description: "Explore our portfolio of successful digital products and scalable solutions built for forward-thinking teams.",
  alternates: { canonical: '/work' },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Our Work | Catalyr",
    description: "Explore our portfolio of successful digital products and scalable solutions built for forward-thinking teams.",
    url: '/work',
    siteName: "Catalyr",
  },
  twitter: {
    card: "summary_large_image",
    site: "@catalyrstud1",
  },
};

export default function WorkRoute() {
  return (
    <>
      <main>
        <CasesPage />
      </main>
      <ContactForm />
    </>
  );
}
