import type { Metadata } from "next";
import AppCaseStudyPage from "@/components/sections/AppCaseStudyPage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "App Case Study | Catalyr",
  description: "How we built a working mobile app in 5 days for Disha, an ambitious business founder based in India.",
  alternates: { canonical: '/work/app-case-study' },
};

export default function AppCaseStudyRoute() {
  return (
    <>
      <main>
        <AppCaseStudyPage />
      </main>
      <ContactForm />
    </>
  );
}
