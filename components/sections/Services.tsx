import { Fragment } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = "https://phenomenonstudio.com";

type Card = { href: string; num: string; video: string; title: string; desc: string };
type Slide = { id: string; row: number; titleWords: string[]; cards: Card[] };

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    row: 1,
    titleWords: ["Launch", "your", "product", "&", "win", "early", "traction"],
    cards: [
      { href: `${SVC}/service/design-prototype/`, num: "01", video: "/media/Design-prototype.mp4", title: "Design prototype", desc: "Test product ideas fast with clickable user journeys and visual flows." },
      { href: `${SVC}/service/product-discovery/`, num: "02", video: "/media/Product-discovery.mp4", title: "Product discovery", desc: "Map out key features, user flows, and architecture to align your team and reduce risks." },
      { href: `${SVC}/service/rapid-mvp-development/`, num: "03", video: "/media/compressed-video-2.mp4", title: "Rapid mvp development", desc: "Get your MVP 50% faster with lean sprints and pre-built frameworks." },
      { href: `${SVC}/service/custom-mvp-software-development/`, num: "04", video: "/media/Custom-MVP-development.mp4", title: "Custom mvp development", desc: "Expand your prototype into a fully functional, production-ready product." },
    ],
  },
  {
    id: "slide-2",
    row: 2,
    titleWords: ["Your", "product", "outgrew", "its", "first", "version"],
    cards: [
      { href: `${SVC}/service/ux-design-audit/`, num: "01", video: "/media/UX-audit.mp4", title: "Ux audit", desc: "Identify usability bottlenecks, improve engagement, and optimize for conversions." },
      { href: `${SVC}/service/product-redesign/`, num: "02", video: "/media/cab5f51f-a135-4777-8895-398644445757.mp4", title: "Product redesign", desc: "Upgrade legacy interfaces with scalable, business-driven UX and Ul from a top-notch design agency." },
      { href: `${SVC}/service/web-development-services/`, num: "03", video: "/media/tinyvid_optimized_4_273c0b39593e094d9f8cc0a654963dd3.mp4", title: "Web development", desc: "Custom web solutions, from complex platforms to interactive dashboards and scalable SaaS products, designed to boost functionality and drive growth." },
      { href: `${SVC}/service/mobile-app-development-services/`, num: "04", video: "/media/tinyvid_optimized_3_991b1abdaf86fca5400630dcdf446984.mp4", title: "Mobile app development", desc: "End-to-end development of mobile applications for iOS and Android." },
    ],
  },
  {
    id: "slide-3",
    row: 3,
    titleWords: ["Your", "brand", "fell", "behind", "your", "business"],
    cards: [
      { href: `${SVC}/service/branding-and-identity-services/`, num: "01", video: "/media/Branding.mp4", title: "Branding", desc: "Develop a brand that resonates — visually, emotionally, and strategically." },
      { href: `${SVC}/service/website-design-services/`, num: "02", video: "/media/tinyvid_optimized_2_e4513defad5093e0e45118e3a5a4b727.mp4", title: "Website design services", desc: "Custom website layouts and UX/UI strategies to improve engagement and conversions." },
      { href: `${SVC}/service/website-redesign-services/`, num: "03", video: "/media/Website-redesign.mp4", title: "Website redesign", desc: "Modernize your web presence with a digital product design agency that drives engagement and brand authority." },
      { href: `${SVC}/service/website-development-agency/`, num: "04", video: "/media/Website-development.mp4", title: "Website development", desc: "Launch a fast, scalable site that converts and supports product growth." },
    ],
  },
  {
    id: "slide-4",
    row: 4,
    titleWords: ["Senior", "hands,", "without", "the", "hiring", "cycle"],
    cards: [
      { href: `${SVC}/service/team-extension/`, num: "01", video: "/media/Team-extension.mp4", title: "Team extension", desc: "Instantly scale with dedicated designers and developers ready to start." },
      { href: `${SVC}/service/dedicated-software-development-team/`, num: "02", video: "/media/Dedicated-team.mp4", title: "Dedicated team", desc: "Access a team of experts to fuel your product’s growth." },
    ],
  },
];

function ServiceDivider({ mob }: { mob: boolean }) {
  return (
    <div className={`vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein${mob ? " mob-visible" : ""}`}>
      <span /><span /><span />
    </div>
  );
}

export default function Services() {
  return (
    <section className="serv_base checker-header  services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob next_block_sticky">
      <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop inner-inherit scramble">
          <div>
            <h2>End-to-End Product Design and Development Agency Services</h2>
          </div>
        </div>
        <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview new-animate trd02 inner-inherit">
          <AnimatedWords words={["From", "first", "prototype", "to", "full", "reinvention."]} />
        </div>
        <div className="color--white-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
          <div>
            Great products don&apos;t happen by accident. As a digital product design and development agency, we
            partner with venture-backed startups and established market leaders alike, combining product strategy,
            UX/UI design, and scalable web and mobile development under one roof.
          </div>
        </div>
        <div className="mt-100 mt-32-mob">
          <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
            <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
              <ul className="flex fd--column gap-4 isview slidetop">
                <li className="title title--xs services_section_link"><a href="#slide-1" data-id="1">Launch</a></li>
                <li className="title title--xs services_section_link"><a href="#slide-2" data-id="2">Evolve</a></li>
                <li className="title title--xs services_section_link"><a href="#slide-3" data-id="3">Rebrand</a></li>
                <li className="title title--xs services_section_link"><a href="#slide-4" data-id="4">Extend</a></li>
              </ul>
              <div className="btn-wrap mt-auto pt-32 pc-visible isview slidetop">
                <a className="btn btn--orange arr hover--white" href={`${SVC}/services/`} target="_self">
                  <span><b>Explore all</b></span>
                </a>
              </div>
            </div>
            <div className="right color--white gap-100 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
              {SLIDES.map((slide) => (
                <div key={slide.id} className={`scroll_slide row-${slide.row}`} id={slide.id}>
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview new-animate">
                    <AnimatedWords words={slide.titleWords} />
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-2 col-1-mob services_row  clipped">
                      {slide.cards.map((card, i) => (
                        <Fragment key={card.num}>
                          <ServiceDivider mob={i % 2 !== 0} />
                          <div className="col flex p-32 fd--column v--start">
                            <a href={card.href} className="service-link" />
                            <div className="num h6 color--white-tertiary mob-hidden">{card.num}</div>
                            <div className="media_file">
                              <video src={card.video} className="fullw radius-12" autoPlay playsInline muted loop preload="none" />
                            </div>
                            <div className="bottom-row mt-200">
                              <div className="title title--xs isview slidetop">{card.title}</div>
                              <div className="txt txt--s mt-8 isview slidetop color--white-light">
                                <p>{card.desc}</p>
                              </div>
                            </div>
                            <div className="btn-wrap flex mt-auto mt-28-mob isview slidetop">
                              <a href={card.href} className="btn btn--white arr">
                                <span>Explore</span>
                              </a>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mob-visible mt-40 pt-8">
          <a className="btn btn--orange arr fullw" href={`${SVC}/services/`} target="_self">
            <span><b>Explore all</b></span>
          </a>
        </div>
      </div>
    </section>
  );
}
