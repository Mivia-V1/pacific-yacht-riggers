import Link from "next/link";
import { SERVICES, CONTACT } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {/* Background placeholder — replace with actual hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-ocean-900 opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />

        <div className="relative container-max section-padding py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              South Pacific Yacht Rigging Specialists
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Professional Rigging Services Across the{" "}
              <span className="text-teal-400">South Pacific</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-2xl leading-relaxed">
              Standing rigging, running rigging, mast inspections, and custom
              fabrication — serving cruisers and yacht owners in Fiji, Tonga, and
              Vanuatu.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-400 hover:border-teal-400 text-white hover:text-teal-400 font-semibold rounded-lg transition-colors text-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Trust signal */}
            <div className="mt-10 flex items-center gap-6 text-sm text-navy-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Fiji &bull; Tonga &bull; Vanuatu
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                WhatsApp Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Our Rigging Services
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              From routine inspections to complete rig replacements, we keep your
              yacht safe and sailing across the South Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group p-6 lg:p-8 rounded-xl border border-navy-100 hover:border-teal-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {service.summary}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS / WHY CHOOSE US ===== */}
      <section className="section-padding bg-navy-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Why Cruisers Trust Us
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              [PLACEHOLDER: Add a short paragraph about why yacht owners across
              the Pacific choose Pacific Yacht Rigging Services.]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "South Pacific Specialists",
                description:
                  "Based in Fiji with coverage across Tonga and Vanuatu. We understand Pacific cruising conditions.",
                icon: "globe",
              },
              {
                title: "On-Boat Service",
                description:
                  "We come to your yacht — at the marina, at anchor, or on the hard. Minimal disruption to your plans.",
                icon: "boat",
              },
              {
                title: "Quality Materials",
                description:
                  "[PLACEHOLDER: Describe sourcing of quality rigging hardware — Navtec, Sta-Lok, Hi-Mod, etc.]",
                icon: "shield",
              },
              {
                title: "Fast Turnaround",
                description:
                  "[PLACEHOLDER: Describe typical turnaround times, emergency availability, and responsive communication.]",
                icon: "clock",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
                  <TrustIcon name={item.icon} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS PREVIEW ===== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Where We Operate
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Strategically based in the heart of the South Pacific cruising
              grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fiji",
                tagline: "Home Base",
                detail: "Vuda Point Marina & Denarau",
              },
              {
                name: "Tonga",
                tagline: "Seasonal Service",
                detail: "Vava'u & Nuku'alofa",
              },
              {
                name: "Vanuatu",
                tagline: "On-Call Service",
                detail: "Port Vila",
              },
            ].map((loc) => (
              <Link
                key={loc.name}
                href={`/locations#${loc.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl bg-navy-900 text-white p-8 lg:p-10 hover:bg-navy-800 transition-colors"
              >
                {/* TODO: Replace with actual location photos */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="relative">
                  <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">
                    {loc.tagline}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-2">
                    {loc.name}
                  </h3>
                  <p className="text-navy-300 mt-2">{loc.detail}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-teal-400 font-medium text-sm group-hover:gap-2 transition-all">
                    View details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL PLACEHOLDER ===== */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            What Cruisers Say
          </h2>
          <blockquote className="text-xl lg:text-2xl leading-relaxed text-navy-200 italic">
            &ldquo;[PLACEHOLDER: Add a real testimonial from a satisfied
            customer. Include their name, boat name, and where the work was
            done.]&rdquo;
          </blockquote>
          <p className="mt-6 text-teal-400 font-semibold">
            — [Customer Name], SV [Boat Name]
          </p>
          <p className="text-navy-400 text-sm mt-1">
            [PLACEHOLDER: Add 2-3 more testimonials as a rotating carousel or
            grid]
          </p>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section-padding bg-teal-700 text-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Get Your Rig Inspected?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Get in touch for a free quote. We&apos;re available by phone,
            WhatsApp, or email — wherever you are in the South Pacific.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-colors text-lg"
            >
              Contact Us
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const iconClass = "w-6 h-6";
  switch (name) {
    case "anchor":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8V4m0 4a2 2 0 100-4 2 2 0 000 4zm0 0v12m-4-4l4 4 4-4M4 12h2m12 0h2"
          />
        </svg>
      );
    case "wind":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5a2 2 0 100 4H3m15 4a2 2 0 110 4H3m12-14a2 2 0 100 4H3"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "wrench":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      );
    default:
      return null;
  }
}

function TrustIcon({ name }: { name: string }) {
  const iconClass = "w-7 h-7";
  switch (name) {
    case "globe":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "boat":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8V4m0 4L8 16h8l-4-12zm-8 8c1.333 1.333 2.667 2 4 2s2.667-.667 4-2c1.333 1.333 2.667 2 4 2s2.667-.667 4-2"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}
