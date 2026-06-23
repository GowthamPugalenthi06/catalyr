type Benefit = { eyebrow: string; lead: string; body: string };

const BENEFITS: Benefit[] = [
  {
    eyebrow: "Design that meets regulation",
    lead: "HIPAA- and GDPR-certified expertise for Healthcare and beyond.",
    body: "Since 2019, we’ve gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech — where compliance and UX go hand in hand.",
  },
  {
    eyebrow: "Design that lasts beyond trends",
    lead: "We don’t chase fads. We build digital products that stay relevant.",
    body: "Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
  },
  {
    eyebrow: "Design that’s developer-ready",
    lead: "We design for implementation, not handoff. ",
    body: "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything’s live.",
  },
  {
    eyebrow: "Local presence. Global delivery",
    lead: "Work directly with the doers — not a chain of account managers.",
    body: "Collaborate with UX strategists in North America, while our senior design and development teams in Europe deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team — from a single embedded designer to a full product squad.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="services_section bg--white pb-200 pb-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          <h2>Why choose us?</h2>
        </div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02 inner-inherit">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Your</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>success</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>is</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>our</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>priority</span></span></span>
        </div>
        <div className="mt-40 mt-32-mob grid col-2 col-1-mob gap-12 benefits_container">
          {BENEFITS.map((b) => (
            <div
              key={b.eyebrow}
              className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray"
            >
              <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">{b.eyebrow}</div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">{b.lead}</div>
              <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
