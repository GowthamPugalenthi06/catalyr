import type { Metadata } from "next";
import FintechPage from "@/components/sections/FintechPage";

export const metadata: Metadata = {
  title: "Fintech Design Agency | UI/UX Specialists for Fintech Products - Phenomenon Studio",
  description:
    "🟠Fintech Design Agency by Phenomenon Studio: Experts in Fintech website design and UX design for Fintech platforms. We create conversion-focused Fintech designs that enhance usability and accelerate growth.",
  alternates: { canonical: "https://phenomenonstudio.com/fintech/" },
};

export default function FintechRoute() {
  return (
    <main className="next_block_sticky">
      <FintechPage />
    </main>
  );
}
