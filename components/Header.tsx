"use client";

import { usePathname } from "next/navigation";

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export default function Header() {
  const pathname = usePathname();
  const isInsights = pathname === "/insights";
  const isWork = pathname === "/work" || pathname === "/cases";
  const isAbout = pathname === "/about";
  const isPartners = pathname === "/partners";

  return (
    <header className={isInsights || isWork || isPartners ? "always_active button-after-invert" : ""} suppressHydrationWarning>
        <div className="container">
        <div className="flex v--center h--between pt-12 pb-12">
          <a href="/" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="22"
              viewBox="0 0 168 22"
              fill="none"
            >
              <image href="/work/icon.png" x="0" y="1" width="20" height="20" />
              <text x="24" y="17" fill="currentColor" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.02em">Catalyr</text>
            </svg>
          </a>

          <nav>
            <ul className="flex v--center h--center gap-40 gap-16-tablet">
              <li className="menu-item-has-children">
                <a className="" href={"/services"} target="_self">
                  <span>
                    <b>Services</b>
                  </span>
                </a>
                <div className="sub-menu">
                  <div className="fake_container">
                    <div className="flex v--stretch h--between relative sub_menu_content">
                      <div className="left main_sub_menu">
                        <ul className="flex fd--column gap-24 fullw">
                          <li className="active">
                            <a
                              className="btn btn--simple chevron h--between fullw decor-no"
                              href={"/services"}
                              target="_self"
                            >
                              <span>
                                <b>All Services</b>
                              </span>
                            </a>
                            <div className="inner-menu">
                              <div className="inner_flex">
                                <ul className="flex fd--column gap-8">
                                  <li>
                                    <a className="title title--xs color--dark" href={"/services/ai-solutions"} target="_self">
                                      <span><b>AI Solutions</b></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="title title--xs color--dark" href={"/services/saas-development"} target="_self">
                                      <span><b>SaaS Development</b></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="title title--xs color--dark" href={"/services/web-development"} target="_self">
                                      <span><b>Web Development</b></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="title title--xs color--dark" href={"/services/mobile-app-development"} target="_self">
                                      <span><b>Mobile App Development</b></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="title title--xs color--dark" href={"/services/ui-ux-design"} target="_self">
                                      <span><b>UI/UX Design</b></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="flex fd--column gap-24 fullw">
                          <li className="">
                            <a className="btn btn--simple chevron h--between fullw decor-no" href={"/services"} target="_self">
                              <span><b>Strategy & Growth</b></span>
                            </a>
                            <div className="inner-menu">
                              <div className="inner_flex">
                                <ul className="flex fd--column gap-8">
                                  <li><a className="title title--xs color--dark" href={"/services/mvp-development"} target="_self"><span><b>MVP Development</b></span></a></li>
                                  <li><a className="title title--xs color--dark" href={"/services/product-strategy"} target="_self"><span><b>Product Strategy</b></span></a></li>
                                  <li><a className="title title--xs color--dark" href={"/services/automation-solutions"} target="_self"><span><b>Automation Solutions</b></span></a></li>
                                  <li><a className="title title--xs color--dark" href={"/services/digital-marketing"} target="_self"><span><b>Digital Marketing</b></span></a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="img_wrap">
                        <img
                          className="radius-12 fullw"
                          src="/work/branding.png"
                          alt="Services Overview"
                          loading="lazy"
                          decoding="async"
                          style={{ aspectRatio: 1.5260804769001, objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item-has-children">
                <a className="" href="/industries" target="_self">
                  <span><b>Industries</b></span>
                </a>
                <div className="sub-menu">
                  <div className="fake_container">
                    <div className="flex v--stretch h--between relative sub_menu_content">
                      <div className="left main_sub_menu">
                        <div className="inner bg--gray p-24 radius-12 fd--column flex m-12">
                          <div className="title title--m color--dark">Ready to bring your idea to life?</div>
                          <div className="btn-wrap pt-24 mt-auto">
                            <a className="btn btn--orange arr hover--dark" href={`/contact`} target="_self">
                              <span><b>Let’s talk</b></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="center">
                        <div className="inner_flex">
                          <ul className="flex fd--column gap-8">
                            <li><a className="title title--xs color--dark" href="/industries/saas" target="_self"><span><b>SaaS</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/industries/healthcare" target="_self"><span><b>Healthcare</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/industries/edtech" target="_self"><span><b>EdTech</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/industries/ecommerce" target="_self"><span><b>E-Commerce</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/industries/real-estate" target="_self"><span><b>Real Estate</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/industries/logistics" target="_self"><span><b>Logistics</b></span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="img_wrap">
                        <img
                          className="radius-12 fullw"
                          src="/work/ecom.png"
                          alt="Industries Overview"
                          loading="lazy"
                          decoding="async"
                          style={{ aspectRatio: 1.3333333333333, objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="">
                <a className="" href="/work" target="_self">
                  <span><b>Work</b></span>
                </a>
              </li>

              <li className="menu-item-has-children">
                <a className="" href="/about" target="_self">
                  <span><b>Company</b></span>
                </a>
                <div className="sub-menu">
                  <div className="fake_container">
                    <div className="flex v--stretch h--between relative sub_menu_content">
                      <div className="left main_sub_menu">
                        <div className="inner bg--gray p-24 radius-12 fd--column flex m-12">
                          <div className="title title--m color--dark">Build with the best</div>
                          <div className="btn-wrap pt-24 mt-auto">
                            <a className="btn btn--orange arr hover--dark" href={`/careers`} target="_self">
                              <span><b>View Openings</b></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="center">
                        <div className="inner_flex">
                          <ul className="flex fd--column gap-8">
                            <li><a className="title title--xs color--dark" href="/about" target="_self"><span><b>About Us</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/careers" target="_self"><span><b>Careers</b></span></a></li>
                            <li><a className="title title--xs color--dark" href="/partners" target="_self"><span><b>Partnership Programme</b></span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="img_wrap">
                        <img
                          className="radius-12 fullw"
                          src="/work/hrms-web.png"
                          alt="Company"
                          loading="lazy"
                          decoding="async"
                          style={{ aspectRatio: 1.3333333333333, objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="">
                <a className="" href="/insights" target="_self">
                  <span><b>Insights</b></span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="main-btn-wrap">
            <a className="btn btn--white arr arr-right hover--gray-light" href={`/contact`} target="_self">
              <span><b>Let's Talk</b></span>
            </a>
          </div>
          <div className="gam" />
        </div>
      </div>
    </header>
  );
}
