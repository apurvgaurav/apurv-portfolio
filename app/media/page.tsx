// app/media/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks, Appearances & Community Engagement – Apurv Gaurav",
  description:
    "Talk topics, guest lectures, and invite-only roundtables on AI governance, product responsibility, and edge intelligence.",
};

export default function MediaPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-slate-900 text-slate-50 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Talks &amp; Appearances
        </h1>
        <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
          I design AI systems that can survive scrutiny from security, legal,
          and regulators — not just demos. These are the topics I speak about
          in conferences, internal tech talks, and guest lectures.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          I&apos;m available for talks, guest lectures, and private briefings
          focused on Edge AI, deterministic safety, and patent-backed product
          strategy. Below are core topics I&apos;m building into full talks and
          workshops. Recording slots are available from upcoming cycles.
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
              How to move beyond black-box trust and design rule-based,
              auditable safety layers around LLMs. Focused on systems that can
              be inspected and defended when regulators or security teams start
              asking hard questions.
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
              Architectural patterns for running LLMs on-device while
              respecting privacy laws and internal policies. Tailored for
              healthcare, finance, telecom, and other regulated domains.
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

      {/* Community Engagement */}
          {/* Community Engagement */}
      <section className="mt-10 space-y-6">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    Community Engagement
  </h2>

  {/* Invite 1 */}
  <article className="rounded-xl border border-gray-200 p-5 bg-white/70 shadow-sm">
    <h3 className="text-lg font-semibold text-indigo-700">
      Invited: AI Policy &amp; Leadership Roundtable
    </h3>
    <p className="mt-2 text-gray-700">
      Invitation to an industry session on{" "}
      <span className="font-medium">
        “AI Governance and Product Responsibility”
      </span>{" "}
      hosted by senior AI professionals and policy experts.
      <span className="block text-sm text-gray-500 mt-1">
        November&nbsp;2025 · Virtual · Status: Invited, unable to attend due to
        scheduling
      </span>
    </p>
    <p className="mt-2 text-sm text-gray-600">
      Although I couldn't join this closed-door session, it reflected strong
      alignment between my patent-backed work on deterministic AI safety and the
      industry’s evolving governance standards.
    </p>
  </article>

  {/* Invite 2 */}
  <article className="rounded-xl border border-gray-200 p-5 bg-white/70 shadow-sm">
    <h3 className="text-lg font-semibold text-indigo-700">
      Invited: Telecom Innovation &amp; Trust Roundtable
    </h3>
    <p className="mt-2 text-gray-700">
      Personal invitation to a private virtual roundtable with senior leaders
      from Lyca&nbsp;Mobile, Three, Tango and others on{" "}
      <span className="font-medium">
        “Unlocking New Revenue, Trust, and Loyalty in the Mobile Market.”
      </span>
      <span className="block text-sm text-gray-500 mt-1">
        October&nbsp;2025 · 90-minute virtual session · Status: Invited, unable
        to attend due to scheduling
      </span>
    </p>
    <p className="mt-2 text-sm text-gray-600">
      Although I couldn't join this session, I treat these invitations as
      signals that my work across broadband, edge intelligence, and AI product
      strategy aligns with where the telecom industry is heading.
    </p>
  </article>
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
