import type { Metadata } from "next";
import EdtechPage from "@/components/sections/EdtechPage";

export const metadata: Metadata = {
  title: "Edtech Design Agency | UI/UX Specialists for Edtech Products - Phenomenon Studio",
  description:
    "🟠Edtech Design Agency by Phenomenon Studio: Experts in Edtech website design and UX design for Edtech platforms. We create conversion-focused Edtech designs that enhance usability and accelerate growth.",
  alternates: { canonical: "https://phenomenonstudio.com/edtech/" },
};

export default function EdtechRoute() {
  return (
    <main className="next_block_sticky">
      <EdtechPage />
    </main>
  );
}
