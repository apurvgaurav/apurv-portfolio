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
    images: ["/og-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader in Edge AI, LLM Safety and Privacy + Alignment.",
    images: ["/og-banner.png"],
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Extra OG/Twitter image safety */}
        <meta property="og:image" content="/og-banner.png" />
        <meta name="twitter:image" content="/og-banner.png" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
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
                "https://www.linkedin.com/in/apurv-gaurav/",
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
              href="https://www.linkedin.com/in/apurv-gaurav/"
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
