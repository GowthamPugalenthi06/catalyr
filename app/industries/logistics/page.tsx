import type { Metadata } from "next";
import LogisticsPage from "@/components/sections/LogisticsPage";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software Development | Catalyr",
  description: "Catalyr builds intelligent logistics and supply chain platforms. From real-time tracking dashboards to route optimisation and dispatch management tools.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/industries/logistics/` },
};

export default function LogisticsRoute() {
  return (
    <main>
      <LogisticsPage />
    </main>
  );
}
