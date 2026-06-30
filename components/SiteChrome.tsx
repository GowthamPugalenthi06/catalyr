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
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/login");

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


        {children}

        {footer}
      </div>

      {showreelPopup}
      {siteScripts}
    </>
  );
}
