// app/articles/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Articles | Apurv Gaurav – AI Product, Edge AI & LLM Safety",
  description:
    "Articles and deep dives on AI product strategy, edge-deployed LLMs, deterministic safety, and risk governance by Apurv Gaurav.",
  keywords: [
    "AI Product Manager",
    "Edge AI",
    "LLM Safety",
    "AI Risk",
    "Deterministic AI",
    "Apurv Gaurav",
  ],
};

type Article = {
  slug: string;
  title: string;
  tag: string;
  readingTime: string;
  oneLiner: string;
  status?: "Published" | "Draft" | "Coming Soon";
};

const articles: Article[] = [
  {
    slug: "ai-pms-continuous-delivery",
    title: "What AI PMs Can Learn from Continuous Delivery",
    tag: "AI Product Strategy",
    readingTime: "8 min read",
    oneLiner:
      "Using canaries, observability, and blast-radius control to design safer LLM products and rollouts.",
    status: "Draft",
  },
  {
    slug: "from-infra-to-intelligence",
    title: "From Infra to Intelligence: Designing AI Products That Survive Production",
    tag: "Systems Thinking",
    readingTime: "9 min read",
    oneLiner:
      "Why AI products should be treated as end-to-end systems—data, infra, safety layers, and feedback loops—not just prompts and UI.",
    status: "Coming Soon",
  },
  {
    slug: "edgellm-v2-deep-dive",
    title: "EdgeLLM V2 Deep Dive: Self-Forgetting Memory & On-Device Alignment",
    tag: "Edge AI",
    readingTime: "10 min read",
    oneLiner:
      "How vault-based memory and deterministic alignment debugging make edge-deployed LLMs viable for privacy-sensitive use cases.",
    status: "Draft",
  },
  {
    slug: "deterministic-ai-risk-scoring",
    title: "Deterministic AI Risk Scoring: Lessons from AI Risk Navigator",
    tag: "LLM Safety",
    readingTime: "9 min read",
    oneLiner:
      "Designing reproducible risk scores for hallucination, bias, and policy violations that compliance and security can actually trust.",
    status: "Coming Soon",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 lg:px-8">
        {/* HERO */}
        <section className="border-b border-slate-200 pb-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              ARTICLES & DEEP DIVES
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              How I think about{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-700">
                AI products, edge systems, and LLM safety.
              </span>
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              This is where I connect hands-on systems work, patent-backed architectures,
              and AI product thinking—so you can see how I reason about tradeoffs, risk,
              and real-world deployment.
            </p>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          {/* ARTICLES GRID */}
          <div className="space-y-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* SIDEBAR: NEWSLETTER / BRIEFINGS */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                AI PRODUCT BRIEFINGS
              </p>
              <h2 className="mt-2 text-sm font-semibold text-slate-900">
                Get future deep dives in your inbox.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                I occasionally share breakdowns on edge-deployed LLMs, deterministic risk
                engines, and practical AI product patterns—no spam, no generic AI fluff.
              </p>
              {/* Static form for now – wire to tool later */}
              <form className="mt-3 space-y-2" method="post" action="#">
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-[11px] font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-900 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-900/40 transition duration-200 hover:-translate-y-[1px] hover:bg-sky-800"
                >
                  Join AI Product briefings
                </button>
              </form>
              <p className="mt-2 text-[11px] text-slate-400">
                You can also follow my posts on{" "}
                <Link
                  href="https://www.linkedin.com/in/apurvgaurav"
                  target="_blank"
                  className="text-sky-700 underline-offset-4 hover:underline"
                >
                  LinkedIn
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-xs text-slate-800 shadow-sm shadow-emerald-100/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
                FOR RECRUITERS & HIRING MANAGERS
              </p>
              <p className="mt-2">
                These articles show how I think about constraints, architecture, and
                rollout—not just features. If you’re hiring for AI product, this is the
                best shortcut to understand how I’d operate on your team.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 underline-offset-4 hover:text-sky-950 hover:underline"
              >
                Reach out to discuss a role →
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

/* --- Components --- */

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  const { slug, title, tag, readingTime, oneLiner, status } = article;

  // When you have real article pages, change href to `/articles/${slug}`.
  const href = `/articles/${slug}`;

  const statusBadge =
    status === "Published"
      ? "bg-emerald-100 text-emerald-800"
      : status === "Draft"
      ? "bg-amber-50 text-amber-800"
      : "bg-slate-100 text-slate-700";

  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-md hover:shadow-sky-500/20"
    >
      {/* Thumbnail substitute – gradient block */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400/70 via-sky-500/80 to-indigo-700/80 shadow-sm shadow-emerald-400/40" />
          <div className="space-y-1">
            <p className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              {tag}
            </p>
            <p className="text-[11px] text-slate-500">{readingTime}</p>
          </div>
        </div>
        {status && (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium ${statusBadge}`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        <h2 className="text-sm font-semibold text-slate-900">
          {title}
        </h2>
        <p className="text-xs leading-relaxed text-slate-600">
          {oneLiner}
        </p>
      </div>

      <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-800 group-hover:text-sky-950">
        Read article
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
