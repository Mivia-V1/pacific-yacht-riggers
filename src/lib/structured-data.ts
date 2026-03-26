import { SITE_NAME, SITE_URL, CONTACT, SERVICES } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      "Professional yacht rigging services across the South Pacific — Fiji, Tonga, and Vanuatu. Standing and running rigging, mast inspections, furler servicing, and custom fabrication.",
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vuda Point",
      addressRegion: "Western Division",
      addressCountry: "FJ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.6868,
      longitude: 177.3854,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Fiji",
      },
      {
        "@type": "Country",
        name: "Tonga",
      },
      {
        "@type": "Country",
        name: "Vanuatu",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "17:00",
    },
    sameAs: [
      // TODO: Add social media URLs
    ],
  };
}

export function getServiceSchemas() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "Fiji" },
      { "@type": "Country", name: "Tonga" },
      { "@type": "Country", name: "Vanuatu" },
    ],
    url: `${SITE_URL}/services#${service.id}`,
  }));
}

export function getBlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: CONTACT.chiefRigger,
      jobTitle: CONTACT.title,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
