const CDN = "https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03";

type Testimonial = {
  photo: string;
  aspect: number;
  name: string;
  role: string;
} & ({ kind: "video"; video: string; poster: string } | { kind: "text"; text: string });

const ITEMS: Testimonial[] = [
  { kind: "video", photo: "1516924597216.jpeg.webp", aspect: 1, name: "Craig Tortolani", role: "CPO at Dekryption Labs ", video: "/media/review-craig.mp4", poster: `${CDN}/cover-craig.webp` },
  { kind: "text", photo: "1766946800665.jpeg.webp", aspect: 1, name: "Ash Bryant", role: "Founder of Hormn", text: "The design team is truly world-class, excelling in both user interface design and creating solutions optimized for conversion." },
  { kind: "video", photo: "KlickEx.jpeg.webp", aspect: 1, name: "KlickEx Team ", role: "", video: "/media/klickex-review.mp4", poster: `${CDN}/klickex-cover.webp` },
  { kind: "text", photo: "Rectangle-34624326.png.webp", aspect: 1.0064102564103, name: "George Fry", role: "Founder at Neap", text: "The quality of the designs is fantastic. Phenomenon Studio works at speed and is extremely punctual with timelines. They deliver top-notch outcomes with exceptional designs." },
  { kind: "video", photo: "image.png.webp", aspect: 1.0064102564103, name: "Andre Guerra", role: "Co-Owner at RADCAT Design", video: "/media/radcat-review.mp4", poster: `${CDN}/cover-andre-scaled.webp` },
  { kind: "text", photo: "1683997337066.jpeg.webp", aspect: 1, name: "Kevin Alvarez", role: "Founder & General Partner, Predictive", text: "Phenomenon Studio's ability to translate concepts and rough design mock-ups into high-fidelity assets, designs, and visuals was very impressive. The goal was to maintain simple elegance in the design aesthetic, and they did it very well." },
];

function Stars() {
  return (
    <div className="stars flex v--center h--start gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src="/images/star.svg" alt="star" loading="lazy" decoding="async" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials_section pb-100 pb-100-mob bg--white">
      <div className="container">
        <div className="flex v--end h--between heading_wrap flex--block-mob">
          <div className="left">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
              what our clients say
            </div>
            <div className="title title--xl mt-16 color--dark mw1040 isview slidetop new-animate trd02">
              <h2>
                <span><span className="a-word"><span style={{ transitionDelay: "0s" }}>5.0</span></span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>is</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>our</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>average</span></span>{" "}
                <br />
                <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>on</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>clutch</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>&</span></span>{" "}
                <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>designrush</span></span>
              </h2>
            </div>
          </div>
          <div className="services_cards grid col-2 gap-8 mt-32-mob">
            <a href="https://clutch.co/profile/phenomenon-studio" target="_blank" rel="nofollow" className="card bg--gray radius-12 p-12 flex fd--column isview slidetop">
              <span className="icon">
                <img className="visible-icon" src="/images/clutch-icon.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                <img className="hover-icon" src="/images/Icon.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </span>
              <div className="ratings flex v--center h--between mt-auto">
                <Stars />
                <div className="txt txt--caption-m color--dark-light fw-600">5.0</div>
              </div>
            </a>
            <a href="https://www.designrush.com/agency/profile/phenomenon-studio" target="_blank" rel="nofollow" className="card bg--gray radius-12 p-12 flex fd--column isview slidetop">
              <span className="icon">
                <img className="visible-icon" src="/images/design-icon.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                <img className="hover-icon" src="/images/icon2.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </span>
              <div className="ratings flex v--center h--between mt-auto">
                <Stars />
                <div className="txt txt--caption-m color--dark-light fw-600">4.9</div>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-40 mt-12-mob testimonials_wrap grid col-3 col-2-tablet col-1-mob gap-12">
          {ITEMS.map((t, i) => (
            <div key={i} className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img className="md" src={`/images/${t.photo}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: t.aspect }} />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>{t.name}</p>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
              {t.kind === "video" ? (
                <div className="video_wrap mt-auto  isview slidetop">
                  <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                    <video src={t.video} className="fullw" preload="none" loading="lazy" poster={t.poster} />
                    <div className="btn-wrap">
                      <button className="btn btn--play" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="txt txt--l mt-auto pt-24 text_wrap">
                  <p>{t.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
