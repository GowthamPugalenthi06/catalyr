import type { ReactNode } from "react";

type Stack = { img: string; text: ReactNode; label: string; href: string; col: number };

const STACKS: Stack[] = [
  { img: "React.svg", text: "React & Next.js for scalable frontend applications", label: "Frontend", href: "/services/web-development", col: 1 },
  { img: "Typescript-1.svg", text: "Node.js & Python for robust backend services", label: "Backend", href: "/services/web-development", col: 2 },
  { img: "NextJS.svg", text: "AWS & Vercel for high-performance deployment", label: "Infrastructure", href: "/services/web-development", col: 3 },
  { img: "Solidity.svg", text: "PostgreSQL & MongoDB for secure data management", label: "Database", href: "/services/web-development", col: 1 },
  { img: "design.svg", text: "Figma & Framer for intuitive UX/UI design", label: "Design", href: "/services/ui-ux-design", col: 2 },
];

export default function TechStack() {
  return (
    <>
    <section className="awards_section pb-200 pb-100-mob bg--white pt-200 pt-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Technology Stack</div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Built</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>with</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>modern,</span></span>{" "}
          <br />
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>scalable</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>tools</span></span></span>
        </div>
      </div>
      <div className="mt-40 mt-32-mob awards_container ov-hidden">
        <div className="grid awards_wrap col-3 col-2-tablet isview slidetop">
          {STACKS.map((a, i) => (
            <div key={i} className={`col flex fd--column v--start col-${a.col}`}>
              <div className="img-wrap">
                <img className="" src={a.img.startsWith("/") || a.img.startsWith("http") ? a.img : `/images/${a.img}`} alt="Technology" loading="lazy" decoding="async" />
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>{a.text}</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a className="btn btn--simple dark arr arr-45" href={a.href} target="_self">
                  <span><b>{a.label}</b></span>
                </a>
              </div>
            </div>
          ))}
          <div className="col flex fd--column v--start col-3">
            <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
              <div className="title title--l">And <br />More</div>
              <div className="btn-wrap mt-auto pt-24">
                <a href="/services" target="_self" className="btn btn--simple dark arr">
                  <span><b>Explore our services</b></span>
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
