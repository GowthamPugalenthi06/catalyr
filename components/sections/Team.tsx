import { Fragment } from "react";
import { copyTeamAssets } from "@/lib/copyTeamAssets";

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

type TeamCol = {
  cls: string;
  img: string | null;
  trd?: string;
  aspect?: number;
};

const COLS: TeamCol[] = [
  { cls: "col isview slidetop   pc-visible", img: "/images/downloaded/photo-1522071820081-009f0129c71c.jpg", trd: "trd00", aspect: 1.0 },
  { cls: "col isview slidetop  pc-visible pc-visible", img: null },
  { cls: "col isview slidetop   pc-visible span-2 span-1-mob", img: "/images/downloaded/photo-1531403009284-440f080d1e12.jpg", trd: "trd02", aspect: 1.0 },
  { cls: "col isview slidetop", img: "/images/downloaded/photo-1542744173-8e7e53415bb0.jpg", trd: "trd03", aspect: 1.0 },
  { cls: "col isview slidetop   pc-visible", img: "/images/downloaded/photo-1517245386807-bb43f82c33c4.jpg", trd: "trd04", aspect: 1.0 },
  { cls: "col isview slidetop  pc-visible pc-visible", img: null },
  { cls: "col isview slidetop   pc-visible", img: "/images/downloaded/photo-1497366216548-37526070297c.jpg", trd: "trd06", aspect: 1.0 },
  { cls: "col isview slidetop  pc-visible pc-visible", img: null },
  { cls: "col isview slidetop   pc-visible", img: "/images/downloaded/photo-1522071820081-009f0129c71c.jpg", trd: "trd08", aspect: 1.0 },
  { cls: "col isview slidetop", img: "/images/downloaded/photo-1531403009284-440f080d1e12.jpg", trd: "trd09", aspect: 1.0 },
];

export default function Team() {
  copyTeamAssets();
  return (
    <section className="our_team pt-200 pt-100-mob pb-200 pb-64-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble">
          Meet our Team
        </div>
        <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02 mb-40 mb-32-mob">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Meet</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>the</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>team</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>driving</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>your</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>product&apos;s</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.48s" }}>success</span></span></span>
        </div>
        <div className="txt txt--l color--dark-secondary mw760 mt-48 mt-24-mob isview slidetop trd02">
          Established in January 2026, Catalyr was built with one goal—to become a long-term product design and
          development partner for companies looking to launch, scale, and innovate. Our team of strategists,
          designers, developers, and product experts based in Salem, India, brings focused expertise and global standards to every project.
        </div>
        <div className="team_grid_wrap mt-100 mt-64-tablet">
          <div className="grid col-4 gap-20 col-1-mob">
            {COLS.map((c, i) => (
              <div key={i} className={c.cls}>
                <div className="animated-media-wrapper isview slidetop">
                  {c.img && (
                    <img
                      className={`radius-12 animated-media ${c.trd}`}
                      src={c.img?.startsWith("http") || c.img?.startsWith("/") ? c.img : `/images/${c.img}`}
                      alt="Product Design and Development Agency"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: c.aspect }}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="col last-block flex fd--column v--start isview slidetop">
              <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
                <div className="title title--l">70+ team members</div>
                <div className="btn-wrap mt-auto pt-24">
                  <a href="/about" target="_self" className="btn btn--simple dark arr">
                    <span><b>Learn more</b></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
