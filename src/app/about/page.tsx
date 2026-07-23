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
                  Sammy is the Chief Rigger and hands-on lead at Pacific Yacht
                  Rigging Services. His work covers the practical jobs that
                  keep cruising yachts safe and moving: complete re-rigs,
                  detailed rig checks, furler servicing, repairs, and
                  specialist ropework.
                </p>
                <p>
                  Based at Vuda Point Marina, Sammy works with yacht owners at
                  Vuda, Denarau, Nawi, and other locations across Fiji and
                  neighbouring Pacific islands. The service is mobile and
                  practical, with inspections and repairs carried out where the
                  vessel is berthed whenever the job allows.
                </p>
                <p>
                  The approach is straightforward: inspect the complete system,
                  pay attention to the small components that can hide serious
                  wear, explain what has been found, and complete the work with
                  the vessel&apos;s safety and sailing plans in mind.
                </p>
                <p>
                  Recent work shared by the business includes a complete re-rig
                  of a Privilege 454 at Vuda Marina, specialist tow-line
                  splicing for a superyacht with Yacht Help Fiji, and furler
                  strip-downs that identified failing internal terminal
                  components before they became a larger problem.
                </p>
              </div>

              <div className="mt-8 p-6 bg-navy-50 rounded-xl">
                <h3 className="font-bold text-navy-900 mb-3">
                  Why Work With Us
                </h3>
                <ul className="space-y-2">
                  {[
                    "Complete re-rigs and condition checks for cruising yachts",
                    "Hands-on furler servicing and critical terminal inspection",
                    "Specialist ropework, including heavy-duty tow-line splicing",
                    "Mobile service from Vuda to Denarau, Nawi, and beyond",
                    "100% recommended across seven Facebook reviews",
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
