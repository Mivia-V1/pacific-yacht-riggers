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
                Reduce windage early. Remove sails, canvas, awnings, flags, and
                loose deck equipment rather than relying on lashings alone.
                Secure the boom, centre or isolate halyards so they cannot beat
                against the mast, protect every line from chafe, and arrange
                mooring lines for the expected wind shifts and surge. Follow
                the marina or cyclone-hole plan, including its required line
                sizes, anchors, and evacuation timing.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                If You&apos;re Hauling Out
              </h3>
              <p>
                Confirm the yard&apos;s cyclone procedure well before haul-out.
                The vessel, cradle, stands, ground anchors, and tie-downs must be
                treated as one system. Removing the mast can greatly reduce
                windage when the yard and vessel setup permit it; if it remains
                stepped, remove sails and canvas and secure all running rigging.
                Only the yard should position or alter stands and tie-down points.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-8">
                Essential Pre-Season Checks
              </h3>
              <p>
                Inspect visible standing-rigging terminals, chainplates,
                turnbuckles, pins, mast fittings, and spreaders. Replace chafed
                or sun-damaged lines, confirm halyards can be secured away from
                the mast, and check that furling sails can be removed without a
                last-minute repair. Photograph the rig and deck setup so you
                have a condition record before the season.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                During a Cyclone Warning
              </h2>
              <p>
                Work from a written checklist and finish early enough to leave
                safely. Remove the remaining windage, add and equalise approved
                mooring lines, install chafe protection, secure all movable
                gear, and make a final walk around the vessel. Do not climb the
                mast once conditions deteriorate. Follow official warnings,
                harbour directions, and the marina&apos;s evacuation plan.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                After the Storm: Post-Cyclone Rig Assessment
              </h2>
              <p>
                Begin from deck level only after the area has been declared
                safe. Look for changed rig tension, bent spreaders, displaced
                chainplates, cracked or distorted terminals, loose fasteners,
                damaged furlers, and severe line chafe. If the mast has moved,
                the vessel was struck, or any fitting is suspect, do not load
                the rig or sail until it has been professionally assessed.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10">
                Cyclone Insurance and Your Rigging
              </h2>
              <p>
                Cyclone cover, named-storm plans, geographical limits, and
                survey requirements vary by policy. Read the policy conditions
                before the season and ask the insurer or broker to clarify
                anything uncertain. Keep dated photographs, invoices, survey
                reports, and a copy of your preparation plan as evidence of
                maintenance and storm preparation.
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
