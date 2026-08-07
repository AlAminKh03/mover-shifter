"use client";

import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { MovingPackingVideo } from "@/components/MovingPackingVideo";
import { WorkVideos } from "@/components/WorkVideos";
import { SITE } from "@/config/site";
import { ALL_WORK_PHOTOS } from "@/config/work-photos";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* What we do — a multi-service studio, cabinets shown first, and what we don't. */
const services = [
  {
    title: "Wall cabinets & joinery.",
    text: "Wall-mounted cabinets, storage walls, display units, and bespoke shelving. Surveyed, built, and fitted flush and level. Soft-close hardware, your choice of finish.",
  },
  {
    title: "Kitchens & wardrobes.",
    text: "Full kitchen cabinetry, built-in wardrobes, and TV units — measured to the room and made to order. Same team that surveyed you.",
  },
  {
    title: "Curtains & blinds.",
    text: "Measured, made, and hung — sheers, blackout, roman and roller blinds, and motorised tracks. Our own fabric library on site.",
  },
  {
    title: "Sofas, majlis & reupholstery.",
    text: "Custom sofas and majlis built to measure, plus reupholstery — frames, foam, and fabric or leather.",
  },
  {
    title: "Flooring & furniture moving.",
    text: "SPC and wood flooring with clean subfloor prep, and home, villa, and office furniture moving across Qatar — wrap, load, drive, place.",
  },
  {
    title: "What we don’t do.",
    text: "Flat-pack assembly only. Long-haul international moves. Dedicated storage. Same-day jobs we haven’t surveyed. We’ll point you to people who do those well.",
  },
];

/* How a job runs — process as a timeline track. */
const process = [
  { stamp: "Day 0", title: "Survey", note: "Free site measure. We check the room, fixings, services, and the finish you want." },
  { stamp: "Week 1", title: "Quote", note: "Drawings and a fixed, itemised quote. Materials ordered once you approve." },
  { stamp: "Build", title: "Make", note: "Cabinets, curtains, and furniture made to your measurements and finish." },
  { stamp: "Fit day", title: "Install", note: "Delivered and fitted flush and level. Aligned, set, site left clean." },
  { stamp: "Done", title: "Handover", note: "One team, one invoice — cabinets, curtains, sofas, flooring, or a full fit-out." },
];

/* FAQ — direct answers to questions clients actually ask. SEO-rich:
   each question + answer is also emitted as FAQPage JSON-LD below. */
const faq: { q: string; a: string }[] = [
  {
    q: "How much notice do you need?",
    a: "About a week from approved drawings to fitting for a standard run of wall or kitchen cabinets; two to three weeks for a full kitchen or several wardrobes. Tell us your deadline and we'll be straight about whether it's doable.",
  },
  {
    q: "What areas in Qatar do you cover?",
    a: "Doha, Lusail, The Pearl, Al Wakrah, Al Rayyan, and Al Khor. If you're outside those, ask — we'll tell you whether it makes sense.",
  },
  {
    q: "Do you make the cabinets, or just fit them?",
    a: "We make them. Carcasses, doors, and shelves are built in our Al Wokra workshop and installed by the same crew that surveyed you — not flat-pack, not subcontracted.",
  },
  {
    q: "What materials and finishes can I choose?",
    a: "Moisture-resistant MDF and plywood carcasses, with laminate, acrylic, or lacquer fronts and soft-close hinges and runners as standard. Bring a reference photo or a sample and we'll match it.",
  },
  {
    q: "Can I get a quote without a survey?",
    a: "We can give a rough range from photos and rough sizes, but the fixed quote always follows a free site measure. Cabinets are unforgiving — a few millimetres decides whether doors line up.",
  },
  {
    q: "Can I book just curtains, a sofa, or a move on its own?",
    a: "Yes. Curtains and blinds, custom sofas and majlis, flooring, reupholstery, and furniture moving are full services — book any one on its own, or bundle several with a cabinet job on a single quote and invoice.",
  },
  {
    q: "Do you remove or rework old cabinets?",
    a: "Yes. We can strip out and dispose of old units, adjust an existing run, or re-door and re-hardware anything that's still structurally sound.",
  },
];

/* Recent-work gallery — first-party job photos only, drawn from the shared
   inventory so captions and alt text describe what is actually in each frame.
   `rot` is the scattered-polaroid tilt; order is chosen to alternate subjects. */
const galleryTilts = [-2.5, 2, -1.5, 2.5, -2, 1, -1.5, 2, -2, 1.5];

const gallery = ALL_WORK_PHOTOS.map((photo, i) => ({
  ...photo,
  rot: galleryTilts[i % galleryTilts.length],
}));

export default function Home() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      <HeroSlider />

      {/* ────────────  WHAT WE DO (numbered list) ─────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              What we do
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Everything for the room — cabinets to curtains.
            </h2>

            <ol className="mt-8 sm:mt-12">
              {services.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  /* Columns are declared here rather than inline: an inline
                     gridTemplateColumns wins over every responsive class, which
                     left `lg:col-start-3` landing in an implicit auto-sized
                     column that starved the title column of width. */
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1 border-b border-border py-5 first:border-t sm:gap-x-6 sm:py-9 lg:grid-cols-[3.5rem_1fr_1.5fr]"
                >
                  <span
                    className="font-mono text-xl font-bold tabular-nums text-primary/80 sm:text-2xl lg:text-3xl"
                    aria-hidden
                  >
                    .{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold leading-tight text-secondary sm:text-lg sm:col-start-2 lg:text-2xl">
                    {s.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-[1.6] text-muted-foreground sm:text-base lg:col-start-3 lg:text-base">
                    {s.text}
                  </p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 pt-2 sm:mt-10">
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

      {/* ────────────  CURTAINS PROMO  ─────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Featured service
              </p>
              <h3 className="font-display mt-2 text-xl font-bold leading-tight text-secondary sm:mt-3 sm:text-2xl lg:text-3xl">
                Curtains & blinds — measured, made, hung
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                Sheers, blackout, roman and roller blinds, plus motorised tracks and an on-site fabric library. We measure, make and fit across Qatar.
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:gap-3">
                <Link href="/services#curtains" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  See curtains
                </Link>
                <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-secondary/20 px-5 py-2.5 text-sm font-medium text-secondary hover:bg-muted transition-colors">
                  See curtain projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────  HOW A JOB RUNS (vertical on mobile, horizontal on desktop) ─────────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="layout-container py-10 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              How it works
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              From your call to a finished room.
            </h2>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="mt-8 space-y-6 sm:hidden">
            {process.map((p, i) => (
              <motion.div
                key={p.stamp}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-4 pb-6 last:pb-0"
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      i === process.length - 1
                        ? "border-primary bg-primary"
                        : "border-secondary bg-background"
                    }`}
                  >
                    {i === process.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  {i < process.length - 1 && (
                    <div className="absolute top-6 bottom-0 w-px bg-secondary/20" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    {p.stamp}
                  </p>
                  <p className="mt-1 font-display text-lg font-extrabold text-secondary">
                    {p.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal scroll */}
          <div className="mt-10 -mx-4 hidden overflow-x-auto px-4 pb-2 sm:block">
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

      {/* ────────────  MOVING — VIDEO + REAL JOB STILLS ──────────── */}
      <MovingPackingVideo />

      {/* ────────────  FINISHED-WORK VIDEO WALKTHROUGHS ──────────── */}
      <WorkVideos />

      {/* ────────────  WHAT WE COVER (service tile grid) ──────────── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Our work
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                What we cover, across Qatar.
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

          <div className="mt-8 grid gap-4 grid-cols-2 sm:mt-12 sm:gap-6 sm:grid-cols-3 lg:gap-8">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: g.rot }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                className="relative bg-white p-2 shadow-lg ring-1 ring-secondary/10 sm:p-2.5 lg:p-3"
                style={{ transformOrigin: "center" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) calc(50vw - 1rem), (max-width: 1024px) calc(33vw - 1.5rem), calc(25vw - 2rem)"
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>
                <figcaption className="sr-only">{g.alt}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────  FAQ (SEO-rich) ──────────────────── */}
      <section className="bg-secondary text-white">
        <div className="layout-container py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              The things people ask before booking.
            </h2>

            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10 sm:mt-12">
              {faq.map((q, i) => (
                <motion.div
                  key={q.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="grid gap-2 py-4 sm:gap-1 sm:py-6 lg:grid-cols-[1fr_2fr] lg:gap-8 lg:py-8"
                >
                  <dt className="font-display text-sm font-bold leading-tight text-white sm:text-base lg:text-lg">
                    {q.q}
                  </dt>
                  <dd className="text-xs leading-relaxed text-white/70 sm:text-sm sm:leading-[1.7] lg:text-base">
                    {q.a}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <p className="mt-6 text-xs text-white/60 sm:mt-8 sm:text-sm">
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

      {/* ────────────  GET STARTED (sign-off card) ──── */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl sm:rounded-[2rem] sm:p-10 lg:p-12">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Get started —
              </p>
              <h2 className="font-display mt-3 text-xl font-bold leading-tight text-secondary sm:mt-4 sm:text-2xl lg:text-3xl">
                Free survey. Fixed quote in 48 hours.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
                Tell us the room and what you want done — cabinets, a kitchen,
                curtains, a sofa, flooring, a move, or a full fit-out. We survey
                free and come back within 48 hours with a fixed, itemised quote.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1 sm:px-7 sm:text-base"
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
                  className="h-12 w-full gap-2 rounded-full border-secondary/20 bg-background px-6 text-sm font-medium text-secondary hover:bg-muted sm:w-auto sm:px-7 sm:text-base"
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

              <p className="mt-5 text-right font-mono text-[10px] tracking-wider text-muted-foreground sm:mt-7 sm:text-[11px]">
                — {SITE.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
