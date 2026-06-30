import type { ReactNode } from "react";

type Award = { img: string; title: ReactNode; desc: string; href: string; col: number; linkText: string };

const AWARDS: Award[] = [
  { img: "clutch.svg", title: "Rapid MVP Delivery", desc: "Taking ideas from concept to a market-ready MVP in just 6-10 weeks.", href: "/services/mvp-development", col: 1, linkText: "View MVP Services" },
  { img: "Dribbble-select.svg", title: "50+ Products Launched", desc: "Successfully delivered robust digital solutions across 6 global markets.", href: "/work", col: 2, linkText: "View Our Work" },
  { img: "webflow.svg", title: "100% Code Ownership", desc: "You retain full intellectual property and source code rights from day one.", href: "/services", col: 3, linkText: "View Services" },
  { img: "design.svg", title: "Enterprise-Grade SaaS", desc: "Building scalable, secure architectures designed for high-growth stages.", href: "/services/saas-development", col: 1, linkText: "View SaaS Services" },
  { img: "Awwwards.svg", title: "User-Centric Design", desc: "Crafting intuitive UX/UI that engages users and drives product adoption.", href: "/services/ui-ux-design", col: 2, linkText: "View Design Services" },
];

export default function Awards() {
  return (
    <>
    <section className="awards_section pb-200 pb-100-mob bg--white pt-200 pt-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          The Catalyr Edge
        </div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Delivering</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>value</span></span>{" "}
          <br />
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>at</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>every</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>stage</span></span></span>
        </div>
      </div>
      <div className="mt-40 mt-32-mob awards_container ov-hidden">
        <div className="grid awards_wrap col-3 col-2-tablet isview slidetop">
          {AWARDS.map((a, i) => (
            <div key={i} className={`col flex fd--column v--start col-${a.col}`}>
              <div className="img-wrap icon" style={{ width: '40px', height: '40px' }}>
                <img src="/images/asterisk-svgrepo-com-2.svg" alt="Catalyr" style={{ filter: 'brightness(0)' }} />
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p className="fw-600 color--dark">{a.title}</p>
                <p className="mt-8">{a.desc}</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a className="btn btn--simple dark arr arr-45" href={a.href} target="_blank" rel="noreferrer">
                  <span><b>{a.linkText}</b></span>
                </a>
              </div>
            </div>
          ))}
          <div className="col flex fd--column v--start col-3">
            <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
              <div className="title title--l">Explore <br />Services</div>
              <div className="btn-wrap mt-auto pt-24">
                <a href="/services" target="_self" className="btn btn--simple dark arr">
                  <span><b>View all services</b></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
