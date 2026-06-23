const SVC = "https://phenomenonstudio.com";
const CDN = "https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03";

type Row = {
  n: number;
  question: string;
  answer: string;
  btn: string;
  href: string;
  video: string;
  poster: string;
};

const ROWS: Row[] = [
  {
    n: 1,
    question: "Need to meet tight deadlines but don’t have enough hands on deck?",
    answer:
      "Hiring in-house takes months of job posts, resumes, and onboarding. We embed a dedicated senior designer or developer into your workflow without that wait, so your deadlines stop depending on recruiting.",
    btn: "Extend My Team",
    href: `${SVC}/service/team-extension/`,
    video: "/media/Polina_1_sub.mp4",
    poster: `${CDN}/polina-team-cover.webp`,
  },
  {
    n: 2,
    question: "Your product needs to scale, but your user experience is holding you back?",
    answer:
      "As a digital product design agency, we know scaling starts with consistency. We build design systems and optimize your core flows, so rapid growth never compromises the experience.",
    btn: "Redesign My Product",
    href: `${SVC}/service/product-redesign/`,
    video: "/media/Adam_2sub.mp4",
    poster: `${CDN}/adam-cover.webp`,
  },
  {
    n: 3,
    question: "Have big ideas but need to  launch an MVP quickly?",
    answer:
      "Discovery sharpens your scope to what matters most, and pre-built development frameworks cut MVP timelines by up to 50%. You launch faster without sacrificing quality.",
    btn: "Launch My MVP",
    href: `${SVC}/service/rapid-mvp-development/`,
    video: "/media/Polina_3_sub.mp4",
    poster: `${CDN}/polina-mvp-cover.webp`,
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
          <h2>Your Dedicated Product Design and Development Agency</h2>
        </div>
        <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02 inner-inherit">
          <div>
            <span className="a-word"><span style={{ transitionDelay: "0s" }}>Building</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>products</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>is</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>hard.</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>Finding</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>the</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>right</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>partner</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>shouldn’t</span></span>{" "}
            <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>be.</span></span>
          </div>
        </div>
      </div>
      <div className="mt-100 mt-40-mob problems">
        {ROWS.map((r) => (
          <div key={r.n} className={`row sticky row-${r.n} bg--white`}>
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left pr-24 pr-0-mob">
                    <div className="txt txt--l inner-inherit">
                      <div>
                        <p>{r.question}</p>
                      </div>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>{r.answer}</div>
                    </div>
                    <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                      <a className="btn btn--orange hover--dark arr" href={r.href} target="_self">
                        <span><b>{r.btn}</b></span>
                      </a>
                    </div>
                  </div>
                  <div className="right animated-media-wrapper isview fadein">
                    <div className="video_player radius-12 animated-media">
                      <video
                        preload="none"
                        autoPlay
                        playsInline
                        muted
                        loop
                        src={r.video}
                        poster={r.poster}
                        className="fullw isview visible just_for_track fadein"
                      />
                      <div className="btn-wrap">
                        <button className="btn btn--play" />
                      </div>
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
