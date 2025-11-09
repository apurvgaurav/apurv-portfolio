// components/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/story", label: "Story" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/patents", label: "Evidence" },
  { href: "/articles", label: "Articles" },
  { href: "/experience", label: "Experience" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-200 uppercase">
            Apurv Gaurav
          </span>
          <span className="text-[10px] text-slate-500">
            Patent-Backed AI Product Leader
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "transition hover:text-blue-400",
                pathname === item.href ? "text-blue-400" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
