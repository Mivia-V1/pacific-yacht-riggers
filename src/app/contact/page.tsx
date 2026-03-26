import { Metadata } from "next";
import { CONTACT, FORMSPREE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Pacific Yacht Rigging Services for a free quote. Call, WhatsApp, or email us. Based in Fiji, serving Tonga and Vanuatu.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white section-padding py-20 lg:py-28">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              Ready to get your rig inspected or serviced? Reach out by phone,
              WhatsApp, or email — or fill out the form below for a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Request a Free Quote
              </h2>
              <ContactForm formspreeUrl={FORMSPREE_URL} />
            </div>

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-navy-50 rounded-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Direct Contact
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2">
                      Call Us (Fiji)
                    </h3>
                    <a
                      href={CONTACT.phoneHref}
                      className="flex items-center gap-3 text-lg font-semibold text-navy-900 hover:text-teal-700 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
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
                      </div>
                      {CONTACT.phone}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg font-semibold text-navy-900 hover:text-green-700 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      {CONTACT.whatsapp}
                    </a>
                    <p className="text-sm text-navy-500 mt-1 ml-13">
                      Send photos of your rig for a quick assessment
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 text-lg font-semibold text-navy-900 hover:text-teal-700 transition-colors break-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
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
                      </div>
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="mt-8 pt-6 border-t border-navy-200">
                  <p className="text-sm text-navy-600">
                    <strong className="text-navy-900">Response time:</strong> We
                    typically respond within 24 hours. For urgent matters, call
                    or WhatsApp directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
