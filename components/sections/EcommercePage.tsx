"use client";

export default function EcommercePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero bg--dark">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 isview slidetop scramble">
            Industry — E-Commerce
          </div>
          <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>High-Converting</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>E-Commerce</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Platforms</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>Built</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>to</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>Scale.</span></span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>We build online stores, marketplaces, and headless commerce solutions that convert visitors into customers — optimised for speed, UX, and revenue growth.</div>
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
                  src="/images/downloaded/photo-1460925895917-afdab827c52f.jpg"
                  alt="E-Commerce Platform Dashboard"
                  style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column h--between">
              <div className="txt--lead inner-inherit font1 isview slidetop fullw pr-12 pr-0-mob" style={{ width: "100%" }}>
                <div>Your next growth stage starts with the right E-Commerce website design agency — at launch, or at scale</div>
              </div>
              <div className="txt txt--l mt-24 color--white-secondary inner-inherit isview slidetop" style={{ width: "100%" }}>
                <p>We build high-converting, scalable online stores that deliver seamless shopping experiences, fast load times, and robust backend management. From modern UI/UX design to complex payment integrations, we ensure your platform is designed to maximize revenue and customer retention.</p>
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
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">Why E-Commerce is hard</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>The</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>challenges</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>we</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>solve</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { n: "01", title: "High Cart Abandonment", body: "Poor checkout UX kills conversions. We streamline the purchase flow, reducing friction at every step from product discovery to payment." },
              { n: "02", title: "Slow Page Performance", body: "Every second of delay costs revenue. We build with performance-first architectures — optimised images, lazy loading, and CDN delivery." },
              { n: "03", title: "Fragmented Inventory", body: "Managing stock across channels shouldn't be a pain. We integrate your e-commerce platform with your ERP and fulfilment systems seamlessly." },
              { n: "04", title: "Poor Mobile UX", body: "Over 70% of shopping happens on mobile. Our designs are touch-first, fast, and built to convert on every screen size." },
              { n: "05", title: "Weak Search & Discovery", body: "Customers can't buy what they can't find. We implement intelligent filtering, faceted search, and AI-powered product recommendations." },
              { n: "06", title: "Scaling Under Load", body: "Flash sales and traffic spikes shouldn't crash your store. We architect for elastic scalability that handles demand without downtime." },
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
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop scramble">Our E-Commerce Solutions</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Everything</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>your</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>store</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>needs</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { title: "Custom Online Stores", desc: "Bespoke storefronts built on Next.js, React  — designed for your brand and optimised for conversion.", img: "/images/downloaded/photo-1563013544-824ae1b704d3.jpg" },
              { title: "Headless Commerce", desc: "Decouple your front-end from your commerce engine. Get the speed of static sites with the power of a full commerce backend.", img: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg" },
              { title: "Multi-Vendor Marketplaces", desc: "Full marketplace platforms with vendor management, commission engines, and customer dispute workflows.", img: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg" },
              { title: "Payment & Checkout Optimisation", desc: "Streamlined checkout flows, multiple payment gateways, and abandonment recovery — built to maximise every transaction.", img: "/images/downloaded/photo-1498050108023-c5249f4df085.jpg" },
            ].map((item, i) => (
              <div key={i} className="col pt-40 pr-40 pl-40 pt-24-mob pr-16-mob pl-16-mob pb-0 radius-12 flex fd--column isview slidetop" >
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
            <span className="icon icon--2xl" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <img className="fullw" src="https://ui-avatars.com/api/?name=Himanshu&background=eaeaea&color=333" alt="Himanshu Ranjan Saravanan" loading="lazy" decoding="async" style={{ aspectRatio: 1, borderRadius: '50%', maxWidth: '120px' }} />
            </span>
            <div className="title title--m title--with-mark mt-24 text--center isview slidetop new-animate">
              <span className="a-word"><span style={{ transitionDelay: "0s" }}>Ready</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>to</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>build</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>your</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>store?</span></span>
            </div>
            <div className="txt txt--l mt-16 text--center color--dark-secondary fullw inner-inherit">
              Book a call with Himanshu Ranjan Saravanan, our Head of Partnerships, to discuss your e-commerce platform needs.
            </div>
            <div className="mt-48 mb-200 flex v--center h--center isview slidetop">
              <a className="btn btn--orange arr arr-right hover--dark btn--lg-desk" href="/contact" target="_self"><span><b>Let&apos;s Talk</b></span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
