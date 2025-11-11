// app/articles/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Writing – Apurv Gaurav",
  description:
    "Published writing on AI Product Management, Edge AI, LLM Safety, and privacy-preserving systems. Selected long-form posts from LinkedIn.",
};

type Article = {
  title: string;
  summary: string;
  publishedOn: string;
  link: string;
};

const articles: Article[] = [
  {
    title: "The Real AI PM Skill Nobody Talks About: Systems Thinking",
    summary:
      "Why true AI Product Management is about end-to-end systems design, not prompt tinkering — connecting infra, data, and decision flows like an engineer and a strategist.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/pulse/real-ai-pm-skill-nobody-talks-system-thinking-apurv-gaurav-edpae/?trackingId=5UtRB0gEImh2tfmhyUYaIw%3D%3D",
  },
  {
    title: "Building Products That Learn Without Leaking Data",
    summary:
      "A breakdown of privacy-preserving product design — balancing personalization with data minimization and compliance realities.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/pulse/building-products-learn-without-leaking-data-apurv-gaurav-6j36e/?trackingId=eeZuklNMj7sSBNE9qJhTpQ%3D%3D",
  },
  {
    title: "From Infra to Intelligence: Why Product Managers Must Understand LLMs",
    summary:
      "Translating infrastructure thinking into AI era leadership — how PMs can bridge reliability, observability, and model behavior in real deployments.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/pulse/from-infra-intelligence-why-product-managers-must-llm-apurv-gaurav-lvoze/?trackingId=b2fxmCbSjKCUwTIkRqGaRw%3D%3D",
  },
  {
    title: "AI Product Managers vs. Prompt Engineers — A Perspective",
    summary:
      "Clarifying the boundary between experimentation and productization in modern AI workflows.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7361003590804459520/",
  },
  {
    title: "How Determinism Will Redefine Responsible AI",
    summary:
      "Exploring rule-based safety, auditability, and reproducibility as foundations for enterprise-grade AI governance.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7359191684447932418/",
  },
  {
    title: "Manual Software Releases Are Costing You More Than You Think",
    summary:
      "A look back at DevOps lessons that still matter for AI systems — automation, rollout safety, and continuous delivery discipline.",
    publishedOn: "Nov 2025",
    link: "https://www.linkedin.com/pulse/manual-software-releases-costing-you-more-than-think-apurv-gaurav-kwore/?trackingId=QN0UZ2Ws0ZeaKiSEXpCHqw%3D%3D",
  },
];

export default function ArticlesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Articles &amp; Writing
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          I publish long-form reflections on AI Product Management — bridging
          systems thinking, safety, and execution. Every piece is written from
          direct hands-on experience across Edge AI, LLM Safety, and Privacy +
          Alignment.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Publishing cadence:{" "}
          <span className="font-semibold text-gray-800">
            Tuesdays and Thursdays
          </span>{" "}
          · LinkedIn long-form posts and threads.
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/apurvgaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-900 hover:bg-indigo-50 transition"
          >
            View all writing on LinkedIn →
          </a>
        </div>
      </section>

      {/* Articles list */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Published Articles
        </h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-500">
                  {article.publishedOn}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{article.summary}</p>
              <div className="mt-3">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Read on LinkedIn →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-6 shadow-sm">
        <p className="text-sm font-semibold text-gray-900 mb-1">
          For hiring managers &amp; recruiters
        </p>
        <p className="text-xs text-gray-700 max-w-3xl">
          These articles illustrate how I think about building trustworthy,
          scalable AI products — not just prompts or models, but full systems
          that can pass legal, security, and reliability reviews. If you&apos;re
          evaluating senior AI Product talent, feel free to reach out for a
          deeper conversation.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}
