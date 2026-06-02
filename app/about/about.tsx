"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* Curated, high-quality interior photography (Unsplash). Swap for your own
   job photos by replacing the IDs. */
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

const principles = [
  {
    title: "Free survey first.",
    text: "Every job starts with a site measure. No surprises on fit day, no padded estimate after.",
  },
  {
    title: "One team, start to finish.",
    text: "The crew that measures you is the crew that builds and fits it. Nothing subcontracted out.",
  },
  {
    title: "Built right.",
    text: "Square carcasses, aligned doors, soft-close set. If it isn’t level and flush, it isn’t finished.",
  },
  {
    title: "One job, one invoice.",
    text: "Cabinets, curtains, sofas, flooring, a move — bundled into a single fixed quote.",
  },
  {
    title: "We know the access.",
    text: "Compounds, towers, weekend rules — we plan delivery and fitting before we quote.",
  },
  {
    title: "Fixed quotes in 48 hours.",
    text: "An itemised price you can rely on, back within two working days of the survey.",
  },
];

const coverage: { label: string; id: string }[] = [
  { label: "Wall cabinets", id: "1556909114-f6e7ad7d3136" },
  { label: "Kitchens", id: "1649361811423-a55616f7ab11" },
  { label: "Wardrobes & storage", id: "1558211583-d26f610c1eb1" },
  { label: "Curtains & blinds", id: "1513161455079-7dc1de15ef3e" },
  { label: "Sofas & majlis", id: "1555041469-a586c61ea9bc" },
  { label: "Flooring & moving", id: "1581858726788-75bc0f6a952d" },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      {/* ─────────────────  HERO  ───────────────── */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(18_100%_96%/0.6),transparent_60%)]"
          aria-hidden
        />

        <div className="layout-container pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                About us
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="h-px w-12 bg-secondary" />
                <span className="text-xs font-mono text-muted-foreground">
                  AL WOKRA — QATAR
                </span>
              </div>

              <h1 className="font-display mt-7 text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                Cabinets, curtains &amp; full{" "}
                <em className="not-italic underline decoration-primary decoration-[6px] underline-offset-[8px]">
                  fit-outs
                </em>{" "}
                in Qatar.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {SITE.name} is an interiors team based in Al Wokra, Qatar. We
                make and fit wall cabinets, kitchens, and wardrobes, and we
                handle curtains, custom sofas and majlis, flooring, and
                furniture moving — one team for the whole room.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {[
                  "Al Wokra-based",
                  "Free site surveys",
                  "Fixed quotes in 48h",
                  "One team, one invoice",
                ].map((point) => (
                  <span
                    key={point}
                    className="font-display font-semibold text-foreground"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl bg-muted ring-1 ring-secondary/10 shadow-2xl">
                <Image
                  src={u("1556909114-f6e7ad7d3136", 1000)}
                  alt="Custom fitted cabinets by Doha Interiors"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  STATS RIBBON  ───────────────── */}
      <section className="bg-secondary text-white">
        <div className="layout-container">
          <div className="grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 sm:grid-cols-4">
            {[
              { n: "8", label: "services in-house" },
              { n: "6", label: "cities we cover" },
              { n: "48h", label: "quote turnaround" },
              { n: "Free", label: "site surveys" },
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

      {/* ─────────────────  WHO WE ARE  ───────────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Who we are
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              One Qatar team for the whole room.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-[1.85] text-foreground/85 sm:text-[17px]">
              <p>
                We started with cabinets — wall units, kitchens, and built-in
                wardrobes made to measure and fitted across Doha. That&apos;s
                still the core of what we do, and what we&apos;re known for.
              </p>
              <p>
                Clients kept asking us to handle the rest of the room too:
                curtains and blinds, a new majlis, the flooring, moving the old
                place out. So we built those into the service. Today one team
                surveys, makes, delivers, and fits the lot — across Doha,
                Lusail, The Pearl, Al Wakrah, Al Rayyan, and Al Khor.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                See all services
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Browse our work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  HOW WE WORK  ───────────────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-section">
          <div className="layout-container">
            <div className="mx-auto max-w-3xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                How we work
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Six things you can count on.
              </h2>

              <ol className="mt-12">
                {principles.map((m, i) => (
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
        </div>
      </section>

      {/* ─────────────────  WHAT WE COVER  ───────────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              What we cover
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Every part of the room.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
            {coverage.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-secondary/10"
              >
                <Image
                  src={u(c.id, 500)}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────  SIGN-OFF  ───────────────── */}
      <section className="layout-section pt-0">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:p-12">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Get started —
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                Free survey. Fixed quote in 48 hours.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us the room and what you want done. We survey free and come
                back within 48 hours with a fixed, itemised quote — cabinets,
                curtains, a full fit-out, or anything in between.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:flex-1"
                  asChild
                >
                  <Link href="/quote">
                    Get a free quote
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
