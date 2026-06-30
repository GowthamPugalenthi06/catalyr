import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Catalyr | Top Product Engineering & Digital Transformation Agency",
  description: "Catalyr is an elite product engineering agency delivering custom SaaS, Mobile, Healthcare, EdTech, and enterprise software solutions to scale your business.",
  keywords: ["Product Engineering", "Software Development", "SaaS Development", "Mobile App Development", "Tech Consulting", "Digital Transformation", "Catalyr"],
};
import BestCases from "@/components/sections/BestCases";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import IndustriesTabs from "@/components/sections/IndustriesTabs";
import Team from "@/components/sections/Team";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <BestCases />
        <ProblemsWeSolve />
        <Services />
        <Cases />
        <IndustriesTabs />
        <Team />
        <WhyChooseUs />
        <Testimonials />
        <TechStack />
        <FAQ />
      </main>
      <ContactForm />
    </>
  );
}
