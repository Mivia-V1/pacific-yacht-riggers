"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const GA4_ID = "G-C78T6B4P4R";

export default function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA4_ID);
    };
  }, []);

  return null;
}
