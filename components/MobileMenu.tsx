const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export default function MobileMenu() {
  return (
    <div className="mobile_menu_wrap flex fd--column">
      <div className="accordions">
        {/* Services */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/services" target="_self">
                  Services <span className="color--dark-tertiary">9</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">All Services</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/services/ai-solutions" target="_self"><span><b>AI Solutions</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/saas-development" target="_self"><span><b>SaaS Development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/web-development" target="_self"><span><b>Web Development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/mobile-app-development" target="_self"><span><b>Mobile App Development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/ui-ux-design" target="_self"><span><b>UI/UX Design</b></span></a></li>
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Strategy & Growth</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/services/mvp-development" target="_self"><span><b>MVP Development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/product-strategy" target="_self"><span><b>Product Strategy</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/automation-solutions" target="_self"><span><b>Automation Solutions</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/services/digital-marketing" target="_self"><span><b>Digital Marketing</b></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/industries" target="_self">
                  Industries <span className="color--dark-tertiary">7</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <ul className="grid gap-24 gap-20-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/industries/saas" target="_self"><span><b>SaaS</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/industries/healthcare" target="_self"><span><b>Healthcare</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/industries/edtech" target="_self"><span><b>EdTech</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/industries/ecommerce" target="_self"><span><b>E-Commerce</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/industries/real-estate" target="_self"><span><b>Real Estate</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/industries/logistics" target="_self"><span><b>Logistics</b></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/work" target="_self">Work</a>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/about" target="_self">
                  Company <span className="color--dark-tertiary">3</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <ul className="grid gap-24 gap-20-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/about" target="_self"><span><b>About Us</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/careers" target="_self"><span><b>Careers</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/partners" target="_self"><span><b>Partnership Programme</b></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/insights" target="_self">Insights</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/contact" target="_self">Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conts_wrap mt-auto pt-20">
        <div className="container">
          <a className="btn btn--dark arr hover--orange fullw size-lg" href="/contact" target="_self">
            <span><b>Get in touch</b></span>
          </a>
          <div className="grid col-2 gap-8 mt-8 socs">
            <a target="_blank" href="https://wa.me/48574758959">
              <img loading="lazy" decoding="async" src="/images/whatsapp.svg" alt="" />
            </a>
            <a target="_blank" href="https://t.me/catalyr">
              <img loading="lazy" decoding="async" src="/images/telegram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
