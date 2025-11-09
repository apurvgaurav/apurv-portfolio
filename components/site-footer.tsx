// components/site-footer.tsx
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <p>© {year} Apurv Gaurav. Patent-backed AI Product Leader.</p>
        <div className="flex gap-4">
          <Link
            href="mailto:apurvgaurav@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-blue-400"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
