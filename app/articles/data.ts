// app/articles/data.ts

export type ArticleStatus = "Published";

export type Article = {
  title: string;
  subtitle: string;
  date: string; // e.g. "Nov 6, 2025"
  status: ArticleStatus;
  href: string; // LinkedIn or external link
};

export const articles: Article[] = [
  {
    title:
      "Building Products That Learn Without Leaking Data",
    subtitle:
      "Patterns for designing AI products that improve over time while keeping sensitive user data out of third-party models and vendors.",
    date: "Nov 6, 2025",
    status: "Published",
    href: "https://www.linkedin.com/pulse/building-products-learn-without-leaking-data-apurv-gaurav-6j36e/",
  },
  {
    title:
      "From Infra to Intelligence: Why Product Managers Must Understand LLM Systems",
    subtitle:
      "Why AI product managers can’t stop at prompts and UX — they need to think in terms of data pipelines, infra, safety layers, and feedback loops.",
    date: "Nov 4, 2025",
    status: "Published",
    href: "https://www.linkedin.com/pulse/from-infra-intelligence-why-product-managers-must-llm-apurv-gaurav-lvoze/",
  },
];
