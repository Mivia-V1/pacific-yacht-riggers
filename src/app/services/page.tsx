import { Metadata } from "next";
import Link from "next/link";
import { SERVICES, CONTACT } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { getServiceSchemas } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Yacht Rigging Services",
  description:
    "Professional yacht rigging services in the South Pacific. Standing rigging, running rigging, mast inspections, furler servicing, custom fabrication, and pre-purchase rig surveys in Fiji, Tonga, and Vanuatu.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={getServiceSchemas()} />

      {/* Hero */}
      <section className="bg-navy-900 text-white section-padding py-20 lg:py-28">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Yacht Rigging Services
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              From standing rigging inspections to complete rig replacements, we
              provide comprehensive rigging services for cruising yachts and
              charter fleets across the South Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16 lg:space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image placeholder */}
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">
                      [PLACEHOLDER: Add photo of {service.title.toLowerCase()}{" "}
                      work in progress]
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl font-bold text-navy-900 mt-2">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-navy-700 leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="mt-6 text-navy-600 leading-relaxed">
                    <p>{service.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-lg text-navy-200">
            Send us photos of your rig via WhatsApp and we&apos;ll give you a
            free initial assessment and quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Contact Us
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-400 hover:border-teal-400 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              WhatsApp Photos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
