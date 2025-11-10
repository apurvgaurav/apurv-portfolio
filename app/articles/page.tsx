// app/articles/page.tsx

type ArticleCardProps = {
  title: string;
  status: string;
  description: string;
};

function ArticleCard({ title, status, description }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
          {status}
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Articles &amp; Writing
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          I write about the gap between infrastructure and intelligent systems —
          and what it takes to ship AI products that survive real-world
          constraints. This is the hub for my articles and series. Some are
          already drafted; others are in active planning.
        </p>
        <p className="text-xs text-slate-600 max-w-3xl">
          The ideas discussed here expand on frameworks I&apos;ve formally
          documented through eight non-provisional USPTO filings and related
          research papers in submission to venues such as Frontiers in AI and
          IEEE.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Article Pipeline
        </h2>
        <div className="space-y-4">
          <ArticleCard
            title="What AI PMs Can Learn from Continuous Delivery"
            status="Draft / Coming Soon"
            description="Using classic release engineering principles—canaries, observability, progressive rollout—to design safer AI products and policy-driven LLM deployments."
          />
          <ArticleCard
            title="From Infra to Intelligence: Designing AI Products That Survive Production"
            status="Planned"
            description="How to think about AI products as end-to-end systems: data, infra, safety layers, and feedback loops—not just prompts and UI."
          />
          <ArticleCard
            title="EdgeLLM V2 Deep Dive: Self-Forgetting Memory & On-Device Alignment"
            status="Draft / Coming Soon"
            description="A technical walkthrough of my EdgeLLM V2 architecture—how self-forgetting storage and deterministic alignment debugging work together."
          />
          <ArticleCard
            title="Deterministic AI Risk Scoring: Lessons from AI Risk Navigator"
            status="Planned"
            description="What I’ve learned building a rule-based LLM risk triage engine, and why determinism matters for compliance and reproducibility."
          />
        </div>
      </section>

      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <p className="text-sm font-semibold text-slate-900">
          Follow for New Articles
        </p>
        <p className="text-xs text-slate-600">
          Most articles will be published on LinkedIn first and then archived
          here. Follow me there if you want to see ideas as they ship.
        </p>
        <a
          href="https://linkedin.com/in/apurvgaurav"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-400 transition-colors"
        >
          Follow on LinkedIn
        </a>
      </section>
    </div>
  );
}
