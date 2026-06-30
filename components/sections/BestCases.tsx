import { Fragment } from "react";

type Capability = {
  logo: string;
  name: string;
  desc: string;
  highlight: string;
  tag1: string;
  tag2: string;
};

const CATALYR_CAPABILITIES: Capability[] = [
  { logo: "/images/downloaded/monitor-light.svg?color=%23000000", name: "Web Applications", desc: "Building scalable, highly responsive web applications using modern frameworks like React and Next.js.", highlight: "Scalable", tag1: "Full-Stack", tag2: "React" },
  { logo: "/images/downloaded/device-mobile-light.svg?color=%23000000", name: "Mobile App Development", desc: "Crafting intuitive and performant cross-platform mobile experiences for both iOS and Android.", highlight: "Performant", tag1: "Mobile", tag2: "React Native" },
  { logo: "/images/downloaded/palette-light.svg?color=%23000000", name: "UI/UX Design", desc: "Designing user-centric, visually stunning interfaces that enhance user engagement and satisfaction.", highlight: "Engaging", tag1: "Design", tag2: "Figma" },
  { logo: "/images/downloaded/cloud-light.svg?color=%23000000", name: "Cloud Infrastructure", desc: "Deploying and managing robust cloud architecture for maximum uptime, security, and scalability.", highlight: "Reliable", tag1: "DevOps", tag2: "AWS" },
  { logo: "/images/downloaded/buildings-light.svg?color=%23000000", name: "Enterprise Software", desc: "Developing complex, scalable enterprise solutions that streamline internal operations and workflows.", highlight: "Robust", tag1: "B2B", tag2: "Next.js" },
  { logo: "/images/downloaded/shopping-cart-light.svg?color=%23000000", name: "E-Commerce Solutions", desc: "Building high-conversion digital storefronts optimized for speed, SEO, and seamless transactions.", highlight: "Fast", tag1: "Commerce", tag2: "Headless" },
  { logo: "/images/downloaded/robot-light.svg?color=%23000000", name: "AI & Machine Learning", desc: "Integrating intelligent agents and workflows to automate complex processes and drive innovation.", highlight: "Smart", tag1: "AI", tag2: "Agentic" },
  { logo: "/images/downloaded/plugs-light.svg?color=%23000000", name: "API Development", desc: "Creating secure, scalable, and well-documented APIs to power and connect your digital ecosystem.", highlight: "Secure", tag1: "Backend", tag2: "Node.js" },
];

function Divider({ mob }: { mob: boolean }) {
  return (
    <div className={`vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein${mob ? " mob-visible" : ""}`}>
      <span /><span /><span /><span />
    </div>
  );
}

export default function BestCases() {
  return (
    <section className="best_cases pt-200 pt-64-mob">
      <div className="container size-lg ov-hidden">
        <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble">
          The Catalyr Advantage
        </div>
        <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02 mb-40 mb-32-mob">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Catalyr's</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.08s" }}>core</span></span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>capabilities</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>and</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>expertise</span></span>
        </div>
        <div className="grid col-4 cols_wrap clip_all_sides isview slidetop">
          {CATALYR_CAPABILITIES.map((w, i) => (
            <Fragment key={w.name}>
              <Divider mob={i % 4 !== 0} />
              <div className="col p-24 bg--white flex v--center h--center">
                <img className="" src={w.logo.startsWith("http") || w.logo.startsWith("/") ? w.logo : `/images/${w.logo}`} alt="Catalyr Capability" loading="lazy" decoding="async" style={{ width: "120px", height: "120px" }} />
                <div className="inner-wrapper flex fd--column">
                  <div className="inner radius-8 p-32 pl-16-mob pt-24-mob pb-24-mob flex fd--column clipped-right-hover">
                    <div className="color--white title title--xs">{w.name}</div>
                    <div className="txt txt--s mt-6 color--white-light">
                      <p>{w.desc}</p>
                    </div>
                    <div className="txt mt-auto pt-24">
                      <div className="title title--l color--white">{w.highlight}</div>
                    </div>
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">{w.tag1}</span>
                      <span className="tag">{w.tag2}</span>
                    </div>
                  </div>
                </div>
                <div className="mob-visible mobile_link" />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
