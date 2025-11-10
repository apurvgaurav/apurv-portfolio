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
      <body className="bg-black text-zinc-50">{children}</body>
    </html>
  );
}
