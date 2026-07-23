import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { getBlogPostSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Standing Rigging Inspection: What Every Cruiser Should Know",
  description:
    "Learn how to inspect your yacht's standing rigging, identify common failure points, and know when it's time for professional assessment or replacement.",
  path: "/blog/standing-rigging-inspection-guide",
});

export default function StandingRiggingArticle() {
  return (
    <>
      <JsonLd
        data={getBlogPostSchema({
          title: "Standing Rigging Inspection: What Every Cruiser Should Know",
          description:
            "Learn how to inspect your yacht's standing rigging, identify common failure points, and know when it's time for professional assessment or replacement.",
          slug: "standing-rigging-inspection-guide",
          datePublished: "2026-03-15",
        })}
      />

      <article>
        {/* Hero */}
        <header className="bg-navy-900 text-white section-padding py-20 lg:py-28">
          <div className="container-max max-w-3xl">
            <Link
              href="/blog"
              className="text-teal-400 hover:text-teal-300 text-sm font-medium inline-flex items-center gap-1 mb-6"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-sm text-navy-300 mb-4">
              <span className="bg-teal-600/20 text-teal-400 px-2 py-0.5 rounded-full text-xs font-semibold">
                Maintenance
              </span>
              <time dateTime="2026-03-15">15 March 2026</time>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Standing Rigging Inspection: What Every Cruiser Should Know
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding bg-white">
          <div className="container-max max-w-3xl">
            <div className="prose prose-lg prose-navy max-w-none space-y-6 text-navy-700">
              <p className="text-xl leading-relaxed text-navy-600">
                Your standing rigging — the shrouds, stays, and structural
                cables that hold your mast up — is arguably the most critical
                safety system on your yacht. Yet it&apos;s one of the most
                commonly neglected areas of maintenance, especially among
                long-term cruisers in the tropics.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                Why Regular Inspection Matters
              </h2>
              <p>
                Standing rigging doesn&apos;t fail without warning — it gives
                you signs. The challenge is knowing what to look for. In the
                South Pacific, rigging faces accelerated wear from intense UV
                exposure, constant salt spray, and the humidity that promotes
                crevice corrosion in swage fittings.
              </p>
              <p>
                Age alone does not determine condition. Ocean miles, rig tune,
                terminal design, previous damage, maintenance, and long
                exposure to salt and tropical heat all matter. Keep a record of
                the rig&apos;s installation date and inspect it routinely, with
                extra attention before an offshore passage or after heavy
                weather.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                What to Check: A Cruiser&apos;s Inspection Checklist
              </h2>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                1. Swage Fittings
              </h3>
              <p>
                Look closely around the mouth and body of every swage for
                hairline cracks, swelling, distortion, or brown staining. Rust
                trails do not always mean a fitting has failed, but they justify
                closer assessment. Clean away surface contamination so changes
                can be seen, and never force tools into a crack or fitting.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                2. Wire Rope Condition
              </h3>
              <p>
                Check the full accessible length for broken strands, kinks,
                flattening, abrasion, or changes in colour. Pay particular
                attention where wire enters a terminal and where it can touch a
                spreader or fitting. A soft cloth drawn carefully along the wire
                can catch on a broken strand; protect your hands and do not grip
                suspect wire directly.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                3. Turnbuckles & Toggle Fittings
              </h3>
              <p>
                Confirm turnbuckles are straight, properly secured, and have
                adequate thread engagement. Inspect split pins and retaining
                hardware for wear or sharp edges, then check toggles and clevis
                pins for side-loading, elongation, or movement that suggests the
                joint is no longer articulating freely.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                4. Chainplates
              </h3>
              <p>
                Water staining, cracked sealant, damp joinery, or corrosion near
                a chainplate can be early warnings. Inspect above and below deck
                where access permits, including fasteners and backing structure.
                Stainless steel can deteriorate where oxygen is limited, so a
                polished exterior does not guarantee the hidden section is sound.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                5. Masthead & Spreaders
              </h3>
              <p>
                Aloft, inspect tangs, pins, fasteners, sheaves, halyard exits,
                spreader roots, and spreader tips. Look for corrosion around
                dissimilar metals, loose fasteners, chafe, cracking, or fittings
                that have shifted. Masthead, forestay, and backstay attachments
                deserve particular attention because deck-level checks cannot
                reveal their full condition.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                When to Replace Standing Rigging
              </h2>
              <p>
                There is no single safe replacement date for every yacht.
                Insurers, surveyors, manufacturers, and offshore organisers may
                each apply their own age or inspection requirements. Base the
                decision on documented age, material, service history, sailing
                loads, environment, and a professional condition assessment.
                Unknown history or any evidence of cracking, broken wire, or
                damaged terminals should be addressed before further sailing.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                When to Call a Professional
              </h2>
              <p>
                While owner inspections are valuable, some assessments require
                professional tools and experience. We recommend a professional
                rig inspection at least every two years in tropical conditions,
                or immediately if you notice any of the warning signs described
                above.
              </p>
              <p>
                A professional inspection follows the load path from deck
                attachments to the masthead, including areas that require safe
                access aloft. It can include measurements, close examination of
                terminals and fittings, rig-tune observations, and a written
                record of findings. Where surface cracking is suspected, the
                rigger can recommend appropriate non-destructive testing or
                component removal.
              </p>

              {/* CTA */}
              <div className="bg-navy-50 rounded-xl p-8 mt-10">
                <h3 className="text-xl font-bold text-navy-900">
                  Need a Professional Rig Inspection?
                </h3>
                <p className="mt-2 text-navy-600">
                  Pacific Yacht Rigging Services provides thorough standing
                  rigging inspections across Fiji, Tonga, and Vanuatu. Contact
                  us for a free quote.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
