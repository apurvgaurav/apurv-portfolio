// app/experience/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience – AI Product Leadership – Apurv Gaurav",
  description:
    "Career experience leading AI product strategy, platform initiatives, and patent-backed innovation in large-scale environments.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* HERO */}
        <section className="border-b border-slate-200 pb-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              EXPERIENCE & EXECUTION
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From release engineering to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
                AI product systems.
              </span>
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              My background combines broadband systems reliability, field telemetry, and
              large-scale rollout discipline with patent-backed AI platforms. The goal:
              build AI products that behave like serious infrastructure, not side projects.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/assets/apurv_resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-900/40"
              >
                Download full résumé
                <span className="text-xs">↘</span>
              </Link>
              <Link
                href="/patents"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-[1px] hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20"
              >
                View patent-backed projects
              </Link>
            </div>
          </div>

          {/* Leadership metrics strip */}
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm shadow-slate-200/60 sm:grid-cols-4">
            <Metric value="8" label="Utility patent applications filed across AI, safety & code systems" />
            <Metric value="5" label="End-to-end prototypes shipped (Edge AI, LLM safety, code risk)" />
            <Metric value="10+" label="Years in large-scale systems, release, and reliability work" />
            <Metric value="1000s" label="Devices & users impacted via broadband & telemetry work" />
          </div>
        </section>

        {/* LEADERSHIP SUMMARY / INFOGRAPHIC */}
        <section className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              How I operate as an AI-focused product builder
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              I’ve spent years in environments where outages, regressions, and noisy data
              are not theoretical—they show up as real incidents. That experience now
              fuels how I design AI products: tight feedback loops, clear rollout plans,
              deterministic safety layers, and documentation that infra, security, and
              legal can actually use.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Translate vague &ldquo;AI initiative&rdquo; ideas into concrete system designs.</li>
              <li>• Look at data and telemetry first, not vibes, when prioritizing features.</li>
              <li>• Treat prompt flows, safety rules, and rollout plans like production code.</li>
              <li>• Write specs, diagrams, and docs that keep engineering and leadership aligned.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/70">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              LEADERSHIP SNAPSHOT
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <InfographicItem
                title="Cross-functional scope"
                bullet1="Engineering, infra, and operations partners"
                bullet2="Legal/compliance aware designs for AI risk & privacy"
              />
              <InfographicItem
                title="Decision style"
                bullet1="Metrics & telemetry over opinions"
                bullet2="Deterministic rules where it matters, ML where it’s safe"
              />
              <InfographicItem
                title="Delivery track"
                bullet1="Edge LLM privacy systems"
                bullet2="Risk triage & safety layers shipped as working prototypes"
              />
              <InfographicItem
                title="Documentation"
                bullet1="Deep dives, patent specs, and implementation-ready docs"
                bullet2="Clear enough for VPs, precise enough for engineers"
              />
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mt-12 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Role Timeline
              </h2>
              <p className="text-sm text-slate-600">
                A progression from large-scale systems and release operations to
                patent-backed AI platforms and product leadership.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-slate-200 md:left-1/2" />
            <div className="space-y-6">
              {/* Independent AI Product & Research */}
              <TimelineItem
                side="left"
                period="2023 – Present"
                title="AI Product & Systems Builder · Independent"
                company="Edge AI · LLM Safety · Code Risk"
                bullets={[
                  "Designed and implemented multiple AI platforms: EdgeLLM V2 (self-forgetting memory & on-device alignment), AI Risk Navigator (deterministic LLM risk scoring), and LLM Code Safety Auditor (offline, rule-based code evaluation).",
                  "Filed 8+ utility patent applications as sole inventor, covering edge-deployed LLMs, deterministic risk engines, AI audit trails, and rule-based safety layers.",
                  "Built end-to-end prototypes using Python, local LLMs, RAG pipelines, and modern web stacks, with a strong focus on offline execution and deterministic behavior.",
                  "Produced deep-dive documentation, whitepapers, and architecture diagrams crafted for both product and engineering review—positioning each system as a real product, not a demo."
                ]}
                impact={[
                  "Patent-backed IP portfolio across AI safety, privacy, and reliability.",
                  "Demonstrated ability to own problem framing, system design, and execution."
                ]}
              />

              {/* Comcast role – systems & telemetry */}
              <TimelineItem
                side="right"
                period="Recent"
                title="Systems & Reliability – Broadband Platforms"
                company="Comcast (Contract Role)"
                bullets={[
                  "Worked on broadband gateway platforms and firmware (RDK-B ecosystem), focusing on field reliability, telemetry, and issue triage at scale.",
                  "Analyzed real-world device behavior (Wi-Fi, QoS, customer-facing features) using logs and telemetry to identify regressions, edge cases, and negative user impact.",
                  "Partnered with engineers to reproduce, isolate, and drive resolution for complex field issues—often across multiple components and vendors.",
                  "Contributed to improving the quality of telemetry and diagnostics, building a stronger foundation for future AI/ML-driven analytics, anomaly detection, and automated remediation."
                ]}
                impact={[
                  "Hands-on exposure to large device fleets, noisy real-world data, and operational constraints.",
                  "Experience that directly informs how to design AI products that have to survive production, not just pass a demo."
                ]}
              />

              {/* Earlier release / ops experience */}
              <TimelineItem
                side="left"
                period="Earlier Career"
                title="Release Operations & Software Delivery"
                company="Previous Roles"
                bullets={[
                  "Managed releases, rollouts, and incident follow-up for critical software systems with real users and revenue impact.",
                  "Used canary releases, phased rollouts, and observability to reduce blast radius and protect user experience.",
                  "Collaborated with cross-functional teams (engineering, QA, support, business stakeholders) to prioritize fixes, coordinate releases, and document change impact.",
                  "Developed a habit of tying technical work back to reliability, customer impact, and long-term maintainability."
                ]}
                impact={[
                  "Grounded understanding of how production systems fail—and how to design around that reality.",
                  "Release discipline now carried directly into AI product design and rollout planning."
                ]}
              />
            </div>
          </div>
        </section>

        {/* WHY IT’S LOW-RISK TO HIRE ME */}
        <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm shadow-emerald-100/60">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                WHY THIS EXPERIENCE MATTERS
              </p>
              <h2 className="text-lg font-semibold text-slate-900">
                If you’re hiring for AI product, you want someone who has seen systems break.
              </h2>
              <p className="text-sm leading-relaxed text-slate-800">
                I’m not experimenting with AI in a vacuum. My work in broadband platforms
                and release operations keeps me grounded in latency, reliability, noisy
                telemetry, and real customer impact. The AI products I design are built
                with that reality in mind—edge cases first, compliance and safety included.
              </p>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>• I bring <span className="font-semibold">proven execution</span> on complex systems, not just prompt experiments.</li>
                <li>• I write <span className="font-semibold">clear, structured docs</span> that help teams move faster with fewer surprises.</li>
                <li>• I care about <span className="font-semibold">auditability, observability, and long-term maintainability</span>, not just launch dates.</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-900 px-4 py-4 text-slate-50 shadow-md shadow-slate-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                FOR RECRUITERS & HIRING MANAGERS
              </p>
              <p className="text-sm text-slate-100">
                You’re not taking a gamble on “someone who wants to get into AI.” You’re
                hiring someone already building AI systems the way infra teams expect:
                deterministic where needed, observable, and documented.
              </p>
              <div className="mt-3 flex flex-col gap-2 text-xs">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 shadow-md shadow-emerald-500/40 transition duration-200 hover:-translate-y-[1px] hover:bg-emerald-400"
                >
                  Discuss a role or project
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 px-4 py-2 font-semibold text-emerald-100 transition duration-200 hover:border-emerald-200 hover:text-white"
                >
                  See how I think about AI products →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* --- Reusable components --- */

type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="space-y-1">
      <p className="text-lg font-semibold text-slate-900 sm:text-xl">
        {value}
      </p>
      <p className="text-xs leading-snug text-slate-500">{label}</p>
    </div>
  );
}

type InfographicItemProps = {
  title: string;
  bullet1: string;
  bullet2: string;
};

function InfographicItem({ title, bullet1, bullet2 }: InfographicItemProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
      <p className="text-xs font-semibold text-slate-800">{title}</p>
      <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
        <li>• {bullet1}</li>
        <li>• {bullet2}</li>
      </ul>
    </div>
  );
}

type TimelineItemProps = {
  side: "left" | "right";
  period: string;
  title: string;
  company: string;
  bullets: string[];
  impact: string[];
};

function TimelineItem({
  side,
  period,
  title,
  company,
  bullets,
  impact,
}: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <div className="relative md:flex md:items-stretch">
      <div
        className={`hidden md:block md:w-1/2 ${
          isLeft ? "md:pr-6" : "md:pl-6 md:order-2"
        }`}
      >
        <div className="h-full" />
      </div>

      {/* Dot */}
      <div className="absolute left-3 top-3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-50 md:left-1/2 md:-translate-x-1/2">
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
      </div>

      {/* Card */}
      <div
        className={`mt-4 md:mt-0 md:w-1/2 ${
          isLeft ? "md:pl-6 md:order-2" : "md:pr-6 md:order-1"
        }`}
      >
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            {period}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-xs font-medium text-slate-600">{company}</p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-700">
            {bullets.map((b, idx) => (
              <li key={idx}>• {b}</li>
            ))}
          </ul>
          <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Impact
            </p>
            <ul className="mt-1 space-y-1 text-[11px] text-slate-600">
              {impact.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
