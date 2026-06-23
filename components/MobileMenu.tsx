const SVC = "https://phenomenonstudio.com";

export default function MobileMenu() {
  return (
    <div className="mobile_menu_wrap flex fd--column">
      <div className="accordions">
        {/* Services */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href={`${SVC}/services/`} target="_self">
                  Services <span className="color--dark-tertiary">30</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Design</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/web-app-design/`} target="_self"><span><b>Web design</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/mobile-app-design/`} target="_self"><span><b>Mobile design</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-design-services/`} target="_self"><span><b>Website design</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-redesign-services/`} target="_self"><span><b>Website redesign</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/branding-services/`} target="_self"><span><b>Branding & identity</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/design-prototype/`} target="_self"><span><b>Design prototype</b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Development</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/web-development-services/`} target="_self"><span><b>Web development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/mobile-app-development-services/`} target="_self"><span><b>Mobile development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-development-agency/`} target="_self"><span><b>Website development </b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/ai-development-services/`} target="_self"><span><b>AI development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/custom-software-development-company/`} target="_self"><span><b>Custom software development</b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Research</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/product-discovery/`} target="_self"><span><b>Product discovery</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/ux-design-audit/`} target="_self"><span><b>UX audit</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/tech-workshop/`} target="_self"><span><b>Technical workshop</b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Launch</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/design-prototype/`} target="_self"><span><b>Design prototype</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/product-discovery/`} target="_self"><span><b>Product discovery</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/rapid-mvp-development/`} target="_self"><span><b>Rapid MVP development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/custom-mvp-software-development/`} target="_self"><span><b>Custom MVP development</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/ai-development-services/`} target="_self"><span><b>AI development</b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Evolve</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/ux-design-audit/`} target="_self"><span><b>UX audit</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/product-redesign/`} target="_self"><span><b>Product redesign</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/web-app-design/`} target="_self"><span><b>Web app design</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/web-development-services/`} target="_self"><span><b>Web app development </b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/mobile-app-design/`} target="_self"><span><b>Mobile app design</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/mobile-app-development-services/`} target="_self"><span><b>Mobile app development </b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Rebrand</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/branding-and-identity-services/`} target="_self"><span><b>Branding & identity</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-redesign-services/`} target="_self"><span><b>Website redesign</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-development-agency/`} target="_self"><span><b>Website development</b></span></a></li>
                    <li />
                  </ul>
                </div>
                <div className="col">
                  <div className="txt txt--control-m color--dark-light fw-600 uppercase">Extend</div>
                  <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/team-extension/`} target="_self"><span><b>Team extension</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href={`${SVC}/service/dedicated-software-development-team/`} target="_self"><span><b>Dedicated team</b></span></a></li>
                    <li />
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
                <a className="color--inherit" href="#" target="_self">
                  Industries <span className="color--dark-tertiary">4</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <ul className="grid gap-24 gap-20-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/saas" target="_self"><span><b>Saas</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/healthcare" target="_self"><span><b>Healthcare</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/fintech" target="_self"><span><b>Fintech</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/edtech" target="_self"><span><b>Edtech</b></span></a></li>
                    <li />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="/cases" target="_self">Cases</a>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="accordion">
          <div className="container">
            <div className="top">
              <div className="title title--s color--dark">
                <a className="color--inherit" href="#" target="_self">
                  Company <span className="color--dark-tertiary">2</span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                <div className="col">
                  <ul className="grid gap-24 gap-20-tablet pl-16-tablet">
                    <li><a className="btn btn--simple arr dark" href="/about-us" target="_self"><span><b>About us</b></span></a></li>
                    <li><a className="btn btn--simple arr dark" href="/career" target="_self"><span><b>Careers</b></span></a></li>
                    <li />
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
                <a className="color--inherit" href={`${SVC}/contact-us/`} target="_self">Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conts_wrap mt-auto pt-20">
        <div className="container">
          <a className="btn btn--dark arr hover--orange fullw size-lg" href={`${SVC}/contact-us/`} target="_self">
            <span><b>Get in touch</b></span>
          </a>
          <div className="grid col-2 gap-8 mt-8 socs">
            <a target="_blank" href="https://wa.me/48574758959">
              <img loading="lazy" decoding="async" src="/images/whatsapp.svg" alt="" />
            </a>
            <a target="_blank" href="https://t.me/phenomenonstudio">
              <img loading="lazy" decoding="async" src="/images/telegram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
