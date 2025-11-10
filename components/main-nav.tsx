"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Patents", href: "/patents" },
  { name: "Media", href: "/media" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-3 text-xs text-slate-300 md:flex">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "rounded-full px-3 py-1 font-medium tracking-[0.16em] uppercase transition",
              isActive
                ? "bg-sky-500 text-slate-950"
                : "hover:bg-slate-800 hover:text-slate-100",
            ].join(" ")}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
