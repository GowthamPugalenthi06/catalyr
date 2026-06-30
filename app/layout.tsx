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
import AeoSchema from "@/components/AeoSchema";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  title: "Catalyr - End-to-End Product Engineering & Transformation",
  description: "Catalyr helps global enterprises and fast-growing startups build, scale, and transform their digital products. We deliver top-tier engineering across SaaS, Mobile, EdTech, FinTech, and Enterprise Solutions.",
  keywords: ["Product Engineering", "Digital Transformation", "Custom Software Development", "SaaS Development", "Mobile App Development", "Tech Consulting"],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/` },
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
    title: "Design Agency | Product Design and Development - Catalyr",
    description:
      "Product design and development agency building market-ready apps for startups and enterprises. Explore Catalyr's case studies.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/`,
    siteName: "Catalyr",
    images: [
      { url: "/images/main-5_1.gif", width: 1200, height: 630, type: "image/gif" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@catalyrstud1",
  },
  icons: {
    icon: [
      { url: "/work/icon.png", sizes: "32x32" },
      { url: "/work/icon.png", sizes: "192x192" },
    ],
    apple: "/work/icon.png",
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
        <Script
          id="bis-skin-remover"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
          `
          }}
        />
        <AeoSchema />
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
