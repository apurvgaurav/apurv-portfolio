// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Apurv Gaurav | Patent-backed AI Product Leader specializing in Edge AI, LLM Safety and Privacy + Alignment.",
  metadataBase: new URL("https://www.apurvgaurav.ai"),
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader in Edge AI, LLM Safety and Privacy + Alignment.",
    url: "https://www.apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader in Edge AI, LLM Safety and Privacy + Alignment.",
  },
  keywords: [
    "Apurv Gaurav",
    "AI Product Manager",
    "Edge AI",
    "LLM Safety",
    "AI Privacy",
    "Patent-backed AI Leader",
    "AI Product Strategy",
  ],
  authors: [{ name: "Apurv Gaurav", url: "https://www.apurvgaurav.ai" }],
  creator: "Apurv Gaurav",
  publisher: "Apurv Gaurav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
<meta property="og:title" content="Apurv Gaurav – Patent-Backed AI Product Leader" />
<meta property="og:description" content="Building deterministic, audit-ready AI systems in Edge AI, LLM Safety, and Privacy + Alignment." />
<meta property="og:image" content="/og-banner.png" />
<meta property="og:url" content="https://www.apurvgaurav.ai" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Apurv Gaurav – Patent-Backed AI Product Leader" />
<meta name="twitter:description" content="Patent-backed AI Product Leader focused on Edge AI, LLM Safety, and Privacy + Alignment." />
<meta name="twitter:image" content="/og-banner.png" />

        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="/og-banner.png"
        />
        <meta
          name="twitter:image"
          content="/og-banner.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Apurv Gaurav",
              url: "https://www.apurvgaurav.ai",
              jobTitle: "AI Product Leader",
              description:
                "Patent-backed AI Product Leader specializing in Edge AI, LLM Safety, and Privacy + Alignment. 8 USPTO filings and production-ready prototypes.",
              sameAs: [
                "https://www.linkedin.com/in/apurvgaurav",
                "https://github.com/apurvgaurav",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

        <footer className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Apurv Gaurav · Patent-Backed AI Product
            Leader ·{" "}
            <Link
              href="https://www.linkedin.com/in/apurvgaurav"
              className="text-indigo-600 hover:text-indigo-500"
            >
              LinkedIn
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
