import AnimatedWords from "@/components/AnimatedWords";

const SVC = "https://phenomenonstudio.com";

type Pane = {
  id: number;
  video: string;
  titleWords: string[];
  challenges: string[];
  solutions: string[];
  href: string;
};

const PANES: Pane[] = [
  {
    id: 1,
    video: "/media/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
    titleWords: ["Scalable", "platforms", "for", "growth-focused", "teams"],
    challenges: [
      "High churn from poor and fragmented UX\n",
      "Scaling product features without compromising speed\n",
      "Converting freemium users into paying subscribers",
    ],
    solutions: [
      "Streamlined flows to improve activation and retention\n",
      "Modular UX and design systems to scale features faster\n",
      "Clean billing and plan management UX to improve conversion",
    ],
    href: `/saas`,
  },
  {
    id: 2,
    video: "/media/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
    titleWords: ["HIPAA-compliant", "design", "and", "development", "for", "health", "tech", "products"],
    challenges: [
      "UX complexity in health tracking, patient records, and telehealth\n",
      "Data privacy and HIPAA compliance\n",
      "Building trust with patients and practitioners",
    ],
    solutions: [
      "Patient-first UX that simplifies complex workflows\n",
      "Secure infrastructure aligned with regulatory standards\n",
      "Clean, professional Ul that builds user trust",
    ],
    href: `/healthcare`,
  },
  {
    id: 3,
    video: "/media/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
    titleWords: ["Digital", "learning", "platforms", "that", "engage", "and", "scale"],
    challenges: [
      "Low engagement in self-paced learning environments\n",
      "Accessibility compliance (ADA, WCAG)\n",
      "Performance under high concurrent user loads",
    ],
    solutions: [
      "Gamified UX to keep learners motivated\n",
      "Adaptive Ul for different learning needs and devices\n",
      "Cloud-based, scalable architecture for education at scale",
    ],
    href: `/edtech`,
  },
  {
    id: 4,
    video: "/media/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
    titleWords: ["Secure,", "compliant", "digital", "products", "for", "modern", "finance"],
    challenges: [
      "KYC, AML, and global compliance requirements\n",
      "Drop-offs during complex onboarding and verification flows\n",
      "Real-time integrations with payment and exchange systems",
    ],
    solutions: [
      "Frictionless onboarding and verification UX\n",
      "Secure Ul for transactions and money movement\n",
      "API-driven architecture built for performance and scale",
    ],
    href: `/fintech`,
  },
];

const TABS = [
  { id: 1, label: "SaaS" },
  { id: 2, label: "Healthcare" },
  { id: 3, label: "EdTech" },
  { id: 4, label: "FinTech" },
];

export default function IndustriesTabs() {
  return (
    <section className="tabs pb-200 pb-100-mob pt-100 pt-64-mob  bg--white relative await-action industries_new" data-tabs="">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          <h2>Key Industries</h2>
        </div>
        <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Our</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>areas</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>of</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.24s" }}>expertise</span></span></span>
        </div>
      </div>
      <div className="container">
        <div className="tabs-actions disable-scrollbar mt-100 mt-40-mob isview slidetop">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`btn btn--white hover--gray active--dark${t.id === 1 ? " is-active" : ""}`}
              data-tabs-link={t.id}
            >
              <span><b>{t.label}</b></span>
            </button>
          ))}
        </div>
      </div>
      <div className="separator section-divider mt-24 mb-24" />
      <div className="container">
        <div className="tabs-holder isview slidetop" data-tabs-holder="">
          {PANES.map((pane) => (
            <div
              key={pane.id}
              className={`industries_new_items tabs-pane${pane.id === 1 ? " is-active" : ""}`}
              data-tabs-pane={pane.id}
            >
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col animated-media-wrapper isview fadein">
                    <video
                      src={pane.video}
                      preload="none"
                      loading="lazy"
                      className="fullw radius-12 animated-media"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster=""
                    />
                </div>
                <div className="col">
                  <div className="title title--m isview slidetop new-animate inner-inherit">
                    <AnimatedWords words={pane.titleWords} />
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">Challenges:</div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          {pane.challenges.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">How we solve them:</div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          {pane.solutions.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a className="btn btn--orange hover--dark arr fullw-mob" href={pane.href} target="_self">
                      <span><b>Explore</b></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
