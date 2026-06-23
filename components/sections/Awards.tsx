import type { ReactNode } from "react";

const SVC = "https://phenomenonstudio.com";

type Award = { img: string; text: ReactNode; label: string; href: string; col: number };

const AWARDS: Award[] = [
  { img: "clutch.svg", text: "Top product design company 2024", label: "View On Clutch", href: "https://clutch.co/profile/phenomenon-studio", col: 1 },
  { img: "Dribbble-select.svg", text: "One of Dribbble’s top rated design agencies", label: "View On Dribbble", href: "https://dribbble.com/phenomenonstudio", col: 2 },
  { img: "webflow.svg", text: "Professional partner by Webflow", label: "View On Webflow", href: "https://webflow.com/@phenomenons-workspace", col: 3 },
  { img: "design.svg", text: <>Nominee 2024 <br />Isora - GRC Platform</>, label: "View On UXDA", href: "https://ux-design-awards.com/winners/2024-2-isora-grc-collaborative-grc-platform", col: 1 },
  { img: "Awwwards.svg", text: "Site of the Day & honorable mentions", label: "View On Awwwards", href: "https://www.awwwards.com/Phenomenon/", col: 2 },
];

export default function Awards() {
  return (
    <section className="awards-sticky-checker awards_section pb-200 pb-100-mob bg--white pt-200 pt-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Awards</div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Wins</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>that</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>inspire</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>us</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>forward</span></span></span>
        </div>
      </div>
      <div className="mt-40 mt-32-mob awards_container ov-hidden">
        <div className="grid awards_wrap col-3 col-2-tablet isview slidetop">
          {AWARDS.map((a, i) => (
            <div key={i} className={`col flex fd--column v--start col-${a.col}`}>
              <div className="img-wrap">
                <img className="" src={`/images/${a.img}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>{a.text}</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a className="btn btn--simple dark arr arr-45" href={a.href} target="_blank">
                  <span><b>{a.label}</b></span>
                </a>
              </div>
            </div>
          ))}
          <div className="col flex fd--column v--start col-3">
            <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
              <div className="title title--l">32+ <br />others</div>
              <div className="btn-wrap mt-auto pt-24">
                <a href="/about-us" target="_self" className="btn btn--simple dark arr">
                  <span><b>Explore all awards</b></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
