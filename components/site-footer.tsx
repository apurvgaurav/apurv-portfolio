// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-100 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">Apurv Gaurav</p>
            <p className="text-xs text-slate-300">
              Patent-Backed AI Product Leader · Edge AI · Privacy & Alignment ·
              Deterministic AI Safety
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <a
              href="mailto:apurvgaurav@gmail.com"
              className="hover:text-blue-300 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/apurvgaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
            <nav className="flex flex-wrap gap-3">
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link
                href="/experience"
                className="hover:text-blue-300 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/patents"
                className="hover:text-blue-300 transition-colors"
              >
                Patents
              </Link>
              <Link
                href="/media"
                className="hover:text-blue-300 transition-colors"
              >
                Media
              </Link>
              <Link
                href="/articles"
                className="hover:text-blue-300 transition-colors"
              >
                Articles
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="text-[11px] text-slate-400">
          © {year} Apurv Gaurav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
