// app/articles/page.tsx

import { articles, type Article } from "./data";

function ArticleCard({ article }: { article: Article }) {
  const { title, subtitle, date, href } = article;

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-[11px] text-slate-500">{date}</p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium text-emerald-800">
          Published
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{subtitle}</p>
      <div className="mt-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-500 underline underline-offset-2"
        >
          Read on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Articles
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          I publish regularly on LinkedIn — usually mid-week — on how to design AI
          products that survive real-world constraints. This page keeps those
          articles in one place and links out to the originals.
        </p>
      </section>

      {/* List of real articles only */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Latest Articles
        </h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>

      {/* Follow CTA */}
      <section className="bg-white rounded-2xl px-5 py-6 shadow-sm border border-slate-100 space-y-3">
        <p className="text-sm font-semibold text-slate-900">
          See new pieces as they ship
        </p>
        <p className="text-xs text-slate-600">
          New articles go live on LinkedIn first, then get indexed here. Follow
          me there if you want to see the full thread and discussion.
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
