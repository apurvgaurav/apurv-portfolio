"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

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
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => {
    if (!pathname) return "/";
    if (pathname === "/") return "/";
    const segments = pathname.split("/").filter(Boolean);
    return "/" + (segments[0] || "");
  }, [pathname]);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      {/* Top bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2" onClick={close}>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            Apurv Gaurav
          </span>
          <span className="hidden sm:inline text-xs text-slate-500">
            Patent-Backed AI Product Leader
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-2.5 py-1.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-0.5">
            <span className="block h-[2px] w-4 bg-slate-700 rounded" />
            <span className="block h-[2px] w-4 bg-slate-700 rounded" />
            <span className="block h-[2px] w-4 bg-slate-700 rounded" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
