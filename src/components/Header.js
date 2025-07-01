"use client";

import { useState, useEffect, useRef } from "react";
import scrollToTop from "../utils/scrollToTop";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (window.scrollY < 10) {
        setShowHeader(true);
        lastScrollY.current = window.scrollY;
        return;
      }

      if (window.scrollY > lastScrollY.current && window.scrollY > 60) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSectionNav = (sectionId) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleKeyDown = (e, action) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <header
      className={`w-full py-6 px-6 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-gray-100 shadow-md" : "bg-gray-50"
      } ${showHeader ? "translate-y-0" : "-translate-y-full"} transform`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          className="font-semibold text-xl text-gray-800 hover:text-gray-900 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-lg px-2 py-1"
          onClick={scrollToTop}
          onKeyDown={(e) => handleKeyDown(e, scrollToTop)}
          aria-label="Go to top"
        >
          Jinkyung Hu
        </button>

        <nav
          className="hidden md:flex space-x-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {[
            { label: "Biography", id: "biography" },
            { label: "Exhibitions", id: "exhibitions" },
            { label: "Experience", id: "experience" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleSectionNav(id)}
              className="text-gray-700 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-full px-4 py-2 hover:bg-gray-200"
              aria-label={`Go to ${label.toLowerCase()} section`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/artworks"
            className="text-gray-700 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-full px-4 py-2 hover:bg-gray-200"
          >
            Artworks
          </Link>
        </nav>

        <button
          className="md:hidden p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
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
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav
          className="mt-4 pb-6 border-t border-gray-200/30"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-3 pt-4">
            {[
              { label: "Biography", id: "biography" },
              { label: "Exhibitions", id: "exhibitions" },
              { label: "Experience", id: "experience" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleSectionNav(id)}
                className="text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-300 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                {label}
              </button>
            ))}
            <Link
              href="/artworks"
              className="text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition duration-300 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Artworks
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
