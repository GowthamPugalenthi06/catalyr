"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AeoSchema() {
  const pathname = usePathname();
  const [schemaData, setSchemaData] = useState<any>(null);

  useEffect(() => {
    // Basic dynamic AEO Schema (JSON-LD) for the whole website
    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://catalyr.com";
    const currentUrl = `${baseUrl}${pathname}`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Catalyr",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/work/icon.png`
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-0000000000",
            "contactType": "customer service",
            "areaServed": ["IN", "US", "Global"],
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/catalyr",
            "https://twitter.com/catalyr"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "Catalyr",
          "publisher": {
            "@id": `${baseUrl}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          "url": currentUrl,
          "inLanguage": "en-US",
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          },
          "about": {
            "@type": "Thing",
            "name": "Product Engineering and Software Development"
          }
        }
      ]
    };

    setSchemaData(schema);
  }, [pathname]);

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
