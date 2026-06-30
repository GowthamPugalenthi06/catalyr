const VALUES = [
  { eyebrow: "01", lead: "Transparency", body: "No hidden fees. No surprise scope changes. You have full access to our project boards, Figma files, and Git repositories — from day one." },
  { eyebrow: "02", lead: "Ownership", body: "We don't just write code. We own outcomes. If something isn't working, we tell you — and we fix it. Your success is directly tied to ours." },
  { eyebrow: "03", lead: "Velocity", body: "From India to global markets, we move fast. 6–10 week MVPs are standard for us. We ship in two-week sprints so you always see real progress." },
  { eyebrow: "04", lead: "Excellence", body: "Mediocre work costs you more in the long run. We maintain high standards in every component — from architecture decisions to pixel-level UI choices." },
  { eyebrow: "05", lead: "Partnership", body: "We act as your embedded technical team, not a vendor on a contract. We align our incentives with yours and push back when we think you're wrong." },
  { eyebrow: "06", lead: "Innovation", body: "We stay ahead of the curve so you don't have to. AI integrations, modern stacks, proven patterns — we bring the best tools to every engagement." },
];

export default function Testimonials() {
  return (
    <section className="services_section bg--white pb-200 pb-100-mob pt-100 pt-64-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          <h2>Our Core Values</h2>
        </div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02 inner-inherit">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Principles</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.08s" }}>that</span></span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>drive</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>our</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>work</span></span>
        </div>
        <div className="txt txt--m color--dark-secondary mt-24 mw706 isview slidetop trd02 inner-inherit">
          <p>
            We don't just build software, we build trust. These six core values dictate every decision we make, from engineering architecture to client communication.
          </p>
        </div>
        <div className="mt-40 mt-32-mob grid col-3 col-1-mob gap-12 benefits_container">
          {VALUES.map((b) => (
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
