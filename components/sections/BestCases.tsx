import { Fragment } from "react";

type CaseWin = {
  logo: string;
  name: string;
  desc: string;
  value: string;
  industry: string;
  flag: string;
  country: string;
};

const WINS: CaseWin[] = [
  { logo: "logo1.svg", name: "Airportr", desc: "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.", value: "", industry: "Logistics", flag: "UK.svg", country: "UK" },
  { logo: "nomupay.svg", name: "Nomupay", desc: "Nomupay raises €35.9 million to expand unified payments access in Asia market.", value: "€35.9M", industry: "Fintech", flag: "Ireland.svg", country: "Ireland" },
  { logo: "logo3.svg", name: "One Text", desc: "Y Combinator-backed SaaS startup enabling frictionless payments via SMS.", value: "", industry: "Saas", flag: "USA.svg", country: "USA" },
  { logo: "logo4.svg", name: "Shaga", desc: "An emerging leader in cloud gaming, successfully raised $1M in a Pre-Seed funding round. ", value: "$1M", industry: "Web3", flag: "USA.svg", country: "USA" },
  { logo: "DoStuffMedia-1.svg", name: "DoStuffMedia", desc: "A prominent entertainment platform with 2.5 million monthly website visits and 23 million monthly social impressions.", value: "", industry: "Entertainment", flag: "USA.svg", country: "USA" },
  { logo: "logo6.svg", name: "Isora", desc: "A collaborative GRC risk assessment platform trusted by Berkeley, Yale, and other leading institutions. TechStars graduate.", value: "", industry: "Saas", flag: "USA.svg", country: "USA" },
  { logo: "Wisdom.svg", name: "MyWisdom", desc: "After redesign, Wisdom raised $1.3M and partnered with Samsung Health & Galaxy Watch for AI gait and fall-prevention insights.", value: "$1.3M", industry: "HealthTech", flag: "USA.svg", country: "USA" },
  { logo: "logo8.svg", name: "Qurtuba Online", desc: "Recognized as South Africa’s top-performing EdTech institution in 2023.", value: "", industry: "EdTech", flag: "South-Africa.svg", country: "South Africa" },
];

function Divider({ mob }: { mob: boolean }) {
  return (
    <div className={`vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein${mob ? " mob-visible" : ""}`}>
      <span /><span /><span /><span />
    </div>
  );
}

export default function BestCases() {
  return (
    <section className="best_cases pt-200 pt-64-mob">
      <div className="container size-lg ov-hidden">
        <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble">
          Award-Winning Product Design and Development Agency
        </div>
        <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02 mb-40 mb-32-mob">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Our</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.08s" }}>featured</span></span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>client</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>wins</span></span>
        </div>
        <div className="grid col-4 cols_wrap clip_all_sides isview slidetop">
          {WINS.map((w, i) => (
            <Fragment key={w.name}>
              <Divider mob={i % 4 !== 0} />
              <div className="col p-24 bg--white flex v--center h--center">
                <img className="" src={`/images/${w.logo}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                <div className="inner-wrapper flex fd--column">
                  <div className="inner radius-8 p-32 pl-16-mob pt-24-mob pb-24-mob flex fd--column clipped-right-hover">
                    <div className="color--white title title--xs">{w.name}</div>
                    <div className="txt txt--s mt-6 color--white-light">
                      <p>{w.desc}</p>
                    </div>
                    <div className="txt mt-auto pt-24">
                      <div className="title title--xl color--white">{w.value}</div>
                    </div>
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">{w.industry}</span>
                      <span className="tag">
                        <img className="" src={`/images/${w.flag}`} alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                        {w.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mob-visible mobile_link" />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
