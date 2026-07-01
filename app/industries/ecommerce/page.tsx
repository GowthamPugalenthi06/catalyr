import type { Metadata } from "next";
import EcommercePage from "@/components/sections/EcommercePage";

export const metadata: Metadata = {
  title: "E-Commerce Development Agency | Catalyr",
  description: "Build high-converting e-commerce platforms with Catalyr. We design and develop scalable online stores that drive sales, optimize UX, and maximize your ROI.",
  alternates: { canonical: '/industries/ecommerce' },
};

export default function EcommerceRoute() {
  return (
    <main>
      <EcommercePage />
    </main>
  );
}
