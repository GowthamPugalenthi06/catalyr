"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface SiteChromeProps {
  children: React.ReactNode;
  header: React.ReactNode;
  mobileMenu: React.ReactNode;
  footer: React.ReactNode;
  showreelPopup: React.ReactNode;
  siteScripts: React.ReactNode;
}

export function SiteChrome({
  children,
  header,
  mobileMenu,
  footer,
  showreelPopup,
  siteScripts,
}: SiteChromeProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    // Admin pages: render children directly without site header/footer
    return <>{children}</>;
  }

  // Regular pages: full site chrome
  return (
    <>
      <div id="app">
        {header}
        {mobileMenu}

        <div className="favicons-wrap" style={{ display: "none" }}>
          <img src="/images/logo_00000.png.webp" alt="" />
          <img src="/images/logo_00001.png.webp" alt="" />
          <img src="/images/logo_00002.png.webp" alt="" />
          <img src="/images/logo_00003.png.webp" alt="" />
          <img src="/images/logo_00004.png.webp" alt="" />
          <img src="/images/logo_00005.png.webp" alt="" />
          <img src="/images/logo_00006.png.webp" alt="" />
          <img src="/images/logo_00007.png" alt="" />
          <img src="/images/logo_00008.png.webp" alt="" />
          <img src="/images/logo_00009.png.webp" alt="" />
        </div>

        {children}

        {footer}
      </div>

      {showreelPopup}
      {siteScripts}
    </>
  );
}
