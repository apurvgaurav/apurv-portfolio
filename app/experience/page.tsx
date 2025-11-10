export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Page header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Experience
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Systems, safety, and shipping under real constraints.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          My background blends large-scale platform operations, hands-on debugging, and
          patent-backed AI product work. I&apos;m comfortable living where messy logs,
          regulatory requirements, and product timelines collide — and turning that
          chaos into shippable, audit-ready systems.
        </p>
      </header>

      {/* Current focus + role snapshot */}
      <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-3">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Current focus
          </h2>
          <p className="text-sm font-medium text-slate-100">
            Independent AI Product Lab · Patent-backed platforms
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            I run a personal &quot;AI product lab&quot; focused on edge-deployed LLMs,
            deterministic safety engines, and code security. This includes{" "}
            <span className="text-slate-100">
              EdgeLLM V2, AI Risk Navigator, LLM Code Safety Auditor, PromptPilot,
              AutoRedact AI, and TraceSafe AI
            </span>{" "}
            — each with a clear problem statement, architecture, and USPTO
            non-provisional filing.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
            <li>• 8+ non-provisional patent applications drafted and filed pro se.</li>
            <li>• Prototypes and dashboards built with Python, local LLMs, and web UIs.</li>
            <li>• Research papers targeting venues like Frontiers in AI and IEEE.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-3">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Academic track
          </h2>
          <p className="text-sm font-medium text-slate-100">
            Doctor of Engineering (DEng) · Penn State (in progress)
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            I&apos;m pursuing a Doctor of Engineering with a focus on innovation, systems
            thinking, and data-driven decision-making — aligning coursework, projects, and
            research outputs with my AI safety and governance work.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
            <li>• Translating academic projects into publishable papers and real prototypes.</li>
            <li>• Prior Master&apos;s from the University of Pennsylvania (2010).</li>
          </ul>
        </div>
      </section>

      {/* Role timeline */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Selected roles
        </h2>

        <div className="space-y-4">
          {/* Comcast */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  Platform / Release Operations – Broadband &amp; Wi-Fi (Contract)
                </p>
                <p className="text-xs text-slate-400">
                  Comcast · Large-scale consumer gateways &amp; telemetry
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                Focus: reliability · telemetry · real-world constraints
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
              Worked across firmware, telemetry, and release workflows for broadband gateways,
              helping debug issues in the field and coordinate fixes across multiple teams.
              Spent a lot of time inside logs, traces, and real customer edge cases — the
              exact mindset I now bring to AI systems and safety tooling.
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
              <li>• Triaged and analyzed complex issues across Wi-Fi, QoS, and device telemetry.</li>
              <li>• Collaborated with engineers and PMs to coordinate fixes and validate releases.</li>
              <li>• Built a habit of treating logs, metrics, and edge cases as core product signals.</li>
            </ul>
          </article>

          {/* Independent AI product work */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  Independent AI Product Builder
                </p>
                <p className="text-xs text-slate-400">
                  Self-directed · Patent-backed AI product portfolio
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                Focus: AI safety · governance · code security
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
              Designed and executed a portfolio of AI products anchored in real compliance and
              security constraints. Each initiative is treated like a full product line: problem
              framing, architecture, patent strategy, prototype, and narrative for executives.
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
              <li>
                • EdgeLLM V2: Offline, privacy-preserving LLM assistant with self-forgetting
                memory and alignment debugger.
              </li>
              <li>
                • AI Risk Navigator: Deterministic triage of hallucination, bias, and latency
                risks with JSON risk vectors and replayable logs.
              </li>
              <li>
                • LLM Code Safety Auditor: Offline rule engine for code scanning and deterministic,
                explainable remediation.
              </li>
            </ul>
          </article>

          {/* Earlier foundation */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  Earlier engineering &amp; systems roles
                </p>
                <p className="text-xs text-slate-400">
                  Mix of software, operations, and systems work
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                Focus: execution discipline · system thinking
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
              Before going deep into AI product and safety, I built a foundation across software,
              operations, and systems work — giving me empathy for the people who have to
              actually run and maintain the things we design.
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300 md:text-[0.94rem]">
              <li>• Hands-on experience working close to production systems and constraints.</li>
              <li>• Exposure to cross-functional work with engineers, operations, and product.</li>
              <li>• Built a bias toward reliability, clarity, and strong documentation.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* How this maps to AI PM */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          How this maps to L7+ AI product work
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          I think like an L7 AI PM by default: I treat each product as a system that must survive
          legal, security, infra, and real users — not just a demo. My edge ops background keeps
          me grounded in reality, and my patent and research work pushes me to design for what&apos;s
          coming next, not just what already exists.
        </p>
      </section>
    </div>
  );
}
