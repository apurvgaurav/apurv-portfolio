// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Apurv Gaurav is a patent-backed AI Product Leader specializing in Edge AI, LLM Safety, and Privacy + Alignment. 8 USPTO filings, production-ready prototypes, and research in responsible AI systems.",
  metadataBase: new URL("https://www.apurvgaurav.ai"),
  openGraph: {
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader in Edge AI, LLM Safety, and Privacy + Alignment.",
    url: "https://www.apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav – Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader in Edge AI, LLM Safety, and Privacy + Alignment.",
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
      <body className="bg-gray-50 text-gray-900 antialiased">
        {/* NAVIGATION BAR */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition"
            >
              Apurv Gaurav
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link
                href="/"
                className="nav-link hover:text-indigo-600 transition"
              >
                Home
              </Link>
              <Link
                href="/experience"
                className="nav-link hover:text-indigo-600 transition"
              >
                Experience
              </Link>
              <Link
                href="/patents"
                className="nav-link hover:text-indigo-600 transition"
              >
                Patents
              </Link>
              <Link
                href="/research"
                className="nav-link hover:text-indigo-600 transition"
              >
                Research
              </Link>
              <Link
                href="/demos"
                className="nav-link hover:text-indigo-600 transition"
              >
                Demos
              </Link>
              <Link
                href="/media"
                className="nav-link hover:text-indigo-600 transition"
              >
                Media
              </Link>
              <Link
                href="/articles"
                className="nav-link hover:text-indigo-600 transition"
              >
                Articles
              </Link>
              <Link
                href="/contact"
                className="nav-link hover:text-indigo-600 transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Apurv Gaurav · Patent-Backed AI Product
            Leader ·{" "}
            <Link
              href="https://www.apurvgaurav.ai"
              className="text-indigo-600 hover:text-indigo-500"
            >
              apurvgaurav.ai
            </Link>
          </p>
        </footer>

       
      </body>
    </html>
  );
}
