import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Catalyr",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main>
      <section className="hero bg--dark checker-header" style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="container color--white text--center" style={{ textAlign: "center", margin: "0 auto" }}>
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble section-alt">
            <div>ERROR 404</div>
          </div>
          
          <div className="title title--xl mw1040 isview slidetop trd02 new-animate" style={{ margin: "0 auto" }}>
            <h2>
              <span className="a-word"><span style={{ transitionDelay: "0s" }}>Page</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Not</span></span>{" "}
              <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>Found.</span></span>
            </h2>
          </div>
          
          <div className="txt--lead inner-inherit font1 isview slidetop mt-24 mb-40" style={{ maxWidth: "600px", margin: "24px auto 40px auto" }}>
            <div>
              <p>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
              </p>
            </div>
          </div>
          
          <div className="flex v--center h--center fd--column-mob isview slidetop trd04" style={{ justifyContent: "center", gap: "16px" }}>
            <Link href="/" className="btn btn--orange hover--white btn--lg-desk arr arr-right">
              <span><b>Back to Home</b></span>
            </Link>
            <Link href="/services" className="btn btn--white-light arr arr-right hover--white btn--lg-desk">
              <span><b>Our Services</b></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
