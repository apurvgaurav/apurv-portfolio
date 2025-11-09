// app/contact/page.tsx

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Work With Me
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
        For recruiting, collaboration, or speaking opportunities, reach out with
        a short description of the role, the product surface, and how AI fits
        into your roadmap. I&apos;m focused on L7/L8-level AI Product roles and
        deep, high-leverage collaborations.
      </p>

      {/* Direct contacts */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-300">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Direct Contact
          </h2>
          <p>
            <span className="text-slate-400">Email:</span>{" "}
            <Link
              href="mailto:apurvgaurav@gmail.com"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              apurvgaurav@gmail.com
            </Link>
          </p>
          <p>
            <span className="text-slate-400">LinkedIn:</span>{" "}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              View profile
            </Link>
          </p>
          <p className="text-xs text-slate-400">
            For confidential roles, feel free to mention if you&apos;re in
            stealth or under NDA; I&apos;m used to operating with boundaries.
          </p>
        </div>

        {/* Simple form (front-end only) */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Message
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            This form does not send anywhere yet; wire it to Formspree, a
            backend, or your own API when you&apos;re ready.
          </p>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-xs font-medium text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Submit (placeholder)
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
