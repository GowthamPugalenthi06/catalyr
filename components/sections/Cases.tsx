import type { ReactNode } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = "https://phenomenonstudio.com";

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
          <picture>
            <source srcSet={`/images/${p.pictureLg}`} media="(min-width: 1440px)" />
            <source srcSet={`/images/${p.pictureLg}`} media="(max-width: 1440px)" />
            <img className="fullw radius-12" src={`/images/${p.pictureMob}`} loading="lazy" decoding="async" alt={p.alt} />
          </picture>
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
            <img className="" src={`/images/${p.flag}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
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
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Featured cases</div>
        <div className="mt-24 mt-16-mob mw1040 title title--xl isview slidetop new-animate trd02 inner-inherit">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Discover</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>how</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>we’re</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>driving</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>change</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>through</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>innovative</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>projects,</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>strong</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>partnerships,</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.8s" }}>and</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.88s" }}>measurable</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.96s" }}>outcomes</span></span></span>
        </div>
        <div className="txt txt--l color--dark mt-24 isview slidetop trd02 mw680" />
        <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
          <CaseCard
            href={`${SVC}/projects/isora-governance-risk-and-compliance-assessment-platform`}
            pictureLg="Case-Preview-5.png.webp"
            pictureMob="Case-Preview-mob.png.webp"
            alt="Isora – optimizing governance, risk & compliance for top institutions - image cover"
            hashtags={["UX Audit", "Product redesign", "Web development", "Team extention"]}
            tagName="SaltyCloud"
            flag="fi_4628635.svg"
            country="Texas, USA"
            techStack="React, Python, AWS"
            timeline="12 months, ongoing"
            results={["2x faster user workflows\n", "50% shorter time-to-market\n", "Nominated for UX Design Award 2024"]}
            title={<AnimatedWords words={["Isora", "–", "optimizing", "governance,", "risk", "&", "compliance", "for", "top", "institutions"]} />}
          />

          <CaseCard
            href={`${SVC}/projects/mywisdom-a-digital-platform-for-safer-more-connected-aging`}
            pictureLg="Case-preview-10.png.webp"
            pictureMob="Case-preview-1.png.webp"
            alt="MyWisdom — a digital platform for safer, more connected aging - image cover"
            hashtags={["Product redesign", "Mobile app development"]}
            tagName="MyWisdom"
            flag="fi_4628635_1.svg"
            country="USA"
            techStack="Flutter, Java, Spring Boot, Python, WebSocket, Computer Vision, AWS, PostgreSQL, Redis, Docker, Swagger, Liquibase"
            timeline="5 month"
            results={["$1.3M raised in pre-seed funding\n", "Strategic partnership with Samsung\n", "UX Design Award nomination"]}
            title={<AnimatedWords words={["MyWisdom", "—", "a", "digital", "platform", "for", "safer,", "more", "connected", "aging"]} />}
          />

          <CaseCard
            href={`${SVC}/projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly`}
            pictureLg="Case-preview-2-2.png.webp"
            pictureMob="Picture-2-2.png.webp"
            alt="KlickEx – frictionless cross-border payments for the Pacific Island communities - image cover"
            hashtags={["UX audit", "Product redesign", "web development"]}
            tagName="Nomupay"
            flag="Clip-path-group.svg"
            country="New Zealand"
            techStack="Next.js, TypeScript, React Redux"
            timeline="6 months"
            results={['+35% "Add Money" conversion rate\n', '+30% "Money Transfer" completion rate\n', "Raised $1M in additional funding within 6 months"]}
            title={
              <>
                <span className="a-word"><span style={{ transitionDelay: "0s" }}>KlickEx</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>–</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>frictionless</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>cross-</span></span>
                <wbr />
                <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>border</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>payments</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>for</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>the</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>Pacific</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>Island</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.8s" }}>communities</span></span>
              </>
            }
          >
            <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
              <div className="top flex auth_wrap v--center h--start gap-16">
                <img className="" src="/images/Case-preview-.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.1428571428571 }} />
                <div className="bio">
                  <div className="txt txt--s gap-0">
                    <p>Izek Lal</p>
                    <span>Country manager</span>
                  </div>
                </div>
              </div>
              <div className="txt mt-30 mt-20-mob txt--l">
                <p>
                  We have seen a significant improvement in terms of mobile friendliness and the general flow of the
                  system. I believe this has contributed significantly to the growth of our business. Many thanks,
                  Phenomenon.
                </p>
              </div>
            </div>
          </CaseCard>
        </div>
        <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
          <a className="btn btn--simple dark arr" href="/cases" target="_self">
            <span><b>Explore All Cases</b></span>
          </a>
        </div>
      </div>
    </section>
  );
}
