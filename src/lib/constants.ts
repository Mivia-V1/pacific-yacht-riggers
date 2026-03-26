export const SITE_NAME = "Pacific Yacht Rigging Services";
export const SITE_URL = "https://pacificyachtriggers.com";
export const SITE_DESCRIPTION =
  "Professional yacht rigging services across the South Pacific. Standing and running rigging, mast inspections, furler servicing, and custom fabrication in Fiji, Tonga, and Vanuatu.";
export const SITE_TAGLINE = "For All Your Rigging Needs";

export const CONTACT = {
  phone: "+679 7090091",
  phoneHref: "tel:+6797090091",
  whatsapp: "+61 405084832",
  whatsappHref: "https://wa.me/61405084832",
  email: "pyriggingservices@gmail.com",
  chiefRigger: "Sammy",
  title: "Chief Rigger",
} as const;

export const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID"; // TODO: Replace with actual Formspree endpoint

export const GA4_ID = "G-XXXXXXXXXX"; // TODO: Replace with actual GA4 Measurement ID

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "standing-rigging",
    title: "Standing Rigging",
    summary:
      "Complete inspection, repair, and replacement of shrouds, stays, and structural rigging components.",
    description:
      "[PLACEHOLDER: Detailed description of standing rigging services including wire rope inspection, swage fitting assessment, turnbuckle servicing, and full rig replacements. Mention brands/materials used.]",
    icon: "anchor",
  },
  {
    id: "running-rigging",
    title: "Running Rigging",
    summary:
      "Halyards, sheets, and control lines — supply, splicing, and replacement for peak sail performance.",
    description:
      "[PLACEHOLDER: Detailed description of running rigging services including halyard replacement, sheet splicing, clutch servicing, and line selection guidance.]",
    icon: "wind",
  },
  {
    id: "mast-inspection",
    title: "Mast & Spar Inspection",
    summary:
      "Thorough masthead-to-deck inspections identifying wear, corrosion, and potential failure points.",
    description:
      "[PLACEHOLDER: Detail the mast inspection process — visual inspection, non-destructive testing, spreader checks, halyard sheave inspection, mast step and partners examination.]",
    icon: "search",
  },
  {
    id: "furler-servicing",
    title: "Furler Servicing",
    summary:
      "Professional servicing and repair of headsail and in-mast furling systems from all major brands.",
    description:
      "[PLACEHOLDER: Describe furler servicing including bearing replacement, drum servicing, foil section repair, and specific brand experience (Profurl, Harken, Facnor, etc.).]",
    icon: "settings",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    summary:
      "Bespoke stainless steel and rigging hardware fabrication for unique vessel requirements.",
    description:
      "[PLACEHOLDER: Detail custom fabrication capabilities — chainplate fabrication, custom tangs, bespoke fittings, backstay adjusters, and any welding/metalwork capabilities.]",
    icon: "wrench",
  },
  {
    id: "pre-purchase-survey",
    title: "Pre-Purchase Rig Survey",
    summary:
      "Independent rigging assessments for yacht buyers — know the true condition before you commit.",
    description:
      "[PLACEHOLDER: Describe the pre-purchase survey process, what's included in the report, typical turnaround time, and how this protects buyers in the yacht market.]",
    icon: "clipboard",
  },
] as const;

export const LOCATIONS = [
  {
    id: "fiji",
    name: "Fiji",
    tagline: "Our Home Base — Vuda Point Marina & Denarau",
    description:
      "[PLACEHOLDER: Describe Fiji operations — primary base at Vuda Point Marina, services available at Port Denarau Marina, coverage across Viti Levu. Mention proximity to major cruising routes, haul-out facilities, chandleries. Describe typical clients — bluewater cruisers, charter fleets, local yacht owners.]",
    highlights: [
      "Vuda Point Marina — primary workshop",
      "Port Denarau Marina coverage",
      "Year-round service availability",
      "Central South Pacific location",
    ],
  },
  {
    id: "tonga",
    name: "Tonga",
    tagline: "Seasonal Service — Vava'u & Nuku'alofa",
    description:
      "[PLACEHOLDER: Describe Tonga operations — seasonal availability aligned with cruising season (May–November), services at Vava'u (The Moorings area) and Nuku'alofa. Mention the popularity of Vava'u as a cruising destination and the lack of local rigging services.]",
    highlights: [
      "Vava'u seasonal base (May–Nov)",
      "Nuku'alofa by arrangement",
      "Whale season cruiser support",
      "On-site at popular anchorages",
    ],
  },
  {
    id: "vanuatu",
    name: "Vanuatu",
    tagline: "On-Call Service — Port Vila",
    description:
      "[PLACEHOLDER: Describe Vanuatu operations — on-call basis, Port Vila focus, service at the main marina. Mention Vanuatu's position on the coconut milk run, cyclone damage repair capabilities, and coordination with local haul-out facilities.]",
    highlights: [
      "Port Vila marina coverage",
      "Cyclone damage response",
      "Coconut milk run support",
      "Fly-in service by arrangement",
    ],
  },
] as const;
