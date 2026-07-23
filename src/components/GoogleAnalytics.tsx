"use client";

import { useEffect } from "react";
import { GA4_ID } from "@/lib/constants";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);

    if (document.getElementById("google-analytics")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "google-analytics";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
