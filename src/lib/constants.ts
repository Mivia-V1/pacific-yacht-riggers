export const SITE_NAME = "Pacific Yacht Rigging Services";
export const SITE_URL = "https://pacificyachtrigging.com";
export const SITE_DESCRIPTION =
  "Professional yacht rigging services across the South Pacific. Standing and running rigging, mast inspections, furler servicing, and custom fabrication in Fiji, Tonga, and Vanuatu.";
export const SITE_TAGLINE = "For All Your Rigging Needs";

export const CONTACT = {
  phone: "+679 7090091",
  phoneHref: "tel:+6797090091",
  whatsapp: "+61 405084832",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=61405084832&text=Hi%2C%20I%27m%20interested%20in%20your%20rigging%20services.",
  email: "pyriggingservices@gmail.com",
  chiefRigger: "Sammy",
  title: "Chief Rigger",
  facebook: "https://www.facebook.com/people/Pacific-Yacht-Rigging-Services/61550059473082/",
} as const;

export const FORMSPREE_URL = "https://formspree.io/f/mvzvgagn";

export const GA4_ID = "G-C78T6B4P4R";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Deliveries", href: "/yacht-deliveries" },
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
      "We inspect the complete standing-rigging load path, including wire, terminals, turnbuckles, toggles, chainplates, mast fittings, and deck attachments. Whether you need a condition assessment, an individual stay replaced, or a complete re-rig, we explain what we find and recommend work in order of safety and priority.",
    image: "/service-standing-rigging.jpg",
    imageAlt: "Yacht rigger working aloft on standing rigging",
    icon: "anchor",
  },
  {
    id: "running-rigging",
    title: "Running Rigging",
    summary:
      "Halyards, sheets, and control lines — supply, splicing, and replacement for peak sail performance.",
    description:
      "We replace halyards, sheets, reefing lines, control lines, and other running rigging, with splicing and finishing to suit your deck layout. We can also trace stiffness, chafe, and poor handling through sheaves, clutches, blocks, and lead angles, then help select line that fits the load and the way you sail.",
    image: "/service-running-rigging.jpg",
    imageAlt: "Finished spliced running rigging lines with protective thimbles",
    icon: "wind",
  },
  {
    id: "mast-inspection",
    title: "Mast & Spar Inspection",
    summary:
      "Thorough masthead-to-deck inspections identifying wear, corrosion, and potential failure points.",
    description:
      "Our mast inspections work from masthead to deck, checking tangs, sheaves, fasteners, spreader roots and tips, fittings, wiring exits, corrosion points, and the mast step or partners where accessible. You receive a clear account of visible issues, practical maintenance advice, and a plan for any repairs that should be completed before passage.",
    image: "/service-mast-inspection.jpg",
    imageAlt: "Sailboat mast, spreaders, shrouds, and fittings against a blue sky",
    icon: "search",
  },
  {
    id: "furler-servicing",
    title: "Furler Servicing",
    summary:
      "Professional servicing and repair of headsail and in-mast furling systems from all major brands.",
    description:
      "A reluctant or uneven furler can point to problems in the drum, bearings, foil, halyard lead, or stay tension. We inspect the complete system, service accessible components, replace worn parts where available, and correct installation or alignment issues so the sail can be handled safely and reliably.",
    image: "/service-furler-servicing.jpg",
    imageAlt: "Sailboat furling and line-handling hardware mounted on a mast",
    icon: "settings",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    summary:
      "Bespoke stainless steel and rigging hardware fabrication for unique vessel requirements.",
    description:
      "When an original fitting is obsolete or a vessel needs a purpose-made solution, we can assess the requirement and coordinate suitable custom rigging hardware. Every job begins with the load, material, dimensions, attachment method, and access constraints so the finished component is appropriate for the installation.",
    image: "/service-custom-fabrication.jpg",
    imageAlt: "Metal fabricator welding a custom component in a workshop",
    icon: "wrench",
  },
  {
    id: "pre-purchase-survey",
    title: "Pre-Purchase Rig Survey",
    summary:
      "Independent rigging assessments for yacht buyers — know the true condition before you commit.",
    description:
      "A pre-purchase rig survey gives buyers a focused view of the mast, standing and running rigging, furling gear, and visible attachment points. We document observed condition and maintenance concerns so you can discuss repairs, replacement priorities, and likely rigging costs before completing a purchase.",
    image: "/service-pre-purchase-survey.jpg",
    imageAlt: "Prospective yacht buyer viewing sailboats in a marina",
    icon: "clipboard",
  },
] as const;

export const LOCATIONS = [
  {
    id: "fiji",
    name: "Fiji",
    tagline: "Our Home Base — Vuda Point Marina & Denarau",
    description:
      "Fiji is our year-round home base. We support visiting cruisers, local yacht owners, and marine operators around Vuda Point and Port Denarau, with other Viti Levu locations available by arrangement. Being based close to the country's principal marinas helps us inspect vessels promptly, organise materials, and coordinate work around haul-outs and sailing plans.",
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
      "We arrange seasonal service visits to Tonga around the South Pacific cruising calendar, with a focus on Vava'u and work in Nuku'alofa by arrangement. If you expect to need an inspection, replacement parts, or passage repairs, contact us early with your location and itinerary so we can confirm availability and bring the right equipment.",
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
      "Port Vila service is available on an on-call, fly-in basis. We work with owners and local marine facilities to assess passage wear, storm damage, and planned rigging work. Send photos and vessel details before arrival and we can advise what can be prepared in advance and whether the job is practical during your stay.",
    highlights: [
      "Port Vila marina coverage",
      "Cyclone damage response",
      "Coconut milk run support",
      "Fly-in service by arrangement",
    ],
  },
] as const;
