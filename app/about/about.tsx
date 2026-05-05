"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* REPLACE-IMAGES: every image is an Unsplash placeholder, all verified working. */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

const manifesto = [
  {
    title: "Plan first.",
    text: "Every job starts with a survey. No surprises on the day, no padded estimates after.",
  },
  {
    title: "Same crew, start to finish.",
    text: "The team that quotes you is the team that shows up — and the same one that finishes.",
  },
  {
    title: "Treat it like ours.",
    text: "Wrap it, label it, place it. If it broke under our care, it gets repaired or replaced.",
  },
  {
    title: "Two trades, one shop.",
    text: "Movers in the morning, carpenters in the afternoon. Less coordination cost for you.",
  },
  {
    title: "Know the access.",
    text: "Compounds, towers, weekend rules — we know the access quirks before we quote.",
  },
  {
    title: "Finish, don’t front-load.",
    text: "We’d rather over-deliver on the last 10% than oversell the first 90.",
  },
];

/* Timeline as story beats, not year-flexing. */
const timeline = [
  { stamp: "First job", note: "One villa across Doha. One Hilux, three friends." },
  { stamp: "First hire", note: "A carpenter — clients kept asking for one." },
  { stamp: "First workshop", note: "A small unit in Al Mansoura. Tools we owned." },
  { stamp: "Adding trades", note: "Curtains, then flooring. Same crews, same standards." },
  { stamp: "First retail move", note: "A weekend unit shift in Doha CBD." },
  { stamp: "Now", note: "Two trades, one phone number." },
];

/* Polaroid tile data. Stock photos for now; alt text describes the
   image, no captions claiming authorship. */
const polaroids = [
  { id: "1530124566582-a618bc2615dc", alt: "Stacked moving boxes", rot: -3 },
  { id: "1521737711867-e3b97375f902", alt: "Workshop scene", rot: 2 },
  { id: "1542838132-92c53300491e", alt: "Detail work", rot: -1.5 },
  { id: "1606857521015-7f9fcf423740", alt: "Wrap and label", rot: 2.5 },
  { id: "1450101499163-c8848c66ca85", alt: "Loaded van", rot: -2 },
  { id: "1556761175-4b46a572b786", alt: "Hands at work", rot: 1.5 },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      {/* ─────────────────  EDITORIAL HERO (light, quote-led) ─────── */}
      <section className="relative">
        {/* Subtle paper texture ambient */}
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(18_100%_96%/0.6),transparent_60%)]"
          aria-hidden
        />

        <div className="layout-container pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                About the Workshop
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="h-px w-12 bg-secondary" />
                <span className="text-xs font-mono text-muted-foreground">
                  AL MANSOURA — DOHA, QA
                </span>
              </div>

              <h1 className="font-display mt-7 text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
                A small <em className="not-italic font-extrabold underline decoration-primary decoration-[6px] underline-offset-[8px]">workshop</em> in Doha,
                <br className="hidden sm:block" />
                doing two trades.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Notes from a workshop in Al Mansoura — what we do, what we
                don&apos;t, and how we ended up doing both moves and fit-out
                under one roof.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white"
                  aria-hidden
                >
                  AB
                </span>
                <div className="text-sm">
                  <p className="font-display font-bold text-foreground">
                    The {SITE.shortName} team
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Al Mansoura · Doha · Qatar
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* REPLACE-IMAGE: founder portrait or warm crew shot */}
              <div className="relative mx-auto max-w-sm">
                {/* Tape strips */}
                <span
                  className="absolute -top-3 left-8 z-10 h-5 w-16 rotate-[-6deg] bg-primary/30 backdrop-blur-sm"
                  aria-hidden
                />
                <span
                  className="absolute -top-2 right-6 z-10 h-5 w-14 rotate-[8deg] bg-secondary/20"
                  aria-hidden
                />
                <div
                  className="rotate-[-2deg] rounded-sm bg-white p-3 shadow-2xl ring-1 ring-secondary/10"
                  style={{ transformOrigin: "center" }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={u("1556761175-5973dc0f32e7", 1000)}
                      alt="Workshop scene"
                      fill
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      className="object-cover grayscale-[15%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  YEAR TIMELINE (horizontal track) ──────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-container py-10 sm:py-14">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            A short timeline
          </p>
          <div className="mt-6 -mx-4 overflow-x-auto px-4 pb-2">
            <ol className="relative flex min-w-max items-start gap-8 sm:gap-12">
              <span
                className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                aria-hidden
              />
              {timeline.map((t, i) => (
                <motion.li
                  key={t.stamp}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex w-48 flex-col items-start"
                >
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      i === timeline.length - 1
                        ? "border-primary bg-primary"
                        : "border-secondary bg-background"
                    }`}
                  >
                    {i === timeline.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {t.stamp}
                  </p>
                  <p className="mt-1 font-display text-base font-bold leading-snug text-secondary">
                    {t.note}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────────  LONG-READ STORY (magazine column) ─────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Issue No. 01 — Origin
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              From a single rented Hilux.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-[1.85] text-foreground/85 sm:text-[17px]">
              {/* Drop cap on first paragraph */}
              <p>
                <span className="font-display float-left mr-2 mt-1 text-[3.75rem] font-extrabold leading-[0.85] text-primary sm:text-[4.5rem]">
                  F
                </span>
                irst job was one villa across Doha, moved with a rented Hilux
                and three friends. Word travelled — Qatar is smaller than
                people think — and we kept getting calls.
              </p>
              <p>
                But every move ended the same way: clients asking who would put
                up the curtains, install the wardrobe, or recover the sofa
                they&apos;d kept. So we hired a carpenter. Then an upholsterer.
                Then a curtain installer. The shop in Al Mansoura quietly
                became a workshop.
              </p>

              {/* Pull quote inset */}
              <aside className="my-10 border-l-4 border-primary pl-5 sm:pl-7">
                <p className="font-display text-xl font-bold leading-snug text-secondary sm:text-2xl">
                  &ldquo;We grew slowly because we kept saying no to jobs we
                  couldn&apos;t do well.&rdquo;
                </p>
              </aside>

              <p>
                Today we run two trades under one roof. The same crew that
                quotes you usually ends up doing the work, which means we
                don&apos;t have to re-explain the layout — and you don&apos;t
                have to chase three vendors. We don&apos;t advertise. Most of
                the work still comes through word of mouth.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Read what we offer
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Browse recent jobs
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────  STATS RIBBON (slim, dark) ───────────── */}
      <section className="bg-secondary text-white">
        <div className="layout-container">
          <div className="grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 sm:grid-cols-4">
            {[
              { n: "2", label: "trades, one shop" },
              { n: "6", label: "cities we cover" },
              { n: "0", label: "ads run, ever" },
              { n: "48h", label: "quote turnaround" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-6 text-center sm:py-8 ${
                  i === 1 || i === 3 ? "border-t border-white/10 sm:border-t-0" : ""
                } ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""}`}
              >
                <p className="font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                  <span className="text-primary">{s.n}</span>
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────  MANIFESTO (numbered list, no cards) ───── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Manifesto
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Six rules every crew gets briefed on
              <br className="hidden sm:block" /> before they leave the
              workshop.
            </h2>

            <ol className="mt-12">
              {manifesto.map((m, i) => (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-border py-6 first:border-t sm:grid-cols-[5rem_auto_1fr] sm:gap-x-6 sm:py-8"
                >
                  <span
                    className="font-mono text-2xl font-bold tabular-nums text-primary/80 sm:text-3xl"
                    aria-hidden
                  >
                    .{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-tight text-secondary sm:text-2xl sm:col-start-2">
                    {m.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted-foreground sm:col-start-3 sm:text-base sm:leading-[1.7]">
                    {m.text}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────────  POLAROID COLLAGE (scrapbook) ──────────── */}
      <section className="layout-section bg-muted/40">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              From the cutting room floor
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Days at the workshop.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Most of what we do isn&apos;t glamorous — it&apos;s getting a
              dolly through a tight stairwell, or matching grain on a custom
              wardrobe. We took some snaps anyway.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6">
            {polaroids.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                className="relative bg-white p-2 shadow-lg ring-1 ring-secondary/10 sm:p-3"
                style={{ transformOrigin: "center" }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={u(p.id, 600)}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover grayscale-[20%]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────  SIGN-OFF CARD (letter from workshop) ──── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:p-12">
              {/* Tape detail */}
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — A note from the workshop —
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                If you&apos;re still here, you&apos;re probably ready.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us your dates and what needs to move. We&apos;ll come back
                within 48 hours with a clear plan and a fixed quote — no
                follow-up call required.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:flex-1"
                  asChild
                >
                  <Link href="/quote">
                    Start a quote
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
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 w-full gap-2 rounded-full px-5 text-base font-medium text-muted-foreground hover:bg-muted sm:w-auto"
                  asChild
                >
                  <a href={`tel:${SITE.phoneE164}`}>
                    <Phone className="h-4 w-4" />
                    Call
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
