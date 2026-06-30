import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Catalyr",
  description: "Discover our design and development services.",
};

export default function ServicesRoute() {
  return (
    <ServicesPage />
  );
}
