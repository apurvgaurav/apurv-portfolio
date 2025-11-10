// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // <- this is the correct line

import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Apurv Gaurav | Patent-Backed AI Product Leader",
  description:
    "Portfolio of Apurv Gaurav — Patent-backed AI Product Leader focused on Edge AI, Privacy, Alignment, and deterministic AI safety frameworks.",
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
