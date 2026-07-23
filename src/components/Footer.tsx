import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300 pb-24 lg:pb-0">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-8">
          {/* Brand */}
          <div className="col-span-2 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3"
            >
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white p-0.5">
                <Image
                  src="/logo.png"
                  alt={`${SITE_NAME} logo`}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-left text-lg font-bold leading-tight text-white sm:text-xl">
                  {SITE_NAME}
                </h3>
                <p className="mt-1 text-left text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
                  Fiji Islands
                </p>
              </div>
            </Link>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-400">
              Professional yacht rigging services across the South Pacific.
              Trusted by bluewater cruisers, charter fleets, and local yacht
              owners since day one.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-y border-navy-800 px-3 py-8 text-center sm:px-10">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="border-y border-l border-navy-800 px-3 py-8 text-center sm:px-10">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Services
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/services#standing-rigging"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Standing Rigging
                </Link>
              </li>
              <li>
                <Link
                  href="/services#running-rigging"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Running Rigging
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mast-inspection"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Mast & Spar Inspection
                </Link>
              </li>
              <li>
                <Link
                  href="/services#furler-servicing"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Furler Servicing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#custom-fabrication"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Custom Fabrication
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pre-purchase-survey"
                  className="inline-flex rounded-md px-2 py-1 text-sm transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Pre-Purchase Rig Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 rounded-2xl border border-navy-800 bg-navy-900/35 px-4 py-7 text-center sm:px-8">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Contact
            </h4>
            <ul className="flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:flex-wrap">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-navy-800 bg-navy-950/60 px-4 py-2.5 transition-colors hover:border-teal-700 hover:text-white"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-navy-800 bg-navy-950/60 px-4 py-2.5 transition-colors hover:border-teal-700 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-navy-800 bg-navy-950/60 px-4 py-2.5 transition-colors hover:border-teal-700 hover:text-white"
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center justify-center gap-4">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-700 bg-navy-800 transition-colors hover:border-teal-500 hover:bg-teal-600"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 sm:flex-row">
          <p className="text-xs">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Serving Fiji &bull; Tonga &bull; Vanuatu
          </p>
        </div>
      </div>
    </footer>
  );
}
