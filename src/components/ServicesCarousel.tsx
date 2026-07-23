"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SERVICES } from "@/lib/constants";

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-navy-500">
          Swipe or use the arrows to explore all services
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="View previous rigging services"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800 shadow-sm transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="View next rigging services"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800 shadow-sm transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        role="region"
        aria-label="Rigging services carousel"
        className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-6 lg:px-0"
      >
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group flex w-[86%] flex-none snap-start flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl sm:w-[55%] lg:w-[calc((100%_-_3rem)/3)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  service.id === "pre-purchase-survey"
                    ? "object-cover object-bottom"
                    : "object-cover"
                }`}
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 55vw, 31vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-navy-900 transition-colors group-hover:text-teal-700">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-navy-600">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2">
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
  );
}
