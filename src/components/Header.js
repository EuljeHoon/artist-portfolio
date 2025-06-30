'use client';
import Link from 'next/link';
import { useState } from 'react';
import scrollToTop from '../utils/scrollToTop';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <span
          className="font-bold text-xl cursor-pointer"
          onClick={scrollToTop}
        >
          Jinkyung Hu
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={scrollToTop}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            Biography
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('exhibitions')}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            Exhibitions
          </button>
          <button
            onClick={() => scrollToSection('artworks')}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            Artworks
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection('biography-photo')}
              className="text-left text-gray-700 hover:text-black transition-colors duration-200 px-6"
            >
              Biography
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left text-gray-700 hover:text-black transition-colors duration-200 px-6"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('exhibitions')}
              className="text-left text-gray-700 hover:text-black transition-colors duration-200 px-6"
            >
              Exhibitions
            </button>
            <button
              onClick={() => scrollToSection('artworks')}
              className="text-left text-gray-700 hover:text-black transition-colors duration-200 px-6"
            >
              Artworks
            </button>
          </div>
        </nav>
      )}
    </header>
  );
} 