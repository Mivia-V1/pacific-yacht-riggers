import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Rigging Blog",
  description:
    "Practical rigging tips, maintenance guides, and South Pacific sailing insights from Pacific Yacht Rigging Services.",
  path: "/blog",
});

const blogPosts = [
  {
    slug: "standing-rigging-inspection-guide",
    title: "Standing Rigging Inspection: What Every Cruiser Should Know",
    excerpt:
      "Your standing rigging is the backbone of your sailing rig. Learn what to look for during inspections and when it's time to call in a professional.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Maintenance",
  },
  {
    slug: "cyclone-season-preparation",
    title: "Preparing Your Yacht Rig for South Pacific Cyclone Season",
    excerpt:
      "Cyclone season in the South Pacific runs November through April. Here's how to prepare your rigging for the worst — and what to check afterward.",
    date: "2026-02-28",
    readTime: "6 min read",
    category: "Safety",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white section-padding py-20 lg:py-28">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Rigging Knowledge
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Blog
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              Practical rigging tips, maintenance guides, and South Pacific
              sailing insights from our experience keeping cruisers safe on the
              water.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-navy-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-navy-100 flex items-center justify-center">
                  <div className="text-center text-navy-400 p-4">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 opacity-50"
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
                    <p className="text-xs">[PLACEHOLDER: Blog post image]</p>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 text-sm text-navy-500 mb-3">
                    <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-navy-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Read article
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
