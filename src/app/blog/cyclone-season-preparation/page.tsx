import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { getBlogPostSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Preparing Your Yacht Rig for South Pacific Cyclone Season",
  description:
    "Essential steps to prepare your yacht's rigging for cyclone season in Fiji, Tonga, and Vanuatu. Protect your mast, rigging, and vessel from tropical storms.",
  path: "/blog/cyclone-season-preparation",
});

export default function CycloneSeasonArticle() {
  return (
    <>
      <JsonLd
        data={getBlogPostSchema({
          title: "Preparing Your Yacht Rig for South Pacific Cyclone Season",
          description:
            "Essential steps to prepare your yacht's rigging for cyclone season in Fiji, Tonga, and Vanuatu.",
          slug: "cyclone-season-preparation",
          datePublished: "2026-02-28",
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
                Safety
              </span>
              <time dateTime="2026-02-28">28 February 2026</time>
              <span>&bull;</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Preparing Your Yacht Rig for South Pacific Cyclone Season
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding bg-white">
          <div className="container-max max-w-3xl">
            <div className="prose prose-lg prose-navy max-w-none space-y-6 text-navy-700">
              <p className="text-xl leading-relaxed text-navy-600">
                Cyclone season in the South Pacific runs from November through
                April, with peak risk between January and March. Whether
                you&apos;re hauling out, tying up in a cyclone hole, or staying
                aboard, your rigging preparation can make the difference between
                weathering a storm and losing your mast.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                Before the Season: Pre-Cyclone Rig Checklist
              </h2>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                If You&apos;re Staying in the Water
              </h3>
              <p>
                [PLACEHOLDER: Detailed guidance for boats staying in the water
                — removing or securing all loose items aloft, removing headsails
                and biminis, extra halyards for chafe protection, removing boom
                or securing it, checking all standing rigging tension, adding
                extra lines to marina cleats.]
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                If You&apos;re Hauling Out
              </h3>
              <p>
                [PLACEHOLDER: Guidance for boats on the hard — removing the
                mast entirely (ideal), or securing it with extra jack stands and
                tie-downs. Covering all rigging terminals to prevent UV/rain
                degradation. Checking cradle/stand security.]
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                Essential Pre-Season Checks
              </h3>
              <p>
                [PLACEHOLDER: List the critical items — inspect all standing
                rigging terminals, check chainplate bolts, inspect mast boot
                seal, verify all halyards and sheets are in good condition,
                ensure spreader boots are intact, check backstay tension.]
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                During a Cyclone Warning
              </h2>
              <p>
                [PLACEHOLDER: What to do when a warning is issued — final
                preparations, additional securing, removing electronics and
                valuables from aloft, flooding the bilge for stability (if
                appropriate), final rig tension checks.]
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                After the Storm: Post-Cyclone Rig Assessment
              </h2>
              <p>
                [PLACEHOLDER: What to check after a cyclone has passed — visual
                inspection from deck and aloft, checking for shifted chainplates,
                loose fittings, chafe damage, bent spreaders, cracked
                turnbuckles. When to get a professional assessment before
                sailing again.]
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                Cyclone Insurance and Your Rigging
              </h2>
              <p>
                [PLACEHOLDER: Brief note about how insurers view rigging
                condition — some require recent survey, proper preparation is
                often a policy condition. Encourage documentation with photos.]
              </p>

              {/* CTA */}
              <div className="bg-navy-50 rounded-xl p-8 mt-10">
                <h3 className="text-xl font-bold text-navy-900">
                  Get Your Rig Cyclone-Ready
                </h3>
                <p className="mt-2 text-navy-600">
                  Don&apos;t wait until a cyclone warning to check your rigging.
                  Book a pre-season inspection with Pacific Yacht Rigging
                  Services — we&apos;ll identify any issues and help you prepare.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Book Pre-Season Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
