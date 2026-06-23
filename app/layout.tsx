import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import ShowreelPopup from "@/components/ShowreelPopup";
import SiteScripts from "./SiteScripts";
import { SiteChrome } from "@/components/SiteChrome";
import Script from "next/script";
import { HydrationWarningSuppressor } from "@/components/HydrationWarningSuppressor";
export const metadata: Metadata = {
  metadataBase: new URL("https://phenomenonstudio.com"),
  title: "Design Agency | Product Design and Development - Phenomenon",
  description:
    "Product design and development agency building market-ready apps for startups and enterprises. Explore Phenomenon's case studies.",
  alternates: { canonical: "https://phenomenonstudio.com/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Design Agency | Product Design and Development - Phenomenon",
    description:
      "Product design and development agency building market-ready apps for startups and enterprises. Explore Phenomenon's case studies.",
    url: "https://phenomenonstudio.com/",
    siteName: "Phenomenon",
    images: [
      { url: "/images/main-5_1.gif", width: 1200, height: 630, type: "image/gif" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@phenomenonstud1",
  },
  icons: {
    icon: [
      { url: "/images/cropped-logo_00009-32x32.png", sizes: "32x32" },
      { url: "/images/cropped-logo_00009-192x192.png", sizes: "192x192" },
    ],
    apple: "/images/cropped-logo_00009-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="disable-scrollbar" translate="no" suppressHydrationWarning={true}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="preload"
          href="/fonts/AlbertSans-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BricolageGrotesque-VariableFont_opsz.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Original site stylesheet, served verbatim from /public/css. */}
        <link rel="stylesheet" href="/css/main.css" media="all" />
        <Script id="bis-skin-remover" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const origSetAttr = Element.prototype.setAttribute;
                Element.prototype.setAttribute = function(name, value) {
                  if (typeof name === 'string' && (name === 'bis_skin_checked' || name.startsWith('bis_') || name.startsWith('__processed'))) {
                    return;
                  }
                  origSetAttr.apply(this, arguments);
                };

                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes') {
                      const name = mutation.attributeName;
                      if (name && (name === 'bis_skin_checked' || name.startsWith('bis_') || name.startsWith('__processed'))) {
                        mutation.target.removeAttribute(name);
                      }
                    }
                  });
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  subtree: true
                });
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="disable-scrollbar loaded" id="top" suppressHydrationWarning={true}>
        <div id="progress-bar-wrapper" className="invisible">
          <div id="progress-bar" />
        </div>
        <HydrationWarningSuppressor />

        <SiteChrome
          header={<Header />}
          mobileMenu={<MobileMenu />}
          footer={<Footer />}
          showreelPopup={<ShowreelPopup />}
          siteScripts={<SiteScripts />}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
