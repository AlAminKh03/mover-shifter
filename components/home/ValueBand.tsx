"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Package, Sparkles, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Survey & lock",
    text: "Free walk-through. Access, lifts, parking, fragile inventory — all confirmed before we book a truck.",
  },
  {
    n: "02",
    icon: Package,
    title: "Pack & protect",
    text: "Materials matched to each item. Glass, electronics, art — wrapped, labelled, and tracked.",
  },
  {
    n: "03",
    icon: Truck,
    title: "Move & place",
    text: "Right-sized vehicles, room-by-room placement, debris cleared. You walk in and it&apos;s done.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Furnish (optional)",
    text: "Curtains, sofas, majlis, flooring — the same crew who knows your layout finishes the space.",
  },
] as const;

export function ValueBand() {
  return (
    <section
      className="relative layout-section bg-muted"
      aria-labelledby="how-it-works"
    >
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            How it works
          </p>
          <h2
            id="how-it-works"
            className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Four steps. <span className="text-gradient-orange">One crew.</span>
            <br />
            Zero handoffs.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            No subcontractors juggling timelines. From the survey to the final
            curtain rod, it&apos;s the same team that started the job.
          </p>
        </div>

        <motion.ol
          className="relative mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {steps.map(({ n, icon: Icon, title, text }, idx) => (
            <motion.li
              key={n}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute right-0 top-12 hidden h-px w-5 bg-gradient-to-r from-primary/40 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="flex items-start justify-between gap-3">
                <span
                  className="font-display text-4xl font-extrabold leading-none text-primary/15 transition-colors group-hover:text-primary/30"
                  aria-hidden
                >
                  {n}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="mt-5 font-display text-xl font-bold text-foreground">
                {title}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 min-w-[220px] gap-2 rounded-full px-8 text-base font-semibold"
            asChild
          >
            <Link href="/quote">
              Start your quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 gap-2 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/services">
              See all services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
