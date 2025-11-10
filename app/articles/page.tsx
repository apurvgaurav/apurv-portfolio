export const metadata = {
  title: "Articles",
  description:
    "Writing at the intersection of infrastructure, deterministic AI safety, and senior AI product strategy.",
};


type ArticleStatus = "Published" | "Draft" | "Coming soon";

type Article = {
  id: string;
  title: string;
  subtitle: string;
  status: ArticleStatus;
  theme: string;
  href?: string; // optional for now
  note?: string;
};

const articles: Article[] = [
  {
    id: "cd-to-ai-pm-1",
    title: "What AI PMs Can Learn from Continuous Delivery",
    subtitle:
      "How release engineering, field telemetry, and incident response shape my approach to AI product strategy.",
    status: "Draft",
    theme: "AI Product Strategy · Systems Thinking",
    note: "Part 1 of the series: From Infra to Intelligence.",
  },
  {
    id: "cd-to-ai-pm-2",
    title: "From Infra to Intelligence: Designing AI Products That Survive Production",
    subtitle:
      "Bridging Jez Humble’s principles with modern LLM systems: guardrails, observability, and rollback in AI products.",
    status: "Coming soon",
    theme: "AI Platforms · Reliability",
    note: "Planned as Part 2 of the series.",
  },
  {
    id: "cd-to-ai-pm-3",
    title: "Operating at L7 Scope: Patents, Prototypes, and Real Constraints",
    subtitle:
      "Why I treat patents, prototypes, and governance policies as a single product surface, not separate workstreams.",
    status: "Coming soon",
    theme: "Senior IC Scope · Execution",
    note: "Planned as Part 3 of the series.",
  },
  {
    id: "edgellm-v2-deep-dive",
    title: "EdgeLLM V2: Building a Privacy-Preserving LLM That Auditors Don’t Hate",
    subtitle:
      "A product-focused walkthrough of the EdgeLLM V2 architecture: self-forgetting memory, on-device alignment debugger, and audit trails.",
    status: "Draft",
    theme: "Edge AI · Privacy · Alignment",
  },
  {
    id: "ai-risk-navigator-paper",
    title: "Deterministic AI Risk: Why I Don’t Let the Model Judge Itself",
    subtitle:
      "Lessons from designing AI Risk Navigator: rule-based risk vectors, JSON policies, and replayable moderation decisions.",
    status: "Draft",
    theme: "AI Safety · Governance",
  },
  {
    id: "code-safety-auditor-article",
    title: "LLM Code Safety Auditor: Non-Generative Code Security in an LLM World",
    subtitle:
      "Offline rule engines, OWASP-style mapping, and why determinism matters when security teams are on the hook.",
    status: "Coming soon",
    theme: "Code Security · DevSecOps",
  },
];

function statusStyles(status: ArticleStatus) {
  switch (status) {
    case "Published":
      return "border-emerald-500/70 text-emerald-300 bg-emerald-900/20";
    case "Draft":
      return "border-amber-500/70 text-amber-300 bg-amber-900/20";
    case "Coming soon":
    default:
      return "border-slate-600 text-slate-300 bg-slate-900/60";
  }
}

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 space-y-12 md:px-6 md:pb-24 md:pt-16">
      {/* Page header */}
      <header className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-400 uppercase">
          Articles
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Writing at the intersection of infra, safety, and AI product.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[0.94rem]">
          I write to connect my background in release operations, telemetry, and real-world
          constraints with modern AI product strategy. Most pieces are aimed at leaders and
          teams who need AI systems that survive audits, incidents, and production traffic —
          not just look good in a demo.
        </p>
        <p className="max-w-3xl text-[11px] leading-relaxed text-slate-400">
          As new posts go live on LinkedIn, Medium, or conference venues, I&apos;ll link them
          here. For now, treat this as a map of the themes I care about and the stories I&apos;m
          actively shaping.
        </p>
      </header>

      {/* Writing themes */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Theme 1 · From Infra to Intelligence
          </h2>
          <p className="text-xs leading-relaxed text-slate-300">
            How release ops, incident response, and telemetry thinking make AI product
            decisions sharper — and less hand-wavy.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Theme 2 · Deterministic AI Safety
          </h2>
          <p className="text-xs leading-relaxed text-slate-300">
            Why I bias toward rule-based, replayable engines (AI Risk Navigator, AutoJudge,
            Self-Healing Prompt Engine) instead of letting models moderate themselves.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-2">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Theme 3 · Edge, Privacy, and Code Security
          </h2>
          <p className="text-xs leading-relaxed text-slate-300">
            Making LLMs deployable in privacy-sensitive, regulated, and high-stakes
            environments — where logs and lawyers both matter.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="space-y-4 border-t border-slate-800 pt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Featured articles &amp; series
          </h2>
          <p className="text-[11px] text-slate-400">
            Status: Published, Draft, or Coming soon
          </p>
        </div>

        <div className="space-y-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/70 hover:bg-slate-900 md:p-5"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-[0.98rem]">
                    {article.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {article.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {article.theme}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 md:items-end">
                  <span
                    className={
                      "rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] " +
                      statusStyles(article.status)
                    }
                  >
                    {article.status}
                  </span>
                  {article.note && (
                    <p className="text-[11px] text-slate-400 text-left md:text-right">
                      {article.note}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                {article.href ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 group-hover:text-sky-300"
                  >
                    Read article →
                  </a>
                ) : (
                  <span className="text-slate-500">
                    Link will be added when published.
                  </span>
                )}
                <span>
                  Drafting and publishing cadence is aligned with my patent and prototype work.
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
