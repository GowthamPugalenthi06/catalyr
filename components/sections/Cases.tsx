import type { ReactNode } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

type CaseCardProps = {
  href: string;
  pictureLg: string;
  pictureMob: string;
  alt: string;
  hashtags: string[];
  title: ReactNode;
  tagName: string;
  flag: string;
  country: string;
  techStack: string;
  timeline: string;
  results: string[];
  children?: ReactNode;
};

function CaseCard(p: CaseCardProps) {
  return (
    <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
      <div className="col flex v--start h--start animated-media-wrapper isview fadein">
        <a href={p.href} className="media_wrap radius-12 ov-hidden animated-media">
          <div className="crossfade-wrapper">
            <img className="crossfade-img-1" src={p.pictureLg.startsWith('http') || p.pictureLg.startsWith('/') ? p.pictureLg : `/work/${p.pictureLg}`} loading="lazy" decoding="async" alt={p.alt} />
            <img className="crossfade-img-2" src={p.pictureMob.startsWith('http') || p.pictureMob.startsWith('/') ? p.pictureMob : `/work/${p.pictureMob}`} loading="lazy" decoding="async" alt={p.alt} />
          </div>
        </a>
      </div>
      <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
        <div className="txt txt--control-s uppercase fw-600 color--dark-light">
          <div className="scramble isview fadein">
            {p.hashtags.map((h) => `#${h}`).join("                                            ")}
          </div>
        </div>
        <div className="title title--m mt-12 isview slidetop new-animate fullw">{p.title}</div>

        <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
          <span className="tag">{p.tagName}</span>
          <span className="tag">
            <img className="" src={p.flag.startsWith("/") || p.flag.startsWith("http") ? p.flag : `/images/${p.flag}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
            {p.country}
          </span>
        </div>

        <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details isview slidetop">
          <div className="col">
            <div className="txt txt--control-s color--dark-secondary uppercase">Tech Stack</div>
            <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
              <p>{p.techStack}</p>
            </div>
          </div>
          <div className="col">
            <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">Timeline</div>
            <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
              <p>{p.timeline}</p>
            </div>
          </div>
        </div>

        <div className="grid col-1 mt-64 mt-48-mob card_details isview slidetop">
          <div className="col">
            <div className="txt txt--control-s color--dark-secondary uppercase">Results</div>
            <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
              {p.results.map((r, i) => (
                <p key={i}>{r}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="btn--wrap isview slidetop mt-20 mt-20-mob">
          <a href={p.href} className="btn btn--orange hover--dark arr fullw-mob">
            <span><b>Explore</b></span>
          </a>
        </div>

        {p.children}
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className="cases_section pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Our Work</div>
        <div className="mt-24 mt-16-mob mw1040 title title--xl isview slidetop new-animate trd02 inner-inherit">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Products</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>We've</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Built.</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>Results</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>We've</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>Delivered.</span></span>
        </div>
        <div className="txt txt--l color--dark mt-24 isview slidetop trd02 mw680" />
        <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
          <CaseCard
            href=""
            pictureLg="/images/downloaded/photo-1551288049-bebda4e38f71.jpg"
            pictureMob="/images/downloaded/photo-1551288049-bebda4e38f71.jpg"
            alt="HRMS SaaS Platform"
            hashtags={["SaaS", "HRMS", "Web development"]}
            tagName="HRMS"
            flag="fi_4628635.svg"
            country="Global"
            techStack="React, Node.js, PostgreSQL"
            timeline="6 months"
            results={["Streamlined onboarding\n", "Automated payroll\n", "High scalability"]}
            title={<AnimatedWords words={["HRMS", "SaaS", "—", "scalable", "human", "resource", "management"]} />}
          />

          <CaseCard
            href=""
            pictureLg="/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg"
            pictureMob="/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg"
            alt="HRMS Mobile App"
            hashtags={["Mobile app", "HRMS"]}
            tagName="HRMS"
            flag="fi_4628635_1.svg"
            country="Global"
            techStack="React Native, Node.js"
            timeline="4 months"
            results={["10k+ downloads\n", "Seamless tracking\n", "High user retention"]}
            title={<AnimatedWords words={["HRMS", "Mobile", "App", "—", "employee", "management", "on", "the", "go"]} />}
          />

          <CaseCard
            href=""
            pictureLg="/images/downloaded/photo-1556742049-0cfed4f6a45d.jpg"
            pictureMob="/images/downloaded/photo-1556742049-0cfed4f6a45d.jpg"
            alt="E-Commerce Web"
            hashtags={["E-Commerce", "Web development"]}
            tagName="E-Commerce"
            flag="image-3.svg"
            country="Global"
            techStack="Next.js, Tailwind, Stripe"
            timeline="3 months"
            results={["+45% conversion rate\n", "Integrated payments\n", "Blazing fast speeds"]}
            title={<AnimatedWords words={["E-Commerce", "Web", "Platform", "—", "high-conversion", "digital", "storefront"]} />}
          />
        </div>
        <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
          <a className="btn btn--simple dark arr" href="/work" target="_self">
            <span><b>Explore Our Work</b></span>
          </a>
        </div>
      </div>
    </section>
  );
}
