import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { SITE } from "@/config/site";

import { posts } from "./posts";

export const metadata: Metadata = {
  // Brand suffix is appended automatically by the root layout's title template.
  title: "Interiors Journal — Guides & Ideas for Qatar Homes",
  description:
    "Practical guides on kitchens, wardrobes, curtains, majlis design, flooring and home moving in Qatar — from the team at " +
    SITE.name +
    ". Real advice for real Qatari homes.",
  keywords: [
    "interior design blog Qatar",
    "home improvement Qatar",
    "kitchen ideas Doha",
    "wardrobe ideas Qatar",
    "curtains guide Qatar",
    "majlis design Qatar",
    "flooring Qatar",
    "moving Qatar",
  ],
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    title: `Interiors Journal | ${SITE.name}`,
    description:
      "Practical guides on kitchens, wardrobes, curtains, majlis, flooring and moving for homes across Qatar.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Interiors Journal`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Interiors Journal | ${SITE.name}`,
    description:
      "Practical interiors and home guides for Qatar — kitchens, wardrobes, curtains, majlis, flooring and moving.",
    images: [`${SITE.url}/social.jpg`],
  },
};

const sorted = [...posts].sort((a, b) =>
  a.datePublished < b.datePublished ? 1 : -1,
);

export default function BlogIndexPage() {
  const [featured, ...rest] = sorted;

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} — Interiors Journal`,
    url: `${SITE.url}/blog`,
    description:
      "Guides and ideas on kitchens, wardrobes, curtains, majlis, flooring and home moving in Qatar.",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <div className="layout-container py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />

      {/* Header */}
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          Interiors Journal
        </p>
        <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Ideas & guides for Qatar homes
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Practical, no-nonsense advice on kitchens, wardrobes, curtains, majlis,
          flooring and moving — written for the realities of living in Qatar.
        </p>
      </header>

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-12 grid overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-xl md:grid-cols-2"
        >
          <div className="relative aspect-[16/10] md:aspect-auto">
            <Image
              src={featured.heroImage}
              alt={featured.heroAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <span className="absolute bottom-1.5 right-2 rounded bg-black/45 px-1.5 py-0.5 text-[10px] text-white/90">
              Photo: {featured.credit.name} / Unsplash
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                {featured.category}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden />
                {featured.readingTime}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              {featured.title}
            </h2>
            <p className="leading-7 text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-1 inline-flex items-center gap-2 font-semibold text-primary">
              Read the guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-1.5 right-2 rounded bg-black/45 px-1.5 py-0.5 text-[10px] text-white/90">
                Photo: {post.credit.name} / Unsplash
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground">
                {post.title}
              </h2>
              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-center text-sm text-muted-foreground">
        Updated {format(new Date(sorted[0].dateModified), "MMMM yyyy")} ·{" "}
        {sorted.length} guides and counting.
      </p>
    </div>
  );
}
