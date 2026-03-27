import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Meet Sammy, Chief Rigger at Pacific Yacht Rigging Services. Learn about our experience, values, and commitment to keeping South Pacific sailors safe.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white section-padding py-20 lg:py-28">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Bula Re!
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              We&apos;re {SITE_NAME} — the South Pacific&apos;s dedicated yacht
              rigging specialists, based in the Fiji Islands.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/sam1.webp"
                alt={`${CONTACT.chiefRigger} - Chief Rigger at ${SITE_NAME}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900">
                Meet {CONTACT.chiefRigger}
              </h2>
              <p className="text-teal-600 font-semibold mt-1">
                {CONTACT.title}
              </p>

              <div className="mt-6 space-y-4 text-navy-700 leading-relaxed">
                <p>
                  [PLACEHOLDER: Write Sammy&apos;s story — background, how he
                  got into rigging, training and qualifications, years of
                  experience. This should be personal and authentic.]
                </p>
                <p>
                  [PLACEHOLDER: Describe what drew Sammy to the South Pacific —
                  the cruising community, the unique challenges of tropical
                  rigging maintenance, the satisfaction of keeping people safe on
                  the water.]
                </p>
                <p>
                  [PLACEHOLDER: Talk about the business philosophy — quality
                  over shortcuts, honest assessments, fair pricing, building
                  relationships with cruisers who return year after year.]
                </p>
                <p>
                  [PLACEHOLDER: Mention any certifications, brand partnerships,
                  training courses completed, notable projects, or fleet
                  contracts.]
                </p>
              </div>

              <div className="mt-8 p-6 bg-navy-50 rounded-xl">
                <h3 className="font-bold text-navy-900 mb-3">
                  Why Work With Us
                </h3>
                <ul className="space-y-2">
                  {[
                    "[PLACEHOLDER: Key differentiator 1 — e.g., years of experience]",
                    "[PLACEHOLDER: Key differentiator 2 — e.g., specific brand training]",
                    "[PLACEHOLDER: Key differentiator 3 — e.g., sourcing network for parts]",
                    "[PLACEHOLDER: Key differentiator 4 — e.g., emergency response capability]",
                    "[PLACEHOLDER: Key differentiator 5 — e.g., cruiser community reputation]",
                  ].map((item) => (
                    <li
                      key={item}
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
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-700 text-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Talk About Your Rig
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Whether you need a full inspection or just have a question,
            {CONTACT.chiefRigger} is happy to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-colors text-lg"
            >
              Get in Touch
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-lg"
            >
              WhatsApp {CONTACT.chiefRigger}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
