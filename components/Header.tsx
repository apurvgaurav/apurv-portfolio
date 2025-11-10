// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/patents", label: "Patents" },
  { href: "/media", label: "Media" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const activePath = useMemo(() => {
    if (!pathname) return "/";
    if (pathname === "/") return "/";
    const segments = pathname.split("/").filter(Boolean);
    return "/" + (segments[0] || "");
  }, [pathname]);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">
            Apurv Gaurav
          </span>
          <span className="hidden sm:inline text-xs text-slate-500">
            Patent-Backed AI Product Leader
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
