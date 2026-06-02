import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

import { ArticleBody } from "../_components/ArticleBody";
import { PhotoCredit } from "../_components/PhotoCredit";
import { getPost, posts } from "../posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    // Brand suffix is appended automatically by the root layout's title template.
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE.name,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.heroAlt }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/social.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="layout-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All guides
          </Link>
        </nav>

        {/* Header */}
        <header className="mx-auto mt-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readingTime}
            </span>
          </div>
          <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            By {SITE.name} · Updated {format(new Date(post.dateModified), "d MMMM yyyy")}
          </p>
        </header>

        {/* Hero image */}
        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl bg-muted">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 64rem"
            className="object-cover"
            priority
          />
        </div>
        <PhotoCredit credit={post.credit} className="mx-auto mt-2 max-w-4xl px-1 text-right" />

        {/* Body */}
        <div className="mx-auto mt-12 max-w-3xl">
          <ArticleBody blocks={post.content} />
        </div>

        {/* CTA */}
        <section className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl bg-secondary p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Planning a project in Qatar?
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            {SITE.name} measures, builds and fits cabinets, wardrobes, curtains,
            sofas, flooring and more across Qatar — and handles furniture moving too.
            Tell us what you have in mind for a free survey and a fixed quote.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/quote">
                Get a free quote
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={`tel:${SITE.phoneE164}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt={r.heroAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-1.5 right-2 rounded bg-black/45 px-1.5 py-0.5 text-[10px] text-white/90">
                      Photo: {r.credit.name} / Unsplash
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium text-primary">{r.category}</span>
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-foreground">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
