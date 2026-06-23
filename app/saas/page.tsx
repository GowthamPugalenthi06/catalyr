import type { Metadata } from "next";
import SaasPage from "@/components/sections/SaasPage";
import { copySaasAssets } from "@/lib/copySaasAssets";

export const metadata: Metadata = {
  title: "SaaS Design Agency | UI/UX Specialists for SaaS Products - Phenomenon Studio",
  description:
    "🟠SaaS Design Agency by Phenomenon Studio: Experts in SaaS website design and UX design for SaaS platforms. We create conversion-focused SaaS designs that enhance usability and accelerate growth.",
  alternates: { canonical: "https://phenomenonstudio.com/saas/" },
};

export default function SaasRoute() {
  copySaasAssets();
  return (
    <main className="next_block_sticky">
      <SaasPage />
    </main>
  );
}
