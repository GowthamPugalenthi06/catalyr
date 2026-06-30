import type { Metadata } from "next";
import SaasPage from "@/components/sections/SaasPage";
import { copySaasAssets } from "@/lib/copySaasAssets";

export const metadata: Metadata = {
  title: "SaaS Design Agency | UI/UX Specialists for SaaS Products - Catalyr",
  description:
    "🟠SaaS Design Agency by Catalyr: Experts in SaaS website design and UX design for SaaS platforms. We create conversion-focused SaaS designs that enhance usability and accelerate growth.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/saas/` },
};

export default function SaasRoute() {
  copySaasAssets();
  return (
    <SaasPage />
  );
}
