"use client";

import { useState, type ReactNode } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = "https://phenomenonstudio.com";

/* ─── Filter categories ─── */
const FILTERS = [
  { slug: "all", label: "All projects" },
  { slug: "web-app", label: "Web app" },
  { slug: "mobile-app", label: "Mobile app" },
  { slug: "website", label: "Website" },
  { slug: "branding", label: "Branding" },
] as const;

/* ─── Case data ─── */
type CaseData = {
  href: string;
  pictureLg: string;
  pictureMob: string;
  alt: string;
  hashtags: string[];
  title: string[];
  tagName: string;
  flag: string;
  country: string;
  techStack?: string;
  timeline?: string;
  resultLabel?: string;
  results: string[];
  categories: string[];
  quote?: {
    avatar: string;
    avatarAspect?: number;
    name: string;
    role: string;
    text: string;
  };
};

const CASES: CaseData[] = [
  {
    href: `${SVC}/projects/isora-governance-risk-and-compliance-assessment-platform`,
    pictureLg: "Case-Preview-5.png.webp",
    pictureMob: "Case-Preview-mob.png.webp",
    alt: "Isora – optimizing governance, risk & compliance for top institutions - image cover",
    hashtags: ["UX Audit", "Product redesign", "Web development", "Team extention"],
    title: ["Isora", "–", "optimizing", "governance,", "risk", "&", "compliance", "for", "top", "institutions"],
    tagName: "SaltyCloud",
    flag: "fi_4628635.svg",
    country: "Texas, USA",
    techStack: "React, Python, AWS",
    timeline: "12 months, ongoing",
    results: ["2x faster user workflows", "50% shorter time-to-market", "Nominated for UX Design Award 2024"],
    categories: ["web-app"],
  },
  {
    href: `${SVC}/projects/mywisdom-a-digital-platform-for-safer-more-connected-aging`,
    pictureLg: "Case-preview-10.png.webp",
    pictureMob: "Case-preview-1.png.webp",
    alt: "MyWisdom — a digital platform for safer, more connected aging - image cover",
    hashtags: ["Product redesign", "Mobile app development"],
    title: ["MyWisdom", "—", "a", "digital", "platform", "for", "safer,", "more", "connected", "aging"],
    tagName: "MyWisdom",
    flag: "fi_4628635_1.svg",
    country: "USA",
    techStack: "Flutter, Java, Spring Boot, Python, WebSocket, Computer Vision, AWS, PostgreSQL, Redis, Docker, Swagger, Liquibase",
    timeline: "5 month",
    results: ["$1.3M raised in pre-seed funding", "Strategic partnership with Samsung", "UX Design Award nomination"],
    categories: ["mobile-app"],
  },
  {
    href: `${SVC}/projects/highest-rated-mens-health-clinic-product-redesign-platform-development`,
    pictureLg: "Case-preview-52.png.webp",
    pictureMob: "Case-preview-1-9.png.webp",
    alt: "Highest-rated men's health clinic – product redesign & platform development - image cover",
    hashtags: ["Product redesign", "web development"],
    title: ["Highest-rated", "men's", "health", "clinic", "–", "product", "redesign", "&", "platform", "development"],
    tagName: "NDA",
    flag: "image-3.svg",
    country: "Australia",
    resultLabel: "Result",
    results: ["10,000+ patients in the first month", "2,000+ new paid users", "$86K+ revenue in the first month"],
    categories: ["web-app", "website"],
  },
  {
    href: `${SVC}/projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly`,
    pictureLg: "Case-preview-2-2.png.webp",
    pictureMob: "Picture-2-2.png.webp",
    alt: "KlickEx – frictionless cross-border payments for the Pacific Island communities - image cover",
    hashtags: ["UX audit", "Product redesign", "web development"],
    title: ["KlickEx", "–", "frictionless", "cross-border", "payments", "for", "the", "Pacific", "Island", "communities"],
    tagName: "Nomupay",
    flag: "Clip-path-group.svg",
    country: "New Zealand",
    techStack: "Next.js, TypeScript, React Redux",
    timeline: "6 months",
    results: ['+35% "Add Money" conversion rate', '+30% "Money Transfer" completion rate', "Raised $1M in additional funding within 6 months"],
    categories: ["web-app", "website"],
    quote: {
      avatar: "Case-preview-.webp",
      avatarAspect: 1.1428571428571,
      name: "Izek Lal",
      role: "Country manager",
      text: "We have seen a significant improvement in terms of mobile friendliness and the general flow of the system. I believe this has contributed significantly to the growth of our business. Many thanks, Phenomenon.",
    },
  },
  {
    href: `${SVC}/projects/scrambly-rewarded-discovery-platform-for-games-and-apps-2`,
    pictureLg: "Case-preview-14.png.webp",
    pictureMob: "cover-mobile-4.png.webp",
    alt: "Scrambly – rewarded discovery platform for games and apps - image cover",
    hashtags: ["branding"],
    title: ["Scrambly", "–", "rewarded", "discovery", "platform", "for", "games", "and", "apps"],
    tagName: "Scrambly",
    flag: "image.svg",
    country: "Italy",
    resultLabel: "Results",
    results: ["Clearer brand positioning", "Consistent visual system", "Improved market perception"],
    categories: ["branding"],
    quote: {
      avatar: "Rectangle-34624328-2.png.webp",
      avatarAspect: 1,
      name: "Illia Frantsevskyi",
      role: "CTO & Co-Founder",
      text: "They demonstrated a high level of expertise and efficiency in every phase of the project.",
    },
  },
];

/* ─── Sub-components ─── */

function CaseCard({ c }: { c: CaseData }) {
  return (
    <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
      <div className="col flex v--start h--start animated-media-wrapper isview fadein">
        <a href={c.href} className="media_wrap radius-12 ov-hidden animated-media">
          <picture>
            <source srcSet={`/images/${c.pictureLg}`} media="(min-width: 1440px)" />
            <source srcSet={`/images/${c.pictureLg}`} media="(max-width: 1440px)" />
            <img className="fullw radius-12" src={`/images/${c.pictureMob}`} loading="lazy" decoding="async" alt={c.alt} />
          </picture>
        </a>
      </div>

      <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
        <div className="txt txt--control-s uppercase fw-600 color--dark-light">
          <div className="scramble isview fadein">
            {c.hashtags.map((h) => `#${h}`).join("                                            ")}
          </div>
        </div>

        <div className="title title--m mt-12 isview slidetop new-animate fullw">
          <AnimatedWords words={c.title} />
        </div>

        <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
          <span className="tag">{c.tagName}</span>
          <span className="tag">
            <img className="" src={`/images/${c.flag}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
            {c.country}
          </span>
        </div>

        {/* Tech stack + Timeline row (if present) */}
        {c.techStack && c.timeline && (
          <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details isview slidetop">
            <div className="col">
              <div className="txt txt--control-s color--dark-secondary uppercase">Tech Stack</div>
              <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                <p>{c.techStack}</p>
              </div>
            </div>
            <div className="col">
              <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">Timeline</div>
              <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                <p>{c.timeline}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className={`grid col-1 ${c.techStack ? "mt-64 mt-48-mob" : "mt-64 mt-48-mob"} card_details isview slidetop`}>
          <div className="col">
            <div className="txt txt--control-s color--dark-secondary uppercase">{c.resultLabel || "Results"}</div>
            <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
              {c.results.map((r, i) => (
                <p key={i}>{r}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Explore button */}
        <div className="btn--wrap isview slidetop mt-20 mt-20-mob">
          <a href={c.href} className="btn btn--orange hover--dark arr fullw-mob">
            <span><b>Explore</b></span>
          </a>
        </div>

        {/* Testimonial quote */}
        {c.quote && (
          <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
            <div className="top flex auth_wrap v--center h--start gap-16">
              <img
                className=""
                src={`/images/${c.quote.avatar}`}
                alt="Product Design and Development Agency"
                loading="lazy"
                decoding="async"
                style={c.quote.avatarAspect ? { aspectRatio: c.quote.avatarAspect } : undefined}
              />
              <div className="bio">
                <div className="txt txt--s gap-0">
                  <p>{c.quote.name}</p>
                  <span>{c.quote.role}</span>
                </div>
              </div>
            </div>
            <div className="txt mt-30 mt-20-mob txt--l">
              <p>{c.quote.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCases =
    activeFilter === "all"
      ? CASES
      : CASES.filter((c) => c.categories.includes(activeFilter));

  return (
    <section
      className="cases_section tabs pt-200 pt-100-mob pb-200 pb-100-mob await-action pricing-tabs-wrapper"
      data-tabs=""
    >
      <div className="container">
        <h1 className="title--xxl bg-dark mw1040 mt-4 mt-8-mob isview slidetop new-animate">
          <AnimatedWords words={["Explore", "our", "projects"]} />
        </h1>
      </div>

      <div className="sticky-wrapper pt-48 pt-12-mob">
        <div className="sticky-container pb-12 pt-12 bg--white">
          <div className="container">
            {/* Desktop tabs */}
            <div className="tabs-actions disable-scrollbar isview slidetop">
              {FILTERS.map((f) => (
                <button
                  key={f.slug}
                  type="button"
                  className={`btn btn--white hover--gray active--dark${activeFilter === f.slug ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(f.slug)}
                >
                  <span><b>{f.label}</b></span>
                </button>
              ))}
            </div>

            {/* Mobile select */}
            <div className="cases-select isview slidetop">
              <div className="select-native">
                <select
                  name="type"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  {FILTERS.map((f) => (
                    <option key={f.slug} value={f.slug}>
                      Type: {f.label}
                    </option>
                  ))}
                </select>
                <img src="/images/arrow-down.svg" className="select-native-appearance" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="sticky-wrapper" className="mt-24" />

        <div className="container tabs-container">
          <div className="cases-body mt-16 mt-0-mob">
            <div className="cases-wrap grid gap-80 gap-48-mob bg--white">
              {filteredCases.map((c, i) => (
                <CaseCard key={i} c={c} />
              ))}
            </div>
          </div>
          <div id="cases_sentinel" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
