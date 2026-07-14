"use client";

import { useState, type ReactNode } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

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
    href: "/work/app-case-study",
    pictureLg: "/images/downloaded/photo-1555774698-0b77e0d5fac6.jpg",
    pictureMob: "/images/downloaded/photo-1555774698-0b77e0d5fac6.jpg",
    alt: "Working Mobile App in 5 Days",
    hashtags: ["Mobile app", "MVP", "Fast execution"],
    title: ["Working", "mobile", "app", "—", "built", "in", "5", "days"],
    tagName: "Operations",
    flag: "/images/downloaded/in.svg",
    country: "India",
    techStack: "Flutter, Firebase",
    timeline: "5 days",
    results: ["Working iOS/Android app", "Zero cost to client", "100% code ownership"],
    categories: ["mobile-app"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg",
    pictureMob: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg",
    alt: "HRMS SaaS Platform",
    hashtags: ["SaaS", "HRMS", "Web development"],
    title: ["HRMS", "SaaS", "—", "scalable", "human", "resource", "management"],
    tagName: "HRMS",
    flag: "fi_4628635.svg",
    country: "Global",
    techStack: "React, Node.js, PostgreSQL",
    timeline: "6 months",
    results: ["Streamlined onboarding", "Automated payroll", "High scalability"],
    categories: ["web-app"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg",
    pictureMob: "/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg",
    alt: "HRMS Mobile App",
    hashtags: ["Mobile app", "HRMS"],
    title: ["HRMS", "Mobile", "App", "—", "employee", "management", "on", "the", "go"],
    tagName: "HRMS",
    flag: "fi_4628635_1.svg",
    country: "Global",
    techStack: "Flutter, Node.js",
    timeline: "4 months",
    results: ["10k+ downloads", "Seamless tracking", "High user retention"],
    categories: ["mobile-app"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1556742049-0cfed4f6a45d.jpg",
    pictureMob: "/images/downloaded/photo-1556742049-0cfed4f6a45d.jpg",
    alt: "E-Commerce Web",
    hashtags: ["E-Commerce", "Web development"],
    title: ["E-Commerce", "Web", "Platform", "—", "high-conversion", "digital", "storefront"],
    tagName: "E-Commerce",
    flag: "image-3.svg",
    country: "Global",
    resultLabel: "Result",
    results: ["+45% conversion rate", "Integrated payments", "Blazing fast speeds"],
    categories: ["web-app", "website"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1485827404703-89b55fcc595e.jpg",
    pictureMob: "/images/downloaded/photo-1485827404703-89b55fcc595e.jpg",
    alt: "AI Command Center",
    hashtags: ["AI", "RAG", "Lead generation"],
    title: ["AI", "Command", "Center", "—", "RAG", "chat,", "task", "&", "lead", "generation"],
    tagName: "AI",
    flag: "Clip-path-group.svg",
    country: "Global",
    techStack: "Python, LangChain, React",
    timeline: "3 months",
    results: ["Automated task generation", "Intelligent lead scoring", "Context-aware RAG chat"],
    categories: ["web-app"],
  },
  {
    href: "",
    pictureLg: "branding.png",
    pictureMob: "branding.png",
    alt: "Create.in Branding",
    hashtags: ["branding", "Identity"],
    title: ["Create.in", "—", "comprehensive", "branding", "&", "identity", "design"],
    tagName: "Create.in",
    flag: "/images/downloaded/in.svg",
    country: "India",
    resultLabel: "Results",
    results: ["Clearer brand positioning", "Consistent visual system", "Improved market perception"],
    categories: ["branding"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1565299624946-b28f40a0ae38.jpg",
    pictureMob: "/images/downloaded/photo-1565299624946-b28f40a0ae38.jpg",
    alt: "Food Delivery App",
    hashtags: ["Mobile app", "Food Tech"],
    title: ["Food", "Delivery", "App", "—", "minimal", "feature", "food", "ordering"],
    tagName: "Food Tech",
    flag: "/images/downloaded/in.svg",
    country: "India",
    techStack: "Flutter, Firebase",
    timeline: "8 weeks",
    results: ["Streamlined checkout", "Real-time tracking", "High vendor adoption"],
    categories: ["mobile-app"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1449965408869-eaa3f722e40d.jpg",
    pictureMob: "/images/downloaded/photo-1449965408869-eaa3f722e40d.jpg",
    alt: "Journey App",
    hashtags: ["Mobile app", "Logistics"],
    title: ["Journey", "—", "ride", "hailing", "&", "logistics", "app"],
    tagName: "Journey",
    flag: "/images/downloaded/in.svg",
    country: "India",
    techStack: "Flutter, Google Maps API",
    timeline: "3 months",
    results: ["Efficient routing", "Low latency", "High driver retention"],
    categories: ["mobile-app"],
  },
  {
    href: "",
    pictureLg: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg",
    pictureMob: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg",
    alt: "Full Dynamic Site CMS",
    hashtags: ["CMS", "Web development", "Laravel"],
    title: ["Dynamic", "CMS", "Platform", "—", "payments,", "emails,", "and", "dashboards"],
    tagName: "CMS",
    flag: "image-3.svg",
    country: "Global",
    techStack: "Laravel, MySQL, Stripe",
    timeline: "10+ pages",
    results: ["User & Admin Dashboards", "Automated Email Integration", "Seamless Payments"],
    categories: ["website", "web-app"],
  }
];

/* ─── Sub-components ─── */

function CaseCard({ c }: { c: CaseData }) {
  return (
    <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
      <div className="col flex v--start h--start animated-media-wrapper isview fadein">
        <a href={c.href} className="media_wrap radius-12 ov-hidden animated-media">
          <div className="crossfade-wrapper">
            <img className="crossfade-img-1" src={c.pictureLg.startsWith('http') || c.pictureLg.startsWith('/') ? c.pictureLg : `/work/${c.pictureLg}`} loading="lazy" decoding="async" alt={c.alt} />
            <img className="crossfade-img-2" src={c.pictureMob.startsWith('http') || c.pictureMob.startsWith('/') ? c.pictureMob : `/work/${c.pictureMob}`} loading="lazy" decoding="async" alt={c.alt} />
          </div>
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
            <img className="" src={c.flag.startsWith('http') || c.flag.startsWith('/') ? c.flag : `/images/${c.flag}`} alt="Country flag" loading="lazy" decoding="async" style={{ aspectRatio: 1.475 }} />
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
