// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Patent-backed AI Product Leader focused on edge-deployed LLMs, AI safety, and deterministic governance. Building systems that infra, legal, and users can all trust.",
  keywords: [
    "AI Product Manager",
    "Edge AI",
    "LLM Safety",
    "AI Risk",
    "Deterministic AI",
    "Apurv Gaurav",
  ],
  metadataBase: new URL("https://apurvgaurav.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Apurv Gaurav",
    jobTitle: "AI Product Manager",
    url: "https://apurvgaurav.ai",
    image: "https://apurvgaurav.ai/assets/apurv_photo.jpg",
    sameAs: [
      "https://www.linkedin.com/in/apurvgaurav",
      "mailto:apurvgaurav@gmail.com",
    ],
    knowsAbout: [
      "Edge AI",
      "Large Language Models",
      "LLM Safety",
      "AI Product Management",
      "Risk Governance",
      "Deterministic AI Systems",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        <div className="min-h-screen">
          {children}
        </div>

        {/* GA4 – replace G-XXXXXXX with your real Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
