// app/media/page.tsx

import Link from "next/link";

export default function MediaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Speaking &amp; Media
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
        I&apos;m currently prioritizing building and research, but I&apos;m open
        to selective talks, panels, and podcasts on deterministic AI governance,
        edge AI, and AI product leadership.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Coming Soon
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50">
            Talks &amp; Guest Lectures
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Planned content on topics such as:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
            <li>Designing deterministic AI risk engines for enterprises.</li>
            <li>What AI PMs can learn from release engineering.</li>
            <li>Building edge AI systems that are actually privacy-first.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Open to Collaborations
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-50">
            Podcasts, Panels &amp; Interviews
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            If you&apos;re building content for AI leaders, I can speak about
            deterministic governance, practical AI risk management, and how to
            build AI products with clear accountability.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Reach out with format, audience, and recording details.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-blue-500/30 bg-slate-900/40 p-5">
        <p className="text-sm text-slate-300">
          For speaking and media inquiries,{" "}
          <Link href="/contact" className="font-medium text-blue-400 hover:text-blue-300">
            contact me here
          </Link>{" "}
          with a short description of your audience and topic.
        </p>
      </section>
    </main>
  );
}
