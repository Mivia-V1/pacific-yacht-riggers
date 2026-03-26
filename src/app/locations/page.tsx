import { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, CONTACT } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Locations — Fiji, Tonga & Vanuatu",
  description:
    "Pacific Yacht Rigging Services operates across the South Pacific with bases in Fiji (Vuda Point Marina), Tonga (Vava'u), and Vanuatu (Port Vila). Professional yacht rigging wherever you sail.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white section-padding py-20 lg:py-28">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Where We Operate
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              South Pacific Coverage
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              Based in Fiji with seasonal coverage across Tonga and Vanuatu. We
              go where the cruisers go — providing professional rigging services
              across the South Pacific&apos;s most popular sailing grounds.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-16 lg:space-y-24">
          {LOCATIONS.map((location, index) => (
            <div
              key={location.id}
              id={location.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Map / Image placeholder */}
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-navy-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-navy-400 p-8">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm">
                    [PLACEHOLDER: Add photo of {location.name} marina /
                    anchorage or embedded map]
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider">
                  {location.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
                  {location.name}
                </h2>
                <p className="mt-4 text-navy-600 leading-relaxed">
                  {location.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {location.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-navy-700"
                    >
                      <svg
                        className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
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
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Book Service in {location.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="section-padding bg-navy-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Yacht Rigging Services Across the South Pacific
          </h2>
          <div className="prose prose-navy max-w-none text-navy-700 space-y-4">
            <p>
              Pacific Yacht Rigging Services is the South Pacific&apos;s
              dedicated yacht rigging specialist, providing professional standing
              and running rigging services from our base in Fiji with seasonal
              coverage across Tonga and Vanuatu.
            </p>
            <p>
              Whether you&apos;re a bluewater cruiser transiting the coconut
              milk run, a charter fleet operator needing scheduled maintenance,
              or a local yacht owner preparing for cyclone season, we bring
              professional rigging services directly to your vessel.
            </p>
            <p>
              [PLACEHOLDER: Add more SEO-rich content about the specific
              challenges of rigging maintenance in tropical Pacific conditions —
              UV degradation, salt corrosion, humidity effects on wire rope,
              availability of quality parts, etc.]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-700 text-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Sailing Through the South Pacific?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Plan your rig service ahead. Contact us with your itinerary and
            we&apos;ll schedule your work to fit your cruising plans.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-colors text-lg"
            >
              Plan Your Service
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
