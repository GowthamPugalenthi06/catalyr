import React from "react";
import AnimatedWords from "@/components/AnimatedWords";

export default function AppCaseStudyPage() {
  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section className="hero bg--dark checker-header pt-200 pb-100 pt-100-mob pb-50-mob">
        <div className="container color--white">
          <div className="txt txt--caption-m uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble section-alt">
            <h1>Case Study</h1>
          </div>
          <div className="nobr-mob title title--xl mw1040 isview slidetop trd02 new-animate">
            <AnimatedWords words={["How", "we", "built", "a", "working", "mobile", "app", "in", "5", "days"]} />
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>Delivered as a working iOS/Android app. Zero debt architecture with 100% proprietary code ownership.</div>
          </div>
        </div>
      </section>

      {/* Client & Before Section */}
      <section className="bg--white pt-100 pb-100 pt-50-mob pb-50-mob">
        <div className="container">
          <div className="grid col-2 col-1-mob gap-80 gap-40-mob">
            <div className="col isview slidetop">
              <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24"><h2>The Client</h2></div>
              <div className="txt txt--lead color--dark">
                <p>Disha is an ambitious business founder based in India. She had an idea for a mobile app to streamline her operations but no technical team and no development timeline.</p>
              </div>
            </div>
            <div className="col isview slidetop trd02">
              <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24"><h2>Before</h2></div>
              <ul className="txt txt--l color--dark-secondary gap-16 flex fd--column">
                <li className="flex v--center gap-12">
                  <span className="color--orange">✕</span> No app existed
                </li>
                <li className="flex v--center gap-12">
                  <span className="color--orange">✕</span> Core operations and data management were handled manually
                </li>
                <li className="flex v--center gap-12">
                  <span className="color--orange">✕</span> No technical co-founder or dev team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="bg--dark pt-150 pb-150 pt-80-mob pb-80-mob radius-80 radius-32-mob">
        <div className="container color--white">
          <div className="txt txt--caption-m color--orange uppercase fw-600 mb-24 isview slidetop"><h2>What we built</h2></div>
          <div className="title title--l isview slidetop mt-24 mb-64 mb-32-mob">
            A comprehensive, cross-platform mobile solution tailored for speed and scale.
          </div>
          <div className="grid col-2 col-1-mob gap-40">
            <div className="col isview slidetop bg--dark-light p-40 p-24-mob radius-24">
              <div className="title title--s mb-16">Secure Authentication</div>
              <div className="txt txt--m color--white-secondary">Secure user authentication and profile management system protecting sensitive operational data.</div>
            </div>
            <div className="col isview slidetop trd02 bg--dark-light p-40 p-24-mob radius-24">
              <div className="title title--s mb-16">Real-Time Data</div>
              <div className="txt txt--m color--white-secondary">Interactive interface designed for real-time data logging and instant synchronization.</div>
            </div>
            <div className="col isview slidetop trd03 bg--dark-light p-40 p-24-mob radius-24">
              <div className="title title--s mb-16">Cloud Backend</div>
              <div className="txt txt--m color--white-secondary">Robust, cloud-synchronized backend database ensuring high availability and secure storage.</div>
            </div>
            <div className="col isview slidetop trd04 bg--dark-light p-40 p-24-mob radius-24">
              <div className="title title--s mb-16">Cross-Platform</div>
              <div className="txt txt--m color--white-secondary">Cross-platform mobile UI optimized for both operating systems (iOS and Android) with a zero-debt architecture.</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Did It Section */}
      <section className="bg--white pt-150 pb-150 pt-80-mob pb-80-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24 isview slidetop"><h2>How we did it in 5 days</h2></div>
          
          <div className="grid col-4 col-1-mob gap-32 mt-64 mt-32-mob">
            <div className="col isview slidetop">
              <div className="title title--m color--orange mb-16">Day 1</div>
              <div className="title title--s mb-12">Scope + Wireframes</div>
              <div className="txt txt--m color--dark-secondary">Agreed on the core scope and mapped out complete wireframes for the user journey.</div>
            </div>
            <div className="col isview slidetop trd02">
              <div className="title title--m color--orange mb-16">Day 2–3</div>
              <div className="title title--s mb-12">Core Features</div>
              <div className="txt txt--m color--dark-secondary">Engineered the primary functionality, authentication, and database connections.</div>
            </div>
            <div className="col isview slidetop trd03">
              <div className="title title--m color--orange mb-16">Day 4</div>
              <div className="title title--s mb-12">UI Polish + Testing</div>
              <div className="txt txt--m color--dark-secondary">Refined the interface aesthetics and conducted rigorous cross-platform testing.</div>
            </div>
            <div className="col isview slidetop trd04">
              <div className="title title--m color--orange mb-16">Day 5</div>
              <div className="title title--s mb-12">Final Delivery</div>
              <div className="txt txt--m color--dark-secondary">Handed over the working application to the client with 100% proprietary code ownership.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="bg--gray pt-150 pb-150 pt-80-mob pb-80-mob">
        <div className="container">
          <div className="grid col-2 col-1-mob gap-80 gap-40-mob v--center">
            <div className="col isview slidetop">
              <div className="txt txt--caption-m color--orange uppercase fw-600 mb-24"><h2>The Result</h2></div>
              <div className="title title--l color--dark mb-32">
                Working mobile app. 5 days. Zero cost to client.
              </div>
              <div className="txt txt--l color--dark-secondary mb-48">
                From an idea to a fully functioning application in under a week, empowering Disha to run her operations smoothly without the overhead of a technical team.
              </div>
            </div>
            <div className="col isview slidetop trd02 text--center">
              <div className="txt txt--caption-m color--dark-light uppercase fw-600 mb-24 text--left"><h2>Her words</h2></div>
              <div className="media_wrap radius-24 ov-hidden" style={{ maxWidth: "320px", margin: "0 auto", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                <video 
                  className="fullw" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  src="/testimonials/Disha_Client.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta mt-150 mb-150 mt-80-mob mb-80-mob bg--white">
        <div className="container">
          <div className="cta_content text--center bg--dark radius-40 p-80 p-32-mob color--white isview slidetop">
            <div className="title title--l mb-32">Want the same result?</div>
            <div className="txt txt--l color--white-secondary mb-48 mw706" style={{ margin: "0 auto" }}>
              Book a 15-minute app strategy call and discover how we can build your dream application in record time.
            </div>
            <a href="https://calendly.com/gowthamp990/15-minute-app-strategy-call-catalyr" target="_blank" rel="noopener noreferrer" className="btn btn--orange mt-30 btn--lg-desk hover--white arr arr-right">
              <span><b>Book a 15-min call</b></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
