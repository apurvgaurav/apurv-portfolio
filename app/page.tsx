// app/page.tsx
import Link from "next/link";

const chips = [
  "Patent-Backed AI Product Leader",
  "8+ USPTO Filings",
  "Edge AI · Privacy · Alignment",
  "Deterministic Safety Systems",
];

const projects = [
  {
    title: "Edge-Deployed LLM V2: Privacy + Alignment",
    tag: "Flagship · Utility Patent Filed",
    summary:
      "Offline LLM assistant with self-forgetting memory and on-device alignment debugger designed for regulated environments and strict data residency.",
    bullets: [
      "100% offline inference with controllable memory vault",
      "Deterministic alignment debugger for prompt/output inspection",
      "Targeted for healthcare, telco, and enterprise privacy use cases",
    ],
  },
  {
    title: "AI Risk Navigator V2",
    tag: "Deterministic Risk Engine",
    summary:
      "Model-agnostic triage engine that detects hallucination, bias, latency anomalies, and safety violations using deterministic rule logic instead of ML.",
    bullets: [
      "Real-time multi-axis risk scoring and JSON policy export",
      "Replayable rule engine for audits and compliance reviews",
      "Designed to align with EU AI Act and NIST AI RMF principles",
    ],
  },
  {
    title: "LLM Code Safety Auditor",
    tag: "Docketed – Ready for Examination",
    summary:
      "Offline, rule-based engine to evaluate and remediate source code against security and compliance baselines such as OWASP.",
    bullets: [
      "AST-driven static checks with deterministic remediation ordering",
      "Full offline execution for air-gapped environments",
      "Designed as a non-generative safety layer, not another code assistant",
    ],
  },
];

export default function Home() {
  return (
    <main className="space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to L7/L8 AI Product Manager roles
          </div>

          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Apurv Gaurav
            </h1>
            <p className="mt-3 text-lg text-slate-300 sm:text-xl">
              Patent-backed AI Product Leader focused on{" "}
              <span className="font-semibold text-emerald-400">
                Edge AI, privacy, and deterministic safety
              </span>{" "}
              — building systems that enterprises can actually ship, audit, and
              trust.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              View signature projects
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-400 hover:text-white"
            >
              Contact / opportunities
            </Link>
            <Link
              href="https://drive.google.com"
              target="_blank"
              className="text-sm text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
            >
              Download resume (placeholder)
            </Link>
          </div>

          <p className="max-w-xl text-sm text-slate-400">
            I design and ship **LLM safety and governance products** that are
            testable, debuggable, and patent-backed. This portfolio highlights
            my end-to-end product thinking from problem framing to architecture,
            experiments, and GTM narrative.
          </p>
        </div>

        {/* QUICK FACTS CARD */}
        <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Snapshot
          </h2>
          <div className="mt-4 space-y-4 text-sm text-slate-200">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Location</span>
              <span>Philadelphia · USA</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Focus</span>
              <span className="text-right">
                Edge LLMs · Privacy · Risk &amp; Compliance
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Patents</span>
              <span>8+ USPTO non-provisional filings</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Current Track</span>
              <span className="text-right">
                L7/L8 AI Product Manager · FAANG / Tier-1
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-emerald-500/40 bg-emerald-500/5 px-3 py-3 text-xs text-emerald-200">
            Building a portfolio that demonstrates **repeatable patterns**:
            deterministic safety, offline-by-design, audit trails, and
            patent-grade architecture — not just pretty demos.
          </div>
        </aside>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Signature Projects
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Each project is backed by a USPTO filing, a working prototype, and
              a research-grade writeup.
            </p>
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            More case studies coming soon
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/40"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-300">
                    {project.tag}
                  </p>
                </div>
                <p className="text-xs text-slate-300">{project.summary}</p>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Case study &amp; demo coming soon</span>
                <button
                  type="button"
                  className="rounded-lg border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT / POSITIONING */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Product philosophy
          </h2>
          <p className="text-sm text-slate-300">
            I operate like a **L7/L8 AI Product Manager**: start from
            real-world constraints (privacy, regulation, infra limits), design
            deterministic systems around them, and then layer AI where it
            actually adds leverage — not just hype.
          </p>
          <p className="text-sm text-slate-300">
            My work combines **hands-on prototyping** (Next.js, Python,
            Streamlit, FastAPI), **research** (peer-reviewed papers and
            conference submissions), and **patent-backed architectures** to
            create assets that can withstand scrutiny from legal, security, and
            VPs at FAANG-scale companies.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          <h3 className="text-sm font-semibold text-slate-100">
            What you can use me for
          </h3>
          <ul className="mt-2 space-y-2 text-xs text-slate-300">
            <li>
              • Owning **end-to-end AI safety / governance products** from
              problem definition to v1 launch.
            </li>
            <li>
              • Translating legal / compliance requirements into **deterministic
              technical systems** that engineering can actually build.
            </li>
            <li>
              • Creating patent-ready architectures and research artifacts to
              strengthen your **AI product moat**.
            </li>
            <li>
              • Leading cross-functional reviews with security, legal, infra,
              and exec stakeholders.
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="space-y-4 border-t border-slate-800 pt-8">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
          Contact & opportunities
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          If you&apos;re building serious AI products — especially around
          safety, compliance, or edge deployment — I&apos;m interested in{" "}
          <span className="font-semibold text-emerald-300">
            L7/L8 AI Product Manager roles, Principal-level IC roles, or
            founder-style product leadership
          </span>{" "}
          where I can own a portfolio of high-stakes initiatives.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="mailto:apurvgaurav@gmail.com"
            className="rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-200"
          >
            Email: apurvgaurav@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/apurvgaurav"
            target="_blank"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-100 hover:border-slate-300"
          >
            LinkedIn Profile
          </Link>
          <Link
            href="https://github.com/apurvgaurav"
            target="_blank"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-100 hover:border-slate-300"
          >
            GitHub Projects
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          Full portfolio revamp in progress — additional case studies, diagrams,
          and live demos will roll out over the coming weeks.
        </p>
      </section>
    </main>
  );
}
