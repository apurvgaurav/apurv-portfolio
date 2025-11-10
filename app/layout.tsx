import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurv Gaurav – Patent-Backed AI Product Leader",
  description:
    "Apurv Gaurav builds edge AI, safety, and governance products that survive real auditors.",
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Patents", href: "/patents" },
  { name: "Media", href: "/media" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        <div className="flex min-h-screen flex-col">
          {/* Global header */}
          <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Apurv Gaurav
                </span>
              </Link>

              <nav className="flex items-center gap-4 text-sm text-slate-300">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase transition hover:bg-slate-800 hover:text-slate-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Global footer */}
          <footer className="border-t border-slate-800 bg-slate-900/90">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-300">
                  Patent-backed AI product leader.
                </p>
                <p>
                  Edge LLMs · Privacy · AI risk · Code safety · Governance
                  under real auditors.
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p>© {year} Apurv Gaurav</p>
                <p className="text-[11px]">
                  Built with Next.js, Tailwind CSS, and Vercel.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
