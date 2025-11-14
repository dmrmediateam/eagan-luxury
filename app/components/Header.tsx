"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-emerald-600">Weichert</span>{" "}
              <span className="text-gray-800">Realtors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#buyers"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Buyers
            </Link>
            <Link
              href="#sellers"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Sellers
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="#buyers"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Buyers
            </Link>
            <Link
              href="#sellers"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sellers
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

