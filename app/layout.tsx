// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // <- this is the correct line

import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Apurv Gaurav | Patent-Backed AI Product Leader",
  description:
    "Apurv Gaurav is a patent-backed AI Product Leader focused on Edge AI, privacy, and deterministic AI safety frameworks for real-world systems.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Apurv Gaurav | Patent-Backed AI Product Leader",
    description:
      "Portfolio of Apurv Gaurav — AI Product Leader with 8 non-provisional USPTO filings focused on edge-deployed LLMs, deterministic safety, and code security.",
    url: "https://apurvgaurav.ai",
    siteName: "Apurv Gaurav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Gaurav | Patent-Backed AI Product Leader",
    description:
      "Patent-backed AI Product Leader focused on Edge AI, privacy, and deterministic safety.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
