// app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contact | Apurv Gaurav – AI Product, Edge AI & LLM Safety",
  description:
    "Contact Apurv Gaurav to discuss AI Product roles, edge-deployed LLM systems, deterministic AI safety layers, and patent-backed AI platforms.",
  keywords: [
    "AI Product Manager",
    "Edge AI",
    "LLM Safety",
    "AI Risk",
    "Deterministic AI",
    "Apurv Gaurav",
    "AI Product Roles",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* AVAILABILITY BANNER */}
        <section className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-sm shadow-emerald-100/60">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            AVAILABILITY
          </p>
          <div className="mt-2 flex flex-col gap-1 text-sm text-slate-900 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">
              Open to AI Product / AI Systems roles in FAANG-level and high-bar teams.
            </p>
            <p className="text-xs text-slate-700">
              Focus: Edge AI · LLM Safety · Deterministic Governance
            </p>
          </div>
        </section>

        {/* HEADER */}
        <section className="border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            CONTACT
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let’s talk about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
              real AI products.
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Whether you’re hiring for an AI Product role, exploring a specific edge/LLM
            safety problem, or want a second brain on architecture and risk, I’m happy to
            dive in. Short, direct conversations are usually the most useful—no fluff.
          </p>
        </section>

        {/* MAIN LAYOUT */}
        <section className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          {/* CONTACT FORM (STATIC) */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/70">
            <h2 className="text-sm font-semibold text-slate-900">
              Send a message
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Share a bit of context and how I can help. I usually respond faster to
              concrete questions and clear problems.
            </p>

            <form className="mt-4 space-y-4" method="post" action="#">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What problem are you solving, and how can I help?"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white shadow-sm shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800"
              >
                Submit message
              </button>

              <p className="text-[11px] text-slate-400">
                For now, this form is a visual placeholder. For time-sensitive topics,
                please contact me directly via email or LinkedIn below.
              </p>
            </form>
          </div>

          {/* DIRECT LINKS / SHORT NOTE */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/70">
              <h2 className="text-sm font-semibold text-slate-900">
                Prefer direct contact?
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                If you already know what you’re looking for, these are the fastest ways
                to reach me.
              </p>

              <div className="mt-3 space-y-2 text-xs">
                <Link
                  href="mailto:apurvgaurav@gmail.com"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-500 hover:bg-white"
                >
                  <span className="font-medium text-slate-800">
                    Email
                  </span>
                  <span className="text-[11px] text-slate-600">
                    apurvgaurav@gmail.com
                  </span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/apurvgaurav"
                  target="_blank"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-500 hover:bg-white"
                >
                  <span className="font-medium text-slate-800">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-slate-600">
                    View profile & message ↗
                  </span>
                </Link>

                <Link
                  href="https://calendly.com"
                  target="_blank"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-500 hover:bg-white"
                >
                  <span className="font-medium text-slate-800">
                    Calendly
                  </span>
                  <span className="text-[11px] text-slate-600">
                    Propose a 20–30 min call ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 px-4 py-4 text-xs text-slate-50 shadow-md shadow-slate-900/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                FOR RECRUITERS & HIRING MANAGERS
              </p>
              <p className="mt-2">
                If your team is working on edge-deployed LLMs, AI safety layers, or
                production AI platforms and you want someone who already thinks in terms
                of systems, risk, and rollout—not just prompts—let’s talk.
              </p>
              <p className="mt-2 text-[11px] text-slate-300">
                Best use of our time: send 2–3 lines about your problem space and where
                you think I might plug in. I’ll respond with concrete next steps, not
                vague enthusiasm.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
