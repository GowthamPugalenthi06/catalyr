import { Fragment } from "react";
import AnimatedWords from "@/components/AnimatedWords";

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

type Card = { href: string; num: string; image: string; title: string; desc: string };
type Slide = { id: string; row: number; titleWords: string[]; description: string; cards: Card[] };

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    row: 1,
    titleWords: ["Product", "Engineering"],
    description: "We build the software. Web apps, SaaS platforms, mobile apps, MVPs — engineered with modern stacks and designed to scale.",
    cards: [
      { href: `/services/saas-development`, num: "01", image: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg", title: "SaaS Development", desc: "Multi-tenant architecture, billing infrastructure, and role-based access." },
      { href: `/services/web-development`, num: "02", image: "/images/downloaded/photo-1498050108023-c5249f4df085.jpg", title: "Web Development", desc: "High-performance web apps with modern architectures, optimised for speed." },
      { href: `/services/mobile-app-development`, num: "03", image: "/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg", title: "Mobile App Development", desc: "iOS, Android, and cross-platform mobile apps built with React Native." },
      { href: `/services/mvp-development`, num: "04", image: "/images/downloaded/photo-1517694712202-14dd9538aa97.jpg", title: "MVP Development", desc: "Structured MVP development. Idea to launch in 6–10 weeks." },
    ],
  },
  {
    id: "slide-2",
    row: 2,
    titleWords: ["Design", "&", "Experience"],
    description: "We design the product. UI/UX, design systems, product strategy — everything a user touches, from first interaction to core workflow.",
    cards: [
      { href: `/services/ui-ux-design`, num: "01", image: "/images/downloaded/photo-1561070791-2526d30994b5.jpg", title: "UI/UX Design", desc: "Design systems that reduce friction, drive engagement, and feel effortless." },
      { href: `/services/product-strategy`, num: "02", image: "/images/downloaded/photo-1531403009284-440f080d1e12.jpg", title: "Product Strategy", desc: "Roadmap design and technical architecture consulting for founders." },
      { href: `/services/ai-solutions`, num: "03", image: "/images/downloaded/photo-1677442136019-21780ecad995.jpg", title: "AI Solutions", desc: "Build AI-native products with custom LLM integrations and agent workflows." },
      { href: `/services/automation-solutions`, num: "04", image: "/images/downloaded/photo-1518770660439-4636190af475.jpg", title: "Automation Solutions", desc: "Eliminate manual work and scale business operations with custom automation." },
    ],
  },
  {
    id: "slide-3",
    row: 3,
    titleWords: ["Growth", "&", "Marketing"],
    description: "We grow the product. Digital marketing, SEO, paid ads, cold outreach — systems that generate pipeline, not just awareness.",
    cards: [
      { href: `/services/digital-marketing`, num: "01", image: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg", title: "Digital Marketing", desc: "Performance digital marketing built for SaaS companies and startups." },
      { href: `/services/digital-marketing`, num: "02", image: "/images/downloaded/photo-1572177812156-58036aae439c.jpg", title: "SEO Strategy", desc: "Technical and content SEO optimized for organic traffic generation." },
      { href: `/services/digital-marketing`, num: "03", image: "/images/downloaded/photo-1557200134-90327ee9fafa.jpg", title: "Cold Outreach", desc: "Automated sequences for high-converting outbound lead generation." },
      { href: `/services/ui-ux-design`, num: "04", image: "/images/downloaded/photo-1600880292203-757bb62b4baf.jpg", title: "Brand Strategy", desc: "Brand design and positioning to differentiate your product in the market." },
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
    <section className="serv_base checker-header  services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-top radius-80 radius-32-mob">
      <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop inner-inherit scramble">
          <div>
            <h2>What We Build</h2>
          </div>
        </div>
        <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview new-animate trd02 inner-inherit">
          <AnimatedWords words={["Three", "Studios.", "One", "Roof.", "Every", "Capability", "You", "Need."]} />
        </div>
        <div className="color--white-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
          <div>
            Catalyr combines product engineering, visual design, and digital growth into one integrated team — so nothing gets lost between the gaps.
          </div>
        </div>
        <div className="mt-100 mt-32-mob">
          <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
            <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
              <ul className="flex fd--column gap-4 isview slidetop">
                <li className="title title--xs services_section_link"><a href="#slide-1" data-id="1">Engineering</a></li>
                <li className="title title--xs services_section_link"><a href="#slide-2" data-id="2">Design</a></li>
                <li className="title title--xs services_section_link"><a href="#slide-3" data-id="3">Growth</a></li>
              </ul>
              <div className="btn-wrap mt-auto pt-32 pc-visible isview slidetop">
                <a className="btn btn--orange arr hover--white" href={`/services`} target="_self">
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
                  <div className="txt txt--m color--white-light pl-32 pr-32 pl-12-mob pr-12-mob mt-24">
                    {slide.description}
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-2 col-1-mob services_row  clipped">
                      {slide.cards.map((card, i) => (
                        <Fragment key={card.num}>
                          <ServiceDivider mob={i % 2 !== 0} />
                          <div className="col flex p-32 fd--column v--start">
                            <a href={card.href} className="service-link" />
                            <div className="num h6 color--white-tertiary mob-hidden">{card.num}</div>
                            <div className="media_file" style={{ height: "100%" }}>
                              <img src={card.image} className="fullw radius-12" alt={card.title} style={{ height: "100%", width: "100%", minHeight: "250px", objectFit: 'cover' }} loading="lazy" />
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
          <a className="btn btn--orange arr fullw" href={`/services`} target="_self">
            <span><b>Explore all</b></span>
          </a>
        </div>
      </div>
    </section>
  );
}
