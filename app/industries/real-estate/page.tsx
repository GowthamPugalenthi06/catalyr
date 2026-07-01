import type { Metadata } from "next";
import RealEstatePage from "@/components/sections/RealEstatePage";

export const metadata: Metadata = {
  title: "Real Estate Technology Development | Catalyr",
  description: "Modern property platforms built by Catalyr. We develop intelligent real estate solutions — from property search portals to CRM integrations and listing management systems.",
  alternates: { canonical: '/industries/real-estate' },
};

export default function RealEstateRoute() {
  return (
    <main>
      <RealEstatePage />
    </main>
  );
}
