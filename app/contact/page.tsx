import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Worldwide from "@/components/sections/Worldwide";
import IndustriesTabs from "@/components/sections/IndustriesTabs";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Contact | Catalyr",
  description: "Get in touch with Catalyr to discuss your next digital product.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/contact` },
};

export default function ContactRoute() {
  return (
    <>
      <main>
        <ContactForm 
          caption="WE TURN BOLD IDEAS INTO SUCCESSFUL PRODUCTS"
          titleLine1={["Got", "an", "idea?"]}
          titleLine2={["Let's", "talk!"]}
          isHero={true}
        />
        <Worldwide />
        <IndustriesTabs />
        <Testimonials />
      </main>
    </>
  );
}
