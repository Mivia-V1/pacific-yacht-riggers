"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 lg:w-[88px] lg:h-[88px] rounded-full bg-white overflow-hidden shrink-0 p-0.5 lg:p-1">
              <Image
                src="/logo.png"
                alt={`${SITE_NAME} logo`}
                width={300}
                height={300}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block group-hover:text-teal-300 transition-colors">
                {SITE_NAME}
              </span>
              <span className="text-teal-400 text-xs tracking-wider uppercase">
                Fiji Islands
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-navy-200 hover:text-white hover:bg-navy-800 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden">
            <button
              ref={buttonRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy-200 hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <div
              ref={menuRef}
              className={`absolute right-0 top-full mt-2 w-56 origin-top-right rounded-lg bg-navy-800 border border-navy-600 shadow-xl shadow-black/30 transition-all duration-200 ease-out ${
                mobileOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
              role="menu"
            >
              <div className="py-1.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    role="menuitem"
                    className="group flex items-center gap-3 mx-1.5 px-3 py-2.5 rounded-md text-sm text-navy-200 hover:text-white hover:bg-navy-700 transition-all duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-navy-500 group-hover:bg-teal-400 group-hover:scale-150 transition-all duration-150" />
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-3 pb-3 pt-1.5 border-t border-navy-700">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  role="menuitem"
                  className="block px-4 py-2.5 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white text-sm text-center font-semibold rounded-md transition-colors duration-150"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
