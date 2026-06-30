import type { Metadata } from "next";
import CasesPage from "@/components/sections/CasesPage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Our Work | Catalyr",
  description: "Explore our portfolio of successful digital products and scalable solutions built for forward-thinking teams.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/work/` },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Our Work | Catalyr",
    description: "Explore our portfolio of successful digital products and scalable solutions built for forward-thinking teams.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/work/`,
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
