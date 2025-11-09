// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Contact & Opportunities
        </h1>

        <p className="text-sm text-slate-300">
          If you&apos;re building serious AI products — especially around safety,
          compliance, or edge deployment — I&apos;m interested in{" "}
          <span className="font-semibold text-emerald-300">
            L7/L8 AI Product Manager roles, Principal-level IC roles, or
            founder-style product leadership
          </span>{" "}
          where I can own a portfolio of high-stakes initiatives.
        </p>

        <div className="space-y-3 text-sm">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Email
            </div>
            <Link
              href="mailto:apurvgaurav@gmail.com"
              className="text-emerald-300 hover:underline"
            >
              apurvgaurav@gmail.com
            </Link>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              LinkedIn
            </div>
            <Link
              href="https://www.linkedin.com/in/apurvgaurav"
              target="_blank"
              className="text-emerald-300 hover:underline"
            >
              linkedin.com/in/apurvgaurav
            </Link>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              GitHub
            </div>
            <Link
              href="https://github.com/apurvgaurav"
              target="_blank"
              className="text-emerald-300 hover:underline"
            >
              github.com/apurvgaurav
            </Link>
          </div>
        </div>

        <p className="pt-4 text-xs text-slate-500">
          This page is intentionally simple and fully static — no forms, no
          JavaScript handlers — to keep the portfolio reliable and easy to
          deploy. A richer contact form can be added later as a dedicated client
          component.
        </p>
      </div>
    </main>
  );
}
