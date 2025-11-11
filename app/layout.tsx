"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Apurv Gaurav | Patent-backed AI Product Leader specializing in Edge AI, LLM Safety and Privacy + Alignment.",
  metadataBase: new URL("https://www.apurvgaurav.ai"),
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description: "Patent-backed AI Product Leader in Edge AI, LLM Safety and Privacy + Alignment.",
    url: "https://www.apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
            <Link href="/" className="text-sm font-bold tracking-tight text-indigo-700">
              Apurv Gaurav
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
              <Link href="/experience">Experience</Link>
              <Link href="/patents">Patents</Link>
              <Link href="/media">Media</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-800 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
              <div className="flex flex-col px-4 py-2 space-y-2 text-sm font-medium text-gray-700">
                <Link href="/experience" onClick={() => setOpen(false)}>Experience</Link>
                <Link href="/patents" onClick={() => setOpen(false)}>Patents</Link>
                <Link href="/media" onClick={() => setOpen(false)}>Media</Link>
                <Link href="/articles" onClick={() => setOpen(false)}>Articles</Link>
                <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-5xl mx-auto px-5 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-100 mt-20 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Apurv Gaurav · Patent-Backed AI Product Leader · 
          <Link href="https://www.linkedin.com/in/apurvgaurav" className="text-indigo-600 hover:underline">
            LinkedIn
          </Link>
        </footer>
      </body>
    </html>
  );
}
