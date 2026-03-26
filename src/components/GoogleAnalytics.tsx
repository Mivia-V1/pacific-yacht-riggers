"use client";

import Script from "next/script";
import { GA4_ID } from "@/lib/constants";

export default function GoogleAnalytics() {
  if (GA4_ID === "G-XXXXXXXXXX") return null; // Don't load until configured

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  );
}
