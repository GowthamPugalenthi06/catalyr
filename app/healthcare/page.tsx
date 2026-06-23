import type { Metadata } from "next";
import HealthcarePage from "@/components/sections/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare Design Agency | UI/UX Specialists for Healthcare Products - Phenomenon Studio",
  description:
    "🟠Healthcare Design Agency by Phenomenon Studio: Experts in Healthcare website design and UX design for Healthcare platforms. We create conversion-focused Healthcare designs that enhance usability and accelerate growth.",
  alternates: { canonical: "https://phenomenonstudio.com/healthcare/" },
};

export default function HealthcareRoute() {
  return (
    <main className="next_block_sticky">
      <HealthcarePage />
    </main>
  );
}
