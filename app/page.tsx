"use client";

import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* REPLACE-IMAGES: every image is an Unsplash placeholder, all verified working. */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

/* What we do — honest, including what we don't. */
const services = [
  {
    title: "Moving & shifting.",
    text: "Villas, apartments, offices. We do the survey, pack, drive, and place. Most jobs run one or two days; bigger ones we phase over a week.",
  },
  {
    title: "Furniture & interior fit-out.",
    text: "Custom sofas, majlis builds, curtains, SPC flooring, reupholstery. Built in our Al Mansoura workshop and installed by the same crew who moved you in.",
  },
  {
    title: "What we don’t do.",
    text: "Long-haul international moves. Dedicated storage. Same-day jobs we haven’t surveyed. We’ll point you to people who do those well.",
  },
];

/* How it goes — process as a timeline track. */
const process = [
  { stamp: "Day 0", title: "Survey", note: "Free walk-through. We confirm access, lifts, parking, and what’s fragile." },
  { stamp: "Day 1", title: "Pack & label", note: "Materials supplied. Glass, electronics, art — wrapped, boxed, tracked." },
  { stamp: "Day 2", title: "Move", note: "Right-sized vehicle, room-by-room placement at the other end." },
  { stamp: "Optional", title: "Finish the rooms", note: "Curtains, sofas, wardrobes, flooring — same crew, scheduled when you’re ready." },
];

/* FAQ — honest answers to questions clients actually ask. SEO-rich:
   each question + answer is also emitted as FAQPage JSON-LD below. */
const faq: { q: string; a: string }[] = [
  {
    q: "How much notice do you need?",
    a: "Two to three days for a standard apartment, a week for villas, and two weeks if a fit-out follows the move. Same-week is sometimes possible — call and we'll tell you straight.",
  },
  {
    q: "What areas in Qatar do you cover?",
    a: "Doha, Lusail, The Pearl, Al Wakrah, Al Rayyan, and Al Khor. If you're outside those, ask — we'll tell you whether it makes sense.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes. Boxes, bubble wrap, blankets, wardrobe cartons, and tape are included on full-service jobs. If you're packing yourself, we can drop materials beforehand.",
  },
  {
    q: "Can I get a quote without a survey?",
    a: "We can give a rough range over the phone, but the fixed quote always comes after a free walk-through (or a video call for smaller jobs). It's the only way to avoid surprises on the day.",
  },
  {
    q: "Do you do international or long-haul moves?",
    a: "No. We stay inside Qatar. If you're moving abroad we'll point you to a freight forwarder who handles that well.",
  },
  {
    q: "Can you just do the furniture work without the move?",
    a: "Yes. Custom sofas, majlis builds, curtains, SPC flooring, and reupholstery are bookable on their own — same workshop, same crews.",
  },
];

/* Recent work — polaroid scrapbook. Stock photos for now; no captions
   that imply they are our specific jobs. */
const polaroids = [
  { id: "1530124566582-a618bc2615dc", alt: "Cardboard moving boxes", rot: -2.5 },
  { id: "1715645948484-da40dd56bc93", alt: "Crew loading a moving truck", rot: 2 },
  { id: "1513161455079-7dc1de15ef3e", alt: "Curtained living room", rot: -1.5 },
  { id: "1555041469-a586c61ea9bc", alt: "Living room sofa", rot: 2.5 },
  { id: "1558211583-d26f610c1eb1", alt: "Built-in wardrobe", rot: -2 },
  { id: "1581858726788-75bc0f6a952d", alt: "Wood-look flooring", rot: 1.5 },
];

export default function Home() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      <HeroSlider />

      {/* ────────────  WHAT WE DO (numbered manifesto) ─────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Issue No. 02 — What we do
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Two trades. And the things we leave to others.
            </h2>

            <ol className="mt-12">
              {services.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-border py-7 first:border-t sm:grid-cols-[5rem_auto_1fr] sm:gap-x-6 sm:py-9"
                >
                  <span
                    className="font-mono text-2xl font-bold tabular-nums text-primary/80 sm:text-3xl"
                    aria-hidden
                  >
                    .{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-tight text-secondary sm:text-2xl sm:col-start-2">
                    {s.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-[1.7] text-muted-foreground sm:col-start-3 sm:text-base">
                    {s.text}
                  </p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                See the full service list
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────  HOW IT GOES (horizontal timeline) ─────────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-container py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Issue No. 03 — How it goes
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              From your call to keys-in-hand.
            </h2>
          </div>

          <div className="mt-10 -mx-4 overflow-x-auto px-4 pb-2">
            <ol className="relative flex min-w-max items-start gap-8 sm:gap-12">
              <span
                className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                aria-hidden
              />
              {process.map((p, i) => (
                <motion.li
                  key={p.stamp}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex w-56 flex-col items-start"
                >
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      i === process.length - 1
                        ? "border-primary bg-primary"
                        : "border-secondary bg-background"
                    }`}
                  >
                    {i === process.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {p.stamp}
                  </p>
                  <p className="mt-1 font-display text-xl font-extrabold text-secondary">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ────────────  RECENT JOBS (polaroid scrapbook) ──────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Issue No. 04 — Recent jobs
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Some moves and rooms from the last few months.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary"
            >
              See more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
            {polaroids.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                className="relative bg-white p-2.5 shadow-lg ring-1 ring-secondary/10 sm:p-3"
                style={{ transformOrigin: "center" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={u(p.id, 700)}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale-[15%]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────  FAQ (SEO-rich, honest) ──────────────────── */}
      <section className="bg-secondary text-white">
        <div className="layout-container py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Issue No. 05 — Common questions
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              The things people ask before booking.
            </h2>

            <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {faq.map((q, i) => (
                <motion.div
                  key={q.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="grid gap-1 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-8"
                >
                  <dt className="font-display text-base font-bold leading-tight text-white sm:text-lg">
                    {q.q}
                  </dt>
                  <dd className="text-sm leading-[1.7] text-white/70 sm:text-base">
                    {q.a}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-white/60">
              Question we didn&apos;t cover?{" "}
              <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                Send us a message
              </Link>{" "}
              or call{" "}
              <a
                href={`tel:${SITE.phoneE164}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>

        {/* FAQ JSON-LD — eligible for rich snippets in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((q) => ({
                "@type": "Question",
                name: q.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: q.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* ────────────  LETTER FROM THE WORKSHOP (sign-off card) ──── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:p-12">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — A note from the workshop —
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                A small workshop, an honest quote.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We&apos;re a small team. We say yes when we can do the job
                well, and we say no when we can&apos;t. If you call and
                we&apos;re booked, we&apos;ll tell you. If your move is
                straightforward, we&apos;ll come back with a fixed quote within
                48 hours.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1"
                  asChild
                >
                  <Link href="/quote">
                    Ask for a quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full gap-2 rounded-full border-secondary/20 bg-background px-7 text-base font-medium text-secondary hover:bg-muted sm:w-auto"
                  asChild
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <p className="mt-7 text-right font-mono text-[11px] tracking-wider text-muted-foreground">
                — {SITE.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
