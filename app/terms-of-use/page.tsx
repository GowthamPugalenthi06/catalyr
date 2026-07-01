import type { Metadata } from "next";
import TermsOfUse from "@/components/sections/TermsOfUse";

export const metadata: Metadata = {
  title: "Terms of Use | Catalyr",
  description: "Terms of Use for Catalyr.",
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUseRoute() {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
}
