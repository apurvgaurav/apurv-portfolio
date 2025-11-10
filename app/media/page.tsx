export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Media &amp; speaking
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Talks, interviews, and sessions on AI product, safety, and governance.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          I&apos;m building a portfolio of talks and interviews that mirror the themes of this
          site: edge AI, deterministic safety, and patent-backed product thinking. As they
          ship, I&apos;ll link recordings and slide decks here.
        </p>
      </header>

      {/* Upcoming / planned topics */}
      <section className="space-y-4">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Planned topics
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <p className="text-xs font-semibold text-slate-100">
              From Infra to Intelligence
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              How release ops, telemetry, and incident response shape senior AI product work.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <p className="text-xs font-semibold text-slate-100">
              Deterministic AI Safety
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              Why I separate safety engines (rule-based, replayable) from the model itself.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
            <p className="text-xs font-semibold text-slate-100">
              Edge LLMs and Code Security
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              Designing LLM systems that can actually run in privacy-critical and security-heavy stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for future entries */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Recordings &amp; appearances
        </h2>
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-4 md:p-5 space-y-2">
          <p className="text-sm font-medium text-slate-200">
            Coming soon — filling this with real talks, interviews, and guest sessions.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
            If you&apos;re organizing a conference, internal tech talk, or panel on AI product
            strategy, safety, or edge deployment, feel free to{" "}
            <a href="/contact" className="text-sky-400 hover:text-sky-300">
              reach out via the contact page
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
