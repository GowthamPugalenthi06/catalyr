import { Fragment } from "react";

type Benefit = { id: string; row: number; title: string; desc: string };

const BENEFITS: Benefit[] = [
  {
    id: "slide-1",
    row: 1,
    title: "End-to-End Ownership",
    desc: "One unified team from strategy to launch. Total accountability for the final outcome. No handoffs, no coordination gaps, no excuses.",
  },
  {
    id: "slide-2",
    row: 2,
    title: "AI-Native by Default",
    desc: "AI is integrated where it creates real leverage. Focus on eliminating friction, not creating noise. Deeply embedded agentic workflows that feel magical.",
  },
  {
    id: "slide-3",
    row: 3,
    title: "Founder-Friendly Process",
    desc: "Fixed-price scopes with absolute transparency. Weekly live demos of actual working software. Honest timelines with no surprises.",
  },
  {
    id: "slide-4",
    row: 4,
    title: "Built to Scale",
    desc: "Architecture decisions that hold at 100x the load. Clean, maintainable, and documented codebases. Building for where you're going, not just where you are.",
  },
  {
    id: "slide-5",
    row: 5,
    title: "You Own Everything",
    desc: "Full source code and IP ownership transfer. Comprehensive documentation for your internal team. A clean handoff process when you're ready to take over.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="serv_base checker-header services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-top radius-80 radius-32-mob">
      <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop inner-inherit scramble">
          <div>
            <h2>Why Catalyr</h2>
          </div>
        </div>
        <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview new-animate trd02 inner-inherit">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Most</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Agencies</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Build.</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>Catalyr</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>Partners.</span></span></span>
        </div>
        
        <div className="mt-100 mt-32-mob">
          <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
            <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
              <ul className="flex fd--column gap-4 isview slidetop">
                {BENEFITS.map((b) => (
                  <li key={b.id} className="title title--xs services_section_link">
                    <a href={`#${b.id}`} data-id={b.row}>{b.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right color--white gap-100 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
              {BENEFITS.map((b) => (
                <div key={b.id} className={`scroll_slide row-${b.row}`} id={b.id}>
                  <div className="title main_title title--xl pl-32 pr-32 pl-12-mob pr-12-mob isview new-animate color--white-light opacity-30">
                    0{b.row}
                  </div>
                  <div className="title main_title title--m pl-32 pr-32 pl-12-mob pr-12-mob isview new-animate mt-12">
                    {b.title}
                  </div>
                  <div className="txt txt--l color--white-light pl-32 pr-32 pl-12-mob pr-12-mob mt-24">
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


