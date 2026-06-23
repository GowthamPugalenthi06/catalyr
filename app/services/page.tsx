import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Phenomenon Studio",
  description: "Discover our design and development services.",
};

export default function ServicesRoute() {
  return (
    <main className="next_block_sticky">
      <ServicesPage />
    </main>
  );
}
