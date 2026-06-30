import type { Metadata } from "next";
import HealthcarePage from "@/components/sections/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare Design & Development Agency | Catalyr",
  description: "Expert Healthcare website design, UI/UX, and development. We build HIPAA-compliant digital health products.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/industries/healthcare/` },
};

export default function HealthcareRoute() {
  return (
    <main>
      <HealthcarePage />
    </main>
  );
}
