import Hero from "@/components/sections/Hero";
import BestCases from "@/components/sections/BestCases";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import IndustriesTabs from "@/components/sections/IndustriesTabs";
import Team from "@/components/sections/Team";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Awards from "@/components/sections/Awards";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="next_block_sticky">
      <Hero />
      <BestCases />
      <ProblemsWeSolve />
      <Services />
      <Cases />
      <IndustriesTabs />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <Awards />
      <ContactForm />
    </main>
  );
}
