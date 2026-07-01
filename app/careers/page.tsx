import type { Metadata } from "next";
import CareerPage from "@/components/sections/CareerPage";

export const metadata: Metadata = {
  title: "Careers | Catalyr",
  description: "Join the Catalyr team and help build the future of digital products.",
  alternates: { canonical: '/careers' },
};

export default function CareersRoute() {
  return (
    <main>
      <CareerPage />
    </main>
  );
}
