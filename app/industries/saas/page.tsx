import type { Metadata } from "next";
import SaasPage from "@/components/sections/SaasPage";

export const metadata: Metadata = {
  title: "SaaS Design & Development Agency | Catalyr",
  description: "Expert SaaS website design, UI/UX, and development. We build scalable SaaS platforms that convert users and accelerate growth.",
  alternates: { canonical: '/industries/saas' },
};

export default function SaasRoute() {
  return (
    <SaasPage />
  );
}
