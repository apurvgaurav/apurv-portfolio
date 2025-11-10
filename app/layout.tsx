import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "../components/main-nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apurvgaurav.ai"),
  title: {
    default: "Apurv Gaurav – Patent-Backed AI Product Leader",
    template: "%s – Apurv Gaurav",
  },
  description:
    "Apurv Gaurav is a patent-backed AI Product Leader focused on edge-deployed LLMs, deterministic AI safety, and code security — building products that survive real auditors.",
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Edge AI, privacy & alignment specialist. Deterministic AI safety and governance frameworks with 8+ USPTO non-provisional filings.",
    url: "https://apurvgaurav.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Edge AI, privacy & alignment specialist. Deterministic AI safety and governance frameworks with 8+ USPTO non-provisional filings.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex min-h-screen flex-col bg-[#020617] text-slate-100">
          {/* Global header */}
          <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#020617]/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                  Apurv Gaurav
                </span>
              </Link>

              <MainNav />
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Global footer */}
          <footer className="border-t border-slate-800 bg-[#020617]/95">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="space-y-1">
                <p className="font-medium text-slate-300">
                  Patent-backed AI product leader.
                </p>
                <p>
                  Edge LLMs · Privacy · AI risk · Code safety · Governance under
                  real auditors.
                </p>
              </div>

              <div className="space-y-1 text-left md:text-right">
                <p>© {year} Apurv Gaurav</p>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a
                    href="mailto:apurvgaurav@gmail.com"
                    className="underline underline-offset-4 hover:text-sky-300"
                  >
                    apurvgaurav@gmail.com
                  </a>
                  <span className="text-slate-600">·</span>
                  <a
                    href="https://www.linkedin.com/in/apurvgaurav"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-sky-300"
                  >
                    LinkedIn
                  </a>
                  {/* Optional: update href to your real PDF path when ready */}
                  <span className="text-slate-600">·</span>
                  <a
                    href="/Apurv-Gaurav-Resume.pdf"
                    className="underline underline-offset-4 hover:text-sky-300"
                  >
                    Download resume
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
