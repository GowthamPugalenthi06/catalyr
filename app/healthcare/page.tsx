import type { Metadata } from "next";
import HealthcarePage from "@/components/sections/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare Design Agency | UI/UX Specialists for Healthcare Products - Catalyr",
  description:
    "🟠Healthcare Design Agency by Catalyr: Experts in Healthcare website design and UX design for Healthcare platforms. We create conversion-focused Healthcare designs that enhance usability and accelerate growth.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/healthcare/` },
};

export default function HealthcareRoute() {
  return (
    <main>
      <HealthcarePage />
    </main>
  );
}
