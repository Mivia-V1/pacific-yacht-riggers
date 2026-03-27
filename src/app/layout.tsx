import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import {
  getLocalBusinessSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#102a43" />
        <GoogleAnalytics />
      </head>
      <body className="bg-white text-navy-900 font-sans antialiased">
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
