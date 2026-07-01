import type { Metadata } from "next";
import CookiesPolicy from "@/components/sections/CookiesPolicy";

export const metadata: Metadata = {
  title: "Cookies Policy | Catalyr",
  description: "Cookies Policy for Catalyr.",
  alternates: { canonical: '/cookies-policy' },
};

export default function CookiesPolicyRoute() {
  return (
    <main>
      <CookiesPolicy />
    </main>
  );
}
