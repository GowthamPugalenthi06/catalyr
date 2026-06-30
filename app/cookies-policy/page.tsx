import type { Metadata } from "next";
import CookiesPolicy from "@/components/sections/CookiesPolicy";

export const metadata: Metadata = {
  title: "Cookies Policy | Catalyr",
  description: "Cookies Policy for Catalyr.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/cookies-policy/` },
};

export default function CookiesPolicyRoute() {
  return (
    <main>
      <CookiesPolicy />
    </main>
  );
}
