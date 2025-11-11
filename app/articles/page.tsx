// app/articles/page.tsx

import Link from "next/link";

type Article = {
  title: string;
  summary: string;
  publishedOn: string;
  link: string;
};

const articles: Article[] = [
  // ❗ Add only real, already-published articles here.
  // Example format (uncomment & replace with real data):
  //
  // {
  //   title: "What AI PMs Can Learn from Continuous Delivery",
  //   summary:
  //     "Connecting classic release engineering disciplines to modern AI product safety and iteration loops.",
  //   publishedOn: "Nov 12, 2025",
  //   link: "https://www.linkedin.com/posts/your-actual-post-url",
  // },
];

export default function ArticlesPage() {
  const hasArticles = articles.length > 0;

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Articles &amp; Writing
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          I use writing to clarify my thinking on AI product strategy, edge
          intelligence, and deterministic safety systems. Published pieces live
          primarily on LinkedIn.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Only published articles are listed here. Drafts and planned series are
          not included.
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

      {/* Articles list or empty state */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Published Articles
        </h2>

        {hasArticles ? (
          <div className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
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
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-600">
            <p className="font-semibold text-gray-800 mb-1">
              No articles listed yet.
            </p>
            <p>
              As I publish long-form posts on LinkedIn, I&apos;ll add the most
              relevant pieces here—with direct links and short summaries focused
              on AI product leadership, edge intelligence, and deterministic
              safety.
            </p>
          </div>
        )}
      </section>

      {/* CTA for hiring managers */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-6 shadow-sm">
        <p className="text-sm font-semibold text-gray-900 mb-1">
          For hiring managers &amp; recruiters
        </p>
        <p className="text-xs text-gray-700 max-w-3xl">
          If you&apos;d like a curated reading list that matches an open role
          (e.g., Edge AI PM, AI Safety PM, or Platform PM), I can share a
          tailored set of articles and technical deep dives that best represent
          how I think about product strategy, risk, and execution.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
          >
            Request a curated reading list →
          </Link>
        </div>
      </section>
    </main>
  );
}
