// app/layout.tsx
import type { Metadata } from "next";
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
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
