const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export default function Hero() {
  return (
    <section className="hero bg--dark checker-header">
      <div className="container color--white">
        <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble section-alt">
          <h1>Technology & Growth Partner</h1>
        </div>
        <div className="nobr-mob title title--xl mw1040 isview slidetop trd02 new-animate">
          <h2>
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Catalyzing</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Bold</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Ideas</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>Into</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>Digital</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>Products.</span></span>
          </h2>
        </div>
        <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04">
          <a className="btn btn--orange hover--white btn--lg-desk arr arr-right" href="/contact" target="_self">
            <span><b>Start a Project</b></span>
          </a>
          <a className="btn btn--white-light arr arr-right hover--white btn--lg-desk" href="/work" target="_self">
            <span><b>See Our Work</b></span>
          </a>
        </div>
        <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
          <div className="col sticky isview slidetop animated-media-wrapper">
            <div className="media_wrap animated-media crossfade-wrapper">
              <img
                className="fullw radius-12 crossfade-img-1"
                src="/work/ecomm2.png"
                loading="lazy"
                decoding="async"
                alt="Tech mockups"
                style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
              />
              <img
                className="fullw radius-12 crossfade-img-2"
                src="/images/downloaded/photo-1460925895917-afdab827c52f.jpg"
                loading="lazy"
                decoding="async"
                alt="Tech mockups"
                style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
              />
            </div>
          </div>
          <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column h--between">
            <div className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit pr-12 pr-0-mob" style={{ width: "100%" }}>
              <div>
                <h3>
                  Catalyr is a full-stack technology and growth partner for startups, SaaS companies, and founders. From India to the world, we take you from idea to launch to scale — one team, zero coordination gaps.
                </h3>
              </div>
            </div>
            <div className="mt-auto text--center">
              <div className="txt txt--caption-m scramble color--white-light text--left mb-24 uppercase fw-600 pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
              <div>CATALYR IN NUMBERS</div>
            </div>
            <div className="values_wrap grid col-2 clip_1 isview slidetop">
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">50+</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>products built</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">6</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>global markets served</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">6–10</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>week average MVP timeline</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">100%</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>source code ownership</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
