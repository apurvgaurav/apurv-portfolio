// app/media/page.tsx

import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-slate-900 text-slate-50 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Talks &amp; Appearances
        </h1>
        <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
          I design AI systems that can survive scrutiny from security, legal, and
          regulators — not just demos. These are the topics I speak about in
          conferences, internal tech talks, and guest lectures.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          I&apos;m available for talks, guest lectures, and private briefings focused
          on Edge AI, deterministic safety, and patent-backed product strategy.
          Below are core topics I&apos;m building into full talks and workshops.
          Recording slots are available starting from upcoming cycles.
        </p>
      </section>

      {/* Topics */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Core Topics
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Deterministic AI Safety in Production Systems
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              How to move beyond black-box trust and design rule-based, auditable
              safety layers around LLMs. Focused on systems that can be inspected
              and defended when regulators or security teams start asking hard
              questions.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              Format: 30–45 minute talk + Q&amp;A · Status: Available
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Edge-Deployed LLMs in Regulated Environments
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Architectural patterns for running LLMs on-device while respecting
              privacy laws and internal policies. Tailored for healthcare, finance,
              telecom, and other regulated domains.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              Format: 30–60 minute session · Status: Available for 2026+ slots
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              From Patents to Product: Building Defensible AI Platforms
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              How to treat patents as product infrastructure, not just legal
              paperwork. Covers framing problems, designing for non-obviousness,
              and aligning IP with a long-term roadmap.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              Format: Talk or workshop · Status: Available
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <p className="text-sm font-semibold text-slate-900">
          Invite Me to Speak
        </p>
        <p className="text-xs text-slate-600">
          For conference slots, internal tech talks, or guest lectures, include
          event name, audience, format, and proposed timing. I&apos;m happy to
          adapt content depth for engineering, product, or leadership audiences.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:apurvgaurav@gmail.com?subject=Speaking%20Invitation&body=Event%20name%3A%0AAudience%3A%0AFormat%20(talk%2C%20panel%2C%20workshop)%3A%0ATimeline%3A%0AExpected%20outcome%3A"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
          >
            Invite Me to Speak
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Go to Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
