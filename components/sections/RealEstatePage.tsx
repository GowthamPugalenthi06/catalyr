"use client";

export default function RealEstatePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero bg--dark">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 isview slidetop scramble">
            Industry — Real Estate
          </div>
          <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Modern</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Property</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Platforms</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>for</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>the</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>Digital</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>Age.</span></span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>From property portals and agent CRMs to virtual tours and listing management — we build technology that makes buying, selling, and renting property effortless.</div>
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
                  src="/images/downloaded/photo-1560518883-ce09059eeffa.jpg"
                  alt="Real Estate Platform"
                  style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column h--between">
              <div className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit pr-12 pr-0-mob" style={{ width: '100%' }}>
                <div>Your next growth stage starts with the right Real Estate website design agency — at launch, or at scale</div>
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
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">The Real Estate Problem</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Challenges</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>we</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>solve</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { n: "01", title: "Complex Property Search", body: "Buyers need precise filtering — location, price, type, amenities. We build intuitive map-based search with intelligent filtering that actually works." },
              { n: "02", title: "Fragmented Listings", body: "Managing listings across multiple portals wastes time. We create unified platforms with one-click syndication to major property portals." },
              { n: "03", title: "Poor Agent-Client Communication", body: "Deals get lost in email threads. We build integrated messaging, scheduling, and document management into the platform." },
              { n: "04", title: "Outdated Property Presentations", body: "Static photos don't sell anymore. We integrate virtual tours, 3D floor plans, and video walkthroughs seamlessly into listings." },
              { n: "05", title: "No Data Visibility", body: "Agencies operate blind without analytics. We build dashboards that show lead sources, conversion rates, and agent performance in real-time." },
              { n: "06", title: "Manual Workflows", body: "From viewings to contracts, too much is manual. We automate scheduling, lead nurturing, and document workflows to save agents hours per week." },
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
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop scramble">Our Real Estate Solutions</div>
          <div className="mt-24 mw1040 title title--xl isview slidetop new-animate trd02">
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>What</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>we</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>build</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>for</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>property</span></span>
          </div>
          <div className="mt-64 grid col-2 col-1-mob gap-12">
            {[
              { title: "Property Search Portals", desc: "Full-featured listing portals with advanced map search, filtering, favourites, and instant alerts — for buyers, renters, and investors.", img: "/images/downloaded/photo-1560518883-ce09059eeffa.jpg" },
              { title: "Agent CRM & Dashboard", desc: "Purpose-built CRMs for real estate teams — pipeline tracking, lead scoring, client communication, and reporting in one place.", img: "/images/downloaded/photo-1531403009284-440f080d1e12.jpg" },
              { title: "Property Management Systems", desc: "End-to-end platforms for landlords and property managers — maintenance requests, tenant portals, rent collection, and compliance tracking.", img: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg" },
              { title: "Virtual Tour Integration", desc: "Seamless 360° virtual tours, 3D walkthroughs, and video integration that showcase properties the way buyers expect in 2026.", img: "/images/downloaded/photo-1460925895917-afdab827c52f.jpg" },
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
            <span className="icon icon--2xl" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <img className="fullw" src="https://ui-avatars.com/api/?name=Himanshu&background=eaeaea&color=333" alt="Himanshu Ranjan Saravanan" loading="lazy" decoding="async" style={{ aspectRatio: 1, borderRadius: '50%', maxWidth: '120px' }} />
            </span>
            <div className="title title--m title--with-mark mt-24 text--center isview slidetop new-animate">
              <span className="a-word"><span style={{ transitionDelay: "0s" }}>Let&apos;s</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>build</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>your</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>property</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>platform</span></span>
            </div>
            <div className="txt txt--l mt-16 text--center color--dark-secondary fullw inner-inherit">
              Book a call with Himanshu Ranjan Saravanan, our Head of Partnerships, to discuss your property platform needs.
            </div>
            <div className="mt-48 mb-200 flex v--center h--center isview slidetop">
              <a className="btn btn--orange arr arr-right hover--dark btn--lg-desk" href="/contact" target="_self"><span><b>Start a Project</b></span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
