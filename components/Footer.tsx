"use client";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from 'next/navigation';

const SVC = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const footerBgClass = "";
  const btnClass = "btn btn--simple arr dark";
  const logoColor = "var(--color-dark)";
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => setSettings(data)).catch(() => {});
  }, []);


  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const h = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${h}px`);
      }
    };
    
    // Initial measurement
    updateHeight();
    
    // Setup ResizeObserver for robust tracking (e.g. font loading, viewport changes)
    if (typeof window !== "undefined" && window.ResizeObserver) {
      const ro = new ResizeObserver(updateHeight);
      if (footerRef.current) ro.observe(footerRef.current);
      return () => ro.disconnect();
    } else {
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return (
    <footer ref={footerRef} className={footerBgClass}>
      <div className="footer_top pt-100 pt-60-mob font2">
        <div className="container">
          <div className="grid col-2 col-1-mob left">
            <div className="col grid col-2 col-1-mob gap-40 gap-0-mob footer_menu_wrap">
              <ul id="menu-explore" className="footer_menu grid gap-8 gap-4-mob">
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/services">Services</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/industries">Industries</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/work">Work</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/about">About Us</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/careers">Careers</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/partners">Partners</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/insights">Insights</a></li>
              </ul>
              <div className="col">
                <div className="socs flex v--start h--wrap h--start gap-8 mt-48-mob">
                  {settings?.company?.instagram && (
                    <a href={settings.company.instagram} target="_blank" rel="nofollow"><img className="" src="/images/instagram.svg" alt="Instagram" loading="lazy" decoding="async" /></a>
                  )}
                  {settings?.company?.linkedin && (
                    <a href={settings.company.linkedin} target="_blank" rel="nofollow"><img className="" src="/images/linkedin.svg" alt="LinkedIn" loading="lazy" decoding="async" /></a>
                  )}
                  {settings?.company?.twitter && (
                    <a href={settings.company.twitter} target="_blank" rel="nofollow"><img className="" src="/images/twitter.svg" alt="Twitter" loading="lazy" decoding="async" /></a>
                  )}
                </div>
              </div>
            </div>
            <div className="col right mt-48-mob">
              <div className="grid col-2 col-1-mob gap-8 countries">
                <a href="/about" target="_blank" className="country_link p-24 p-16-mob radius-8" style={{ gridColumn: 'span 2' }}>
                  <img className="" src="/images/downloaded/in.svg" alt="India Flag" loading="lazy" decoding="async" style={{ aspectRatio: 1.475, borderRadius: '4px' }} />
                  <div className="mt-24 mt-16-mob">
                    <span className="btn h--between arr btn--simple dark fullw decor-no">
                      <span>{settings?.company?.location || "Salem, Tamilnadu, India"}</span>
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
          <div className="flex v--center h--between pb-6 menus_wrap">
            <div className="left uppercase">
              <ul id="menu-legacy" className="flex v--center h--start h--wrap gap-12 fw-600">
                <li id="menu-item-16638" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16638"><a href={`${SVC}/terms-of-use/`}>Terms of Use</a></li>
                <li id="menu-item-16637" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16637"><a href={`${SVC}/privacy-policy/`}>Privacy Policy</a></li>
                <li id="menu-item-16636" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16636"><a rel="privacy-policy" href={`${SVC}/cookies-policy/`}>Cookies policy</a></li>
              </ul>
            </div>
            <div className="right flex v--center gap-24">
              <div className="txt txt--control-m fw-600 uppercase font2">Catalyr Inc. © 2026</div>
              <div className="logo" style={{ color: logoColor, opacity: 0.8 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="16"
                  viewBox="0 0 168 22"
                  fill="none"
                >
                  <image href="/work/icon.png" x="0" y="1" width="20" height="20" />
                  <text x="24" y="17" fill="currentColor" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.02em">Catalyr</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="accordions">
          <div className="accordion">
            <div className="container">
              <div className="top">
                <a className="title title--xs color--inherit" href="/services" target="_self">
                  All services <span className="color--dark-tertiary">9</span>
                </a>
              </div>
              <div className="bottom">
                <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className={btnClass} href="/services/ai-solutions" target="_self"><span><b>AI Solutions</b></span></a></li>
                      <li><a className={btnClass} href="/services/saas-development" target="_self"><span><b>SaaS Development</b></span></a></li>
                      <li><a className={btnClass} href="/services/web-development" target="_self"><span><b>Web Development</b></span></a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className={btnClass} href="/services/mobile-app-development" target="_self"><span><b>Mobile App Development</b></span></a></li>
                      <li><a className={btnClass} href="/services/ui-ux-design" target="_self"><span><b>UI/UX Design</b></span></a></li>
                      <li><a className={btnClass} href="/services/mvp-development" target="_self"><span><b>MVP Development</b></span></a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="grid gap-24 gap-20-mob">
                      <li><a className={btnClass} href="/services/product-strategy" target="_self"><span><b>Product Strategy</b></span></a></li>
                      <li><a className={btnClass} href="/services/automation-solutions" target="_self"><span><b>Automation Solutions</b></span></a></li>
                      <li><a className={btnClass} href="/services/digital-marketing" target="_self"><span><b>Digital Marketing</b></span></a></li>
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
