// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Portfolio of Apurv Gaurav – Patent-backed AI Product Leader and L7/L8-track AI Product Manager, specializing in Edge AI, privacy, alignment, and deterministic safety systems.",
  metadataBase: new URL("https://apurvgaurav.ai"),
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader | Edge AI · Privacy · Alignment · Deterministic Safety",
    url: "https://apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "L7/L8-track AI Product Manager focused on Edge AI, privacy, and deterministic safety systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          {/* Top Navigation */}
          <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <Link
                href="/"
                className="text-sm font-semibold tracking-tight text-slate-100"
              >
                <span className="font-bold text-emerald-400">Apurv</span>{" "}
                Gaurav
              </Link>
              <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
                <Link
                  href="/#projects"
                  className="hover:text-emerald-300"
                >
                  Projects
                </Link>
                <Link
                  href="/#patents"
                  className="hover:text-emerald-300"
                >
                  Patents
                </Link>
                <Link
                  href="/#publications"
                  className="hover:text-emerald-300"
                >
                  Publications
                </Link>
                <Link
                  href="/#about"
                  className="hover:text-emerald-300"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="hover:text-emerald-300"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:pt-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
