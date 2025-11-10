// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-10">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Contact & Opportunities
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            Thanks for visiting my portfolio. If you’re hiring or collaborating
            on frontier-level AI products — particularly in{" "}
            <span className="font-semibold text-emerald-300">
              safety, governance, privacy, or edge-deployed LLMs
            </span>{" "}
            — I’d love to connect.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
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

          <div className="space-y-2">
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

          <div className="space-y-2">
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

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Calendly
            </div>
            <Link
              href="https://calendly.com/apurvgaurav/30min"
              target="_blank"
              className="text-emerald-300 hover:underline"
            >
              Schedule a conversation
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <p className="pt-6 text-xs text-slate-500">
          This page is intentionally static — no forms or JavaScript handlers —
          so it stays fast, private, and reliable across devices. For enterprise
          discussions or confidential project inquiries, please email directly.
        </p>

        <div className="pt-10 border-t border-slate-800 text-xs text-slate-600">
          © {new Date().getFullYear()} Apurv Gaurav — Patent-Backed AI Product
          Leader
        </div>
      </div>
    </main>
  );
}
