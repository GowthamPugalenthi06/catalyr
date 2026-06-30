import type { Metadata } from "next";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Catalyr",
  description: "Privacy Policy for Catalyr.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/privacy-policy/` },
};

export default function PrivacyPolicyRoute() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
