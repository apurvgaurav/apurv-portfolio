// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apurvgaurav.ai"),
  title: {
    default: "Apurv Gaurav – Patent-Backed AI Product Leader",
    template: "%s | Apurv Gaurav",
  },
  description:
    "Patent-backed AI Product Leader focused on edge-deployed LLMs, AI safety, and governance. 8+ USPTO non-provisional filings, working prototypes, and research across privacy, risk, and code security.",
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "AI Product Manager focused on edge LLMs, privacy, AI risk, and deterministic safety engines. Explore flagship projects like EdgeLLM V2, AI Risk Navigator, and LLM Code Safety Auditor.",
    url: "https://apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    images: [
      {
        url: "/og-apurvgaurav.png",
        width: 1200,
        height: 630,
        alt: "Apurv Gaurav – Patent-Backed AI Product Leader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader building edge LLMs, AI safety, and governance products with real prototypes and USPTO filings.",
    images: ["/og-apurvgaurav.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Apurv Gaurav",
    url: "https://apurvgaurav.ai",
    jobTitle: "AI Product Manager",
    description:
      "Patent-backed AI Product Leader focused on edge-deployed LLMs, AI safety, and governance.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Pennsylvania" },
      { "@type": "CollegeOrUniversity", name: "Penn State University" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/apurvgaurav",
      "https://github.com/apurvgaurav",
    ],
  };

  return (
    <html lang="en" className="bg-[#0b0b0d] text-zinc-50">
      <body className="flex min-h-screen flex-col bg-[#0b0b0d] text-zinc-50 antialiased">
        {/* JSON-LD Schema */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Header / Nav */}
        <header className="sticky top-0 z-30 border-b border-zinc-900 bg-[#0b0b0d]/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-black">
                AG
              </span>
              <span className="text-sm font-medium text-zinc-100 hover:text-[var(--accent-hover)]">
                Apurv Gaurav
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
              <Link href="/" className="hover:text-[var(--accent-hover)]">
                Home
              </Link>
              <Link href="/projects" className="hover:text-[var(--accent-hover)]">
                Projects
              </Link>
              <Link href="/experience" className="hover:text-[var(--accent-hover)]">
                Experience
              </Link>
              <Link href="/patents" className="hover:text-[var(--accent-hover)]">
                Patents
              </Link>
              <Link href="/media" className="hover:text-[var(--accent-hover)]">
                Media
              </Link>
              <Link href="/articles" className="hover:text-[var(--accent-hover)]">
                Articles
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-100 hover:border-[var(--accent-hover)]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-900 bg-[#0b0b0d]/95 text-xs text-zinc-500">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p>
                © {new Date().getFullYear()} Apurv Gaurav · Patent-Backed AI Product Leader
              </p>
              <p className="text-[11px] text-zinc-600">
                Edge LLMs · AI Safety · Governance · Privacy-Preserving Architectures
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:apurvgaurav@gmail.com"
                className="hover:text-[var(--accent-hover)]"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/apurvgaurav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent-hover)]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/apurvgaurav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent-hover)]"
              >
                GitHub
              </a>
              <Link
                href="/contact"
                className="font-medium text-zinc-300 hover:text-[var(--accent-hover)]"
              >
                For Hiring Managers
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
