const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
const CDN = "https://cdn.catalyr.com/wp-content/uploads/2025/03";

type Row = {
  n: number;
  question: string;
  answer: string;
  image: string;
  poster: string;
};

const ROWS: Row[] = [
  {
    n: 1,
    question: "Discover",
    answer: "We run structured discovery sessions to understand your product, users, and business goals. We ask hard questions others skip.",
    image: "/images/downloaded/photo-1552664730-d307ca884978.jpg",
    poster: "",
  },
  {
    n: 2,
    question: "Strategise",
    answer: "We define the scope, architecture, and roadmap. You approve every decision before we build anything.",
    image: "/images/downloaded/photo-1531403009284-440f080d1e12.jpg",
    poster: "",
  },
  {
    n: 3,
    question: "Design",
    answer: "We design your product in Figma — user flows, UI screens, and interactive prototypes — tested with real users before development.",
    image: "/images/downloaded/photo-1561070791-2526d30994b5.jpg",
    poster: "",
  },
  {
    n: 4,
    question: "Build",
    answer: "We develop in 2-week sprints with live demos. Real progress you can see, test, and give feedback on every fortnight.",
    image: "/images/downloaded/photo-1555066931-4365d14bab8c.jpg",
    poster: "",
  },
  {
    n: 5,
    question: "Launch",
    answer: "We deploy, configure monitoring, and run post-launch support. Your product goes live with confidence, not anxiety.",
    image: "/images/downloaded/photo-1519389950473-47ba0277781c.jpg",
    poster: "",
  },
  {
    n: 6,
    question: "Scale",
    answer: "We stay with you. Growth marketing, feature development, and AI integration — as your product grows, we grow with it.",
    image: "/images/downloaded/photo-1551288049-bebda4e38f71.jpg",
    poster: "",
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          <h2>How We Work</h2>
        </div>
        <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02 inner-inherit">
          <div>
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Idea</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>→</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Design</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>→</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>Build</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>→</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>Launch</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>→</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>Scale</span></span>
          </div>
        </div>
        <div className="txt txt--m color--dark-secondary mt-24 mw706 isview slidetop trd02 inner-inherit">
          <p>Every engagement follows a clear, milestone-based process. You always know what's happening, what's next, and what it means for your product.</p>
        </div>
      </div>
      <div className="mt-100 mt-40-mob problems">
        {ROWS.map((r) => (
          <div key={r.n} className={`row sticky row-${r.n} bg--white`}>
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left pr-24 pr-0-mob">
                    <div className="title title--xl inner-inherit color--dark">
                      <div>
                        <p>{r.question}</p>
                      </div>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit color--dark-secondary">
                      <div>{r.answer}</div>
                    </div>
                  </div>
                  <div className="right animated-media-wrapper isview fadein">
                    <div className="video_player radius-12 animated-media" style={{ height: "100%" }}>
                      <img
                        src={r.image}
                        loading="lazy"
                        className="fullw isview visible just_for_track fadein"
                        style={{ height: "100%", width: "100%", objectFit: "cover", minHeight: "400px" }}
                        alt={r.question}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="space" />
      </div>
    </section>
  );
}
