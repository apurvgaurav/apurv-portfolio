// app/story/page.tsx
export default function StoryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          From release ops to deterministic AI governance
        </h1>
        <p className="text-sm text-slate-300 md:text-base">
          I started in release operations, where reliability and metrics
          mattered more than hype. Working inside complex release pipelines
          trained me to think in systems, not features. Every change had to be
          observable, auditable, and reversible.
        </p>
        <p className="text-sm text-slate-300 md:text-base">
          As AI moved from research labs into products, I saw the same problems
          repeat: opaque systems, non-deterministic behavior, and governance
          added as an afterthought. I took the discipline from continuous
          delivery and applied it to AI safety and alignment.
        </p>
        <p className="text-sm text-slate-300 md:text-base">
          Today my work focuses on deterministic AI governance at the edge:
          building systems like EdgeLLM V2, AI Risk Navigator, and LLM Code
          Safety Auditor that make AI behavior predictable, auditable, and ready
          for real-world regulation.
        </p>
      </section>
    </main>
  );
}
