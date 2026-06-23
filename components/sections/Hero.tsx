const SVC = "https://phenomenonstudio.com";

export default function Hero() {
  return (
    <section className="hero bg--dark clipped-bottom next_block_sticky checker-header">
      <div className="container color--white">
        <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble section-alt">
          <h1>Product Design and Development Agency</h1>
        </div>
        <div className="nobr-mob title title--xl mw1040 isview slidetop trd02 new-animate">
          <h2>
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>We</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>take</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>brands,</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>websites,</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>and</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>products</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>to</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>the</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>next</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>level.</span></span>
          </h2>
        </div>
        <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04">
          <a className="btn btn--orange hover--white btn--lg-desk arr arr-right" href="#contact-form" target="_self">
            <span><b>Let’s talk</b></span>
          </a>
          <a className="btn btn--white-light arr arr-right hover--white btn--lg-desk" href={`${SVC}/projects/`} target="_self">
            <span><b>View our cases</b></span>
          </a>
        </div>
        <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
          <div className="col sticky isview slidetop animated-media-wrapper">
            <div className="media_wrap animated-media">
              <video
                preload="metadata"
                className="fullw radius-12"
                src="/media/showreel_homepage_2_tiny-2.mp4"
                autoPlay
                playsInline
                muted
                loop
                style={{ aspectRatio: 1.33, objectFit: "cover", verticalAlign: "middle" }}
              />
            </div>
            <a href="#showreel" className="showreel-trigger" />
            <a href="#showreel" className="btn btn--simple arr white">
              <span>Showreel 25/26</span>
            </a>
          </div>
          <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column">
            <div className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit pr-12 pr-0-mob" style={{ width: "100%" }}>
              <div>
                <h3>
                  We work with teams who&apos;ve outgrown what they&apos;ve built — and need one partner to
                  rethink, redesign, and ship it right. From the first strategy call to post-launch support, we
                  own it end to end.
                </h3>
              </div>
            </div>
            <div className="txt scramble txt--caption-m color--white-light uppercase fw-600 mt-auto pt-32 pt-0-mob mt-40-mob pt-8-mob isview slidetop">
              <p>Designing products backed by top-tier investors</p>
            </div>
            <div className="mt-24 logos_wrap grid col-4 col-2-tablet isview slidetop">
              <div className="logo flex v--center h--center">
                <img className="" src="/images/l_1.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.41 }} />
              </div>
              <div className="logo flex v--center h--center">
                <img className="" src="/images/l_2.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.41 }} />
              </div>
              <div className="logo flex v--center h--center">
                <img className="" src="/images/l_3.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.41 }} />
              </div>
              <div className="logo flex v--center h--center">
                <div className="txt txt--control-s uppercase fw-600">
                  <p>and more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col pc-visible" />
          <div className="col pt-32 pt-24-mob pb-32 pb-0-mob text--center">
            <div className="txt txt--caption-m scramble color--white-light text--left mb-24 uppercase fw-600 mt-auto pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
              <div>phenomenon studio IN NUMBERS</div>
            </div>
            <div className="values_wrap grid col-2 clip_1 isview slidetop">
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">500M+</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>investments raised by our clients</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">x2</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>avg projects per client — most come back</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">5.0</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>on clutch — 40+ reviews</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">35%</div>
                <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                  <p>conversion lift — klickex case</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
