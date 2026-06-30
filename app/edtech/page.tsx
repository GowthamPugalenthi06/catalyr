import type { Metadata } from "next";
import EdtechPage from "@/components/sections/EdtechPage";

export const metadata: Metadata = {
  title: "Edtech Design Agency | UI/UX Specialists for Edtech Products - Catalyr",
  description:
    "🟠Edtech Design Agency by Catalyr: Experts in Edtech website design and UX design for Edtech platforms. We create conversion-focused Edtech designs that enhance usability and accelerate growth.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/edtech/` },
};

export default function EdtechRoute() {
  return (
    <main>
      <EdtechPage />
    </main>
  );
}
