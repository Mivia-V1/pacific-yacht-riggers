import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-max text-center">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900">
          Looks like you&apos;ve sailed off course
        </h1>
        <p className="mt-4 text-lg text-navy-600 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-200 hover:border-teal-400 text-navy-700 hover:text-teal-700 font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
