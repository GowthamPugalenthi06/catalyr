import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import AnimatedWords from "@/components/AnimatedWords";

export const metadata: Metadata = {
  title: "Partner Program | Catalyr",
  description: "Join the Catalyr partner network. We collaborate with agencies, consultants, and technology platforms to deliver exceptional digital products.",
  alternates: { canonical: '/partners' },
};

const PARTNER_TYPES = [
  {
    title: "Agency Partners",
    desc: "Expand your service offerings without overhead. We provide white-labeled or co-branded UX/UI design and full-stack development for marketing, PR, and creative agencies.",
    num: "01"
  },
  {
    title: "Technology Partners",
    desc: "Integrate your platforms seamlessly. We work with specialized SaaS, CRM, and cloud providers to ensure flawless technical implementation for shared clients.",
    num: "02"
  },
  {
    title: "Referral Network",
    desc: "Introduce your network to a reliable technology partner. We offer generous referral structures for consultants and advisors who connect us with growing brands.",
    num: "03"
  }
];

const BENEFITS = [
  { title: "Top-Tier Talent", desc: "Access senior designers and engineers without the recruitment overhead." },
  { title: "Absolute Transparency", desc: "Clear communication, predictable timelines, and honest pricing." },
  { title: "White-Label Ready", desc: "We can operate as a seamless extension of your own internal team." },
  { title: "Mutual Growth", desc: "Generous revenue sharing and reciprocal referrals for our trusted partners." },
];

export default function PartnersRoute() {
  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="pt-200 pb-100 bg--white pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble">
            <h1>Partner Program</h1>
          </div>
          <div className="title title--xxl color--dark isview slidetop new-animate trd02">
            <AnimatedWords words={["Grow", "Together."]} />
            <br />
            <AnimatedWords words={["Win", "Together."]} />
          </div>
          <div className="txt txt--xl mt-40 mw800 isview slidetop">
            <p>
              We partner with forward-thinking agencies, enterprise consultancies, and specialized technology platforms to provide end-to-end design and engineering solutions. When your clients need complex, high-performing digital products, Catalyr is your dedicated execution arm.
            </p>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="pt-200 pb-200 pt-100-mob pb-100-mob bg--dark color--white clipped-bottom clipped-top radius-80 radius-32-mob relative z-2">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 mb-64 mb-40-mob isview slidetop scramble">
            Partnership Models
          </div>
          <div className="grid col-3 col-1-mob gap-40">
            {PARTNER_TYPES.map((pt, i) => (
              <div key={i} className="col p-40 bg--black radius-16 isview slidetop border-all" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="title title--xxl color--white-light opacity-30 mb-32">{pt.num}</div>
                <div className="title title--l mb-16 color--white">{pt.title}</div>
                <div className="txt txt--m color--white-secondary">
                  {pt.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-200 pb-200 pt-100-mob pb-100-mob bg--white z-1 relative">
        <div className="container">
           <div className="grid col-2 col-1-mob gap-80 gap-40-mob">
             <div className="col flex fd--column v--start">
               <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24 isview slidetop scramble">
                 Why Partner With Us
               </div>
               <div className="title title--xl color--dark isview slidetop new-animate mw480">
                 <AnimatedWords words={["The", "unfair", "advantage", "for", "your", "business."]} />
               </div>
               <div className="btn-wrap mt-64 mt-32-mob isview slidetop">
                 <a href="/contact" className="btn btn--orange arr hover--dark">
                   <span><b>Become a Partner</b></span>
                 </a>
               </div>
             </div>
             <div className="col grid col-1 gap-0 border-top">
               {BENEFITS.map((b, i) => (
                 <div key={i} className="col isview slidetop pt-32 pb-32 border-bottom" style={{ transitionDelay: `${i * 0.1}s` }}>
                   <div className="title title--m mb-12 color--dark">{b.title}</div>
                   <div className="txt txt--m color--dark-secondary">{b.desc}</div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>
      </main>
      <ContactForm 
        caption="BECOME A PARTNER"
        titleLine1={["Let's", "build"]}
        titleLine2={["great", "products"]}
      />
    </>
  );
}
