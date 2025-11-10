// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apurvgaurav.ai"),
  title: {
    default: "Apurv Gaurav – Patent-Backed AI Product Leader",
    template: "%s | Apurv Gaurav",
  },
  description:
    "Patent-backed AI Product Leader focused on edge-deployed LLMs, AI safety, and governance. 8+ non-provisional USPTO filings, working prototypes, and research across privacy, risk, and code security.",
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
      "Patent-backed AI Product Leader building edge LLM, AI safety, and governance products with real prototypes and USPTO filings.",
    images: ["/og-apurvgaurav.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-zinc-50">
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>

          <footer className="border-t border-zinc-900 bg-black/90">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p>
                  © {new Date().getFullYear()} Apurv Gaurav · Patent-Backed AI
                  Product Leader
                </p>
                <p className="text-[11px] text-zinc-600">
                  Edge LLMs · AI Safety · Governance · Privacy-Preserving
                  Architectures
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:apurvgaurav@gmail.com"
                  className="hover:text-zinc-300"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/apurvgaurav"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/apurvgaurav"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-300"
                >
                  GitHub
                </a>
                <a
                  href="/contact"
                  className="font-medium text-zinc-300 hover:text-zinc-100"
                >
                  For hiring managers
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
