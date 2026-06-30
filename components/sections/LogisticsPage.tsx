"use client";

export default function LogisticsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero bg--dark">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 isview slidetop scramble">
            Industry — Logistics
          </div>
          <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Logistics</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Software</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>That</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>Moves</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>as</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>Fast</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>as</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>You.</span></span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>Real-time tracking dashboards, route optimisation tools, and supply chain visibility platforms — built for logistics companies that demand operational excellence.</div>
          </div>
          <div className="mt-24 flex v--center gap-8 isview slidetop trd04">
            <a className="btn btn--orange hover--white btn--lg-desk arr arr-right" href="/contact" target="_self">
              <span><b>Start Your Project</b></span>
            </a>
            <a className="btn btn--white-light arr arr-right hover--white btn--lg-desk" href="/work" target="_self">
              <span><b>See Our Work</b></span>
            </a>
          </div>
          <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
            <div className="col sticky isview slidetop animated-media-wrapper">
              <div className="media_wrap animated-media">
                <img
                  className="fullw radius-12"
                  src="/images/downloaded/photo-1586528116311-ad8dd3c8310d.jpg"
                  alt="Logistics Platform"
                  style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column h--between">
              <div className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit pr-12 pr-0-mob" style={{ width: '100%' }}>
                <div>Your next growth stage starts with the right Logistics website design agency — at launch, or at scale</div>
              </div>
              <div className="mt-auto text--center">
                <div className="txt txt--caption-m scramble color--white-light text--left mb-24 uppercase fw-600 pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
                  <div>catalyr studio FOCUS</div>
                </div>
                <div className="values_wrap grid col-2 clip_1 isview slidetop">
                  <div className="col flex v--center h--center fd--column text--center">
                    <div className="title--m color--white">Modern</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>Next-gen technology stack</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column text--center">
                  <div className="title--m color--white">Scale</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>Built for future growth</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column text--center">
                  <div className="title--m color--white">Fast</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>Rapid development cycles</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column text--center">
                  <div className="title--m color--white">Secure</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>Enterprise-grade security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ── CHALLENGES ── */}
      <section className="bg--white pt-200 pb-200 pt-100-mob pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Logistics Complexity</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>The</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>operational</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>problems</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>we</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>fix</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { n: "01", title: "No Real-Time Visibility", body: "Operations teams flying blind is a cost issue. We build live tracking dashboards that give you full shipment visibility across every route." },
              { n: "02", title: "Inefficient Route Planning", body: "Manual dispatch and outdated routing costs fuel and time. Our platforms integrate intelligent routing algorithms to optimise every journey." },
              { n: "03", title: "Data Silos", body: "Warehouse, transport, and customer data living in separate systems causes errors. We build integrated platforms with a single source of truth." },
              { n: "04", title: "Manual Reporting", body: "Hours spent in spreadsheets instead of running operations. We build real-time analytics dashboards that surface the metrics that matter." },
              { n: "05", title: "Driver & Fleet Management", body: "Coordinating drivers at scale is chaotic. We build driver apps and fleet dashboards that make dispatch, communication, and compliance simple." },
              { n: "06", title: "Customer Communication Gaps", body: "Customers expect live tracking and proactive updates. We integrate automated notifications and customer-facing tracking portals." },
            ].map((item) => (
              <div key={item.n} className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">{item.n}</div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">{item.title}</div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob"><p>{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="bg--dark clipped-top clipped-bottom pt-200 pb-200 pt-100-mob pb-100-mob radius-80 radius-32-mob">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop scramble">Our Logistics Solutions</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Built</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>for</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>operational</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>excellence</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { title: "Fleet & Dispatch Management", desc: "Real-time fleet dashboards, driver allocation, and dispatch tools — built to reduce idle time and maximise utilisation across every vehicle.", img: "/images/downloaded/photo-1586528116311-ad8dd3c8310d.jpg" },
              { title: "Supply Chain Visibility Platforms", desc: "End-to-end shipment tracking from origin to delivery — with live status, exception alerts, and carrier integrations built in.", img: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg" },
              { title: "Warehouse Management Systems", desc: "Optimised pick-and-pack workflows, inventory management, and barcode scanning integrations for warehouse operations at any scale.", img: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg" },
              { title: "Last-Mile Delivery Apps", desc: "Driver apps and customer-facing tracking portals with proof-of-delivery, live ETAs, and automated customer notifications.", img: "/images/downloaded/photo-1512941937669-90a1b58e7e9c.jpg" },
            ].map((item, i) => (
              <div key={i} className="col pt-40 pr-40 pl-40 pt-24-mob pr-16-mob pl-16-mob pb-0 radius-12 flex fd--column isview slidetop">
                <div className="txt txt--control-m color--white mb-32 mb-16-mob">
                  <p><strong>{item.title}</strong> — {item.desc}</p>
                </div>
                <div className="media_wrap mb-100 flex v--end h--center mt-auto aspect_null shadow isview fadein">
                  <img src={item.img} className="fullw" alt={item.title} style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta mt-200 mt-100-mob bg--white">
        <div className="container">
          <div className="cta_content">
            <div className="title title--m title--with-mark mt-24 text--center isview slidetop new-animate">
              <span className="a-word"><span style={{ transitionDelay: "0s" }}>Modernise</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>your</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>logistics</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>operations</span></span>
            </div>
            <div className="txt txt--l mt-16 text--center color--dark-secondary fullw inner-inherit">
              From MVP to production-ready platform — we deliver logistics software on time, on budget.
            </div>
            <div className="mt-48 mb-100 flex v--center h--center isview slidetop">
              <a className="btn btn--orange arr arr-right hover--dark btn--lg-desk" href="/contact" target="_self"><span><b>Talk to Our Team</b></span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
