const SVC = "https://phenomenonstudio.com";

export default function Footer() {
  return (
    <footer className="">
      <div className="footer_top pt-100 pt-60-mob font2">
        <div className="container">
          <div className="grid col-2 col-1-mob left">
            <div className="col grid col-2 col-1-mob gap-40 gap-0-mob footer_menu_wrap isview slidetop">
              <ul id="menu-explore" className="footer_menu grid gap-8 gap-4-mob">
                <li id="menu-item-18444" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18444"><a href={`${SVC}/services/`}>Services</a></li>
                <li id="menu-item-18445" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18445"><a href={`${SVC}/projects/`}>Cases</a></li>
                <li id="menu-item-29371" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29371"><a href="/about-us">About us</a></li>
                <li id="menu-item-18448" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18448"><a href="/career">Career</a></li>
                <li id="menu-item-28893" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28893"><a href={`${SVC}/pricing/`}>Pricing</a></li>
                <li id="menu-item-18449" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18449"><a href={`${SVC}/blog/`}>Blog</a></li>
              </ul>
              <div className="col">
                <div className="socs flex v--start h--wrap h--start gap-8 isview slidetop mt-48-mob">
                  <a href="https://www.behance.net/phenomenon-studio" target="_blank" rel="nofollow"><img className="" src="/images/behance.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                  <a href="https://dribbble.com/phenomenonstudio" target="_blank" rel="nofollow"><img className="" src="/images/dribbble.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                  <a href="https://www.instagram.com/phenomenon__studio" target="_blank" rel="nofollow"><img className="" src="/images/instagram.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                  <a href="https://www.linkedin.com/company/26241149" target="_blank" rel="nofollow"><img className="" src="/images/linkedin.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                  <a href="https://www.facebook.com/phenomenonstudio" target="_blank" rel="nofollow"><img className="" src="/images/facebook.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                  <a href="https://x.com/Phenomenon_inc" target="_blank" rel="nofollow"><img className="" src="/images/twitter.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" /></a>
                </div>
              </div>
            </div>
            <div className="col right mt-48-mob isview slidetop">
              <div className="grid col-2 col-1-mob gap-8 countries">
                <a href="/about-us" target="_blank" className="country_link p-24 p-16-mob radius-8">
                  <img className="" src="/images/estonia.png.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.475 }} />
                  <div className="mt-24 mt-16-mob">
                    <span className="btn h--between arr btn--simple dark fullw decor-no">
                      <span>Estonia, Tallinn</span>
                    </span>
                  </div>
                </a>
                <a href={`${SVC}/article/phenomenon-legal-entity-switzerland/`} target="_blank" className="country_link p-24 p-16-mob radius-8">
                  <img className="" src="/images/sz.png.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.45 }} />
                  <div className="mt-24 mt-16-mob">
                    <span className="btn h--between arr btn--simple dark fullw decor-no">
                      <span>Switzerland, Lugano</span>
                    </span>
                  </div>
                </a>
                <a href="/about-us" target="_blank" className="country_link p-24 p-16-mob radius-8">
                  <img className="" src="/images/usa.png.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.45 }} />
                  <div className="mt-24 mt-16-mob">
                    <span className="btn h--between arr btn--simple dark fullw decor-no">
                      <span>USA, Dover</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_center pt-100 pt-48-mob">
        <div className="container">
          <div className="flex v--center h--between pb-6 menus_wrap isview slidetop">
            <div className="left uppercase">
              <ul id="menu-legacy" className="flex v--center h--start h--wrap gap-12 fw-600">
                <li id="menu-item-16638" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16638"><a href={`${SVC}/terms-of-use/`}>Terms of Use</a></li>
                <li id="menu-item-16637" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16637"><a href={`${SVC}/privacy-policy/`}>Privacy Policy</a></li>
                <li id="menu-item-16636" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16636"><a rel="privacy-policy" href={`${SVC}/cookies-policy/`}>Cookies policy</a></li>
              </ul>
            </div>
            <div className="right">
              <div className="txt txt--control-m fw-600 uppercase font2">Phenomenon © 2026</div>
            </div>
          </div>
        </div>

        <div className="mt-40 mt-24-mob ratings_wrap isview slidetop">
          <div className="container pl-0-mob pr-0-mob">
            <div className="grid col-6 col-2-mob">
              <a href={`${SVC}/article/raising-the-bar-for-data-security-phenomenon-hipaa-gdpr-certified/`} target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/footer.png.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.1323529411765 }} />
              </a>
              <a href="https://www.nngroup.com" target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/NNG-UX-Certificate-1096863-Vashchenko_A4-1.png" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 1.1538461538462 }} />
              </a>
              <a href="https://www.50pros.com/top-50/mobile-app-development" target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/Product-Development-Design-1-1.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </a>
              <a href="https://webflow.com/@phenomenons-workspace" target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/webflow-rating.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </a>
              <a href="https://www.designrush.com/agency/profile/phenomenon-studio" target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/Frame-1686558327-1.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </a>
              <a href="https://clutch.co/profile/phenomenon-studio" target="_blank" className="col flex v--center h--center p-24">
                <img className="" src="/images/Frame-1686558328.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="accordions">
          <div className="accordion isview fadein">
            <div className="container">
              <div className="top">
                <a className="title title--xs color--inherit" href={`${SVC}/services/`} target="_self">
                  All services <span className="color--dark-tertiary">21</span>
                </a>
              </div>
              <div className="bottom">
                <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/ux-design-audit/`} target="_self"><span><b>UX Design Audit</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/product-redesign/`} target="_self"><span><b>Product Redesign</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/blockchain-development-services/`} target="_self"><span><b>Blockchain Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/no-code-app-development/`} target="_self"><span><b>No-Code Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-redesign-services/`} target="_self"><span><b>Website Redesign</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-development-agency/`} target="_self"><span><b>Website Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/product-design/`} target="_self"><span><b>Product Design</b></span></a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/mobile-app-development-services/`} target="_self"><span><b>Mobile App Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/web-app-design/`} target="_self"><span><b>Web App Design</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/website-design-services/`} target="_self"><span><b>Website Design Services</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/rapid-mvp-development/`} target="_self"><span><b>Rapid MVP Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/team-extension/`} target="_self"><span><b>Team Extension</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/design-prototype/`} target="_self"><span><b>Design Prototype</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/ai-chatbot-development-services/`} target="_self"><span><b>AI Chatbot Development</b></span></a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/custom-mvp-software-development/`} target="_self"><span><b>Custom MVP Development</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/tech-workshop/`} target="_self"><span><b>Technical Workshop</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/dedicated-software-developmen-team/`} target="_self"><span><b>Dedicated Team</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/branding-services/`} target="_self"><span><b>Branding</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/service/product-discovery/`} target="_self"><span><b>Product Discovery</b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/ui-ux-design-services/`} target="_self"><span><b>UX/UI Design </b></span></a></li>
                      <li><a className="btn btn--simple arr dark" href={`${SVC}/agriculture-design/`} target="_self"><span><b>Agriculture Design</b></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
