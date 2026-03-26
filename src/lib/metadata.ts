import { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_FJ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Professional Yacht Rigging in the South Pacific`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "yacht rigging",
    "South Pacific rigging",
    "Fiji yacht rigging",
    "Tonga rigging services",
    "Vanuatu yacht rigging",
    "standing rigging",
    "running rigging",
    "mast inspection",
    "furler servicing",
    "sailboat rigging",
    "marine rigging Fiji",
    "Pacific yacht services",
    "cruiser rigging services",
    "rig inspection South Pacific",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_FJ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Professional Yacht Rigging in the South Pacific`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pacific Yacht Rigging Services — South Pacific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Professional Yacht Rigging in the South Pacific`,
    description: SITE_DESCRIPTION,
  },
};
