import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import { getDeliveryServiceSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Ocean Yacht Deliveries",
  description:
    "Professional ocean yacht deliveries, vessel relocation, and offshore skipper services from Fiji to destinations worldwide, led by Yachtmaster Ocean Jack Price.",
  path: "/yacht-deliveries",
});

const passages = [
  "Fiji to New Zealand",
  "Nouméa to New Zealand",
  "Hamilton Island (Whitsundays) to Sydney",
  "Hobart to Sydney",
  "Gold Coast to Sydney",
];

const credentials = [
  {
    value: "20,000+",
    label: "Nautical miles of offshore sailing experience",
  },
  {
    value: "Yachtmaster Ocean",
    label: "Qualified for ocean passages",
  },
  {
    value: "50 Tonne Master",
    label: "Commercial master certification",
  },
];

export default function YachtDeliveriesPage() {
  return (
    <>
      <JsonLd data={getDeliveryServiceSchema()} />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src="/delivery-aerial-offshore.jpg"
          alt="Offshore racing yacht sailing through open water"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/55" />
        <div className="relative container-max section-padding py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              From Fiji to the World
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Professional Ocean Yacht Deliveries
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-2xl leading-relaxed">
              Safe, reliable yacht delivery, vessel relocation, and offshore
              skipper services backed by extensive passage-making experience.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Discuss Your Delivery
              </Link>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-300 hover:border-teal-400 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-navy-100">
              <Image
                src="/delivery-crew-at-helm.jpg"
                alt="Offshore sailors at the helm during a yacht passage"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Meet Your Delivery Skipper
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                Jack Price
              </h2>
              <div className="mt-6 space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Jack is a highly experienced offshore sailor holding
                  Yachtmaster Ocean qualifications and a 50 Tonne Master
                  certification.
                </p>
                <p>
                  With more than 20,000 nautical miles of offshore sailing
                  experience, he has successfully delivered yachts throughout
                  the Pacific and along Australia&apos;s east coast.
                </p>
                <p>
                  Jack has also competed in the Rolex Sydney Hobart Yacht Race
                  and the Sydney Gold Coast Yacht Race, bringing practical
                  offshore seamanship, passage planning, and watchkeeping
                  experience to every delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {credentials.map((credential) => (
                <div
                  key={credential.value}
                  className="rounded-xl bg-navy-50 border border-navy-100 p-6 lg:p-7"
                >
                  <p className="text-2xl font-bold text-teal-700">
                    {credential.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {credential.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Proven Passage Experience
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                Completed Yacht Deliveries
              </h2>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Jack&apos;s completed passages include international ocean
                crossings and coastal deliveries in demanding offshore
                conditions.
              </p>
              <ul className="mt-7 space-y-3">
                {passages.map((passage) => (
                  <li
                    key={passage}
                    className="flex items-center gap-3 rounded-lg bg-white border border-navy-100 px-5 py-4 text-navy-800"
                  >
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">{passage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Delivery Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                The Right Skipper for Your Passage
              </h2>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "Professional Yacht Delivery",
                    text: "A complete delivery service for owners who need their yacht safely moved between ports.",
                  },
                  {
                    title: "Vessel Relocation",
                    text: "Experienced passage leadership for relocations across the Pacific, Australia, New Zealand, and worldwide.",
                  },
                  {
                    title: "Offshore Skipper",
                    text: "An experienced master for owners who want professional support and offshore leadership on their own passage.",
                  },
                ].map((service) => (
                  <div key={service.title} className="border-l-4 border-teal-500 pl-5">
                    <h3 className="text-lg font-bold text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-navy-600 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max">
          <div className="max-w-2xl mb-10">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Offshore Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Proven in Open-Water Conditions
            </h2>
            <p className="mt-4 text-navy-300 leading-relaxed">
              Ocean miles and offshore racing experience build the judgement,
              preparation, and calm decision-making every successful delivery
              depends on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="relative md:col-span-7 aspect-[3/2] overflow-hidden rounded-xl bg-navy-800">
              <Image
                src="/delivery-yacht-underway.jpg"
                alt="Offshore yacht sailing under full sail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="relative md:col-span-5 aspect-[3/2] md:aspect-auto overflow-hidden rounded-xl bg-navy-800">
              <Image
                src="/delivery-heavy-seas.jpg"
                alt="Offshore racing yacht driving through heavy seas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="relative md:col-span-5 aspect-[3/2] overflow-hidden rounded-xl bg-navy-800">
              <Image
                src="/delivery-tasmania.jpg"
                alt="Offshore yacht sailing past the Tasmanian coast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="relative md:col-span-7 aspect-[3/2] overflow-hidden rounded-xl bg-navy-800">
              <Image
                src="/delivery-bow-wave.jpg"
                alt="Offshore yacht cutting through a steep wave"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-teal-700 text-white">
        <div className="container-max text-center max-w-3xl mx-auto">
          <p className="text-teal-100 font-semibold text-sm uppercase tracking-widest mb-3">
            Planning a Relocation?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Discuss Your Next Yacht Delivery
          </h2>
          <p className="mt-4 text-lg text-teal-100 leading-relaxed">
            Tell us about the vessel, departure port, destination, timing, and
            scope of support you need. We&apos;ll respond to discuss the passage
            and next steps.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-colors text-lg"
            >
              Request a Delivery Quote
            </Link>
            <a
              href={`mailto:${CONTACT.email}?subject=Ocean%20Yacht%20Delivery%20Enquiry`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Email Delivery Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
