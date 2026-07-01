import type { Metadata } from "next";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Catalyr",
  description: "Privacy Policy for Catalyr.",
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyRoute() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
