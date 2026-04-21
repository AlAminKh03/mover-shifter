"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Package, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Survey & slot",
    text: "Access, lifts, and timing locked in before trucks are booked.",
  },
  {
    n: "02",
    icon: Package,
    title: "Pack & protect",
    text: "Materials and labels matched to fragile, bulky, and high-value items.",
  },
  {
    n: "03",
    icon: Truck,
    title: "Deliver & place",
    text: "Room-by-room placement; add interiors on the same crew when you’re ready.",
  },
] as const;

export function ValueBand() {
  return (
    <section
      className="relative layout-section border-b border-border/60 bg-accent"
      aria-labelledby="value-band-heading"
    >
      <div className="layout-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How we work with you
          </p>
          <h2
            id="value-band-heading"
            className="font-display mt-3 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl md:text-[2rem]"
          >
            After your call, everything stays on{" "}
            <span className="text-primary">one playbook</span> — not three
            vendors and a group chat.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Packing, transport, and placement follow the same schedule. Sofas,
            storage, curtains, or floors plug in when you want the space
            finished — without re-explaining your layout.
          </p>
        </div>

        <motion.ol
          className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {steps.map(({ n, icon: Icon, title, text }) => (
            <motion.li
              key={n}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col rounded-2xl border border-border/70 bg-card/90 p-5 text-left shadow-sm backdrop-blur-sm dark:bg-card/70"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="font-display text-3xl font-bold tabular-nums leading-none text-primary/35"
                  aria-hidden
                >
                  {n}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-foreground">
                {title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-border/60 pt-10 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-8 sm:pt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center sm:text-left">
            <p className="font-display text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
              800+{" "}
              <span className="text-sm font-normal text-muted-foreground">
                moves &amp; projects
              </span>
            </p>
            <span className="hidden h-8 w-px bg-border sm:block" aria-hidden />
            <p className="font-display text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
              15+{" "}
              <span className="text-sm font-normal text-muted-foreground">
                years in Qatar
              </span>
            </p>
            <span className="hidden h-8 w-px bg-border sm:block" aria-hidden />
            <p className="font-display text-2xl font-bold tabular-nums text-primary sm:text-3xl">
              1{" "}
              <span className="text-sm font-normal text-muted-foreground">
                crew &amp; timeline
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          <Button size="lg" className="h-11 min-w-[200px] rounded-full px-8" asChild>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2"
            >
              Start your quote
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </Button>
          <Button variant="ghost" className="h-11 text-muted-foreground" asChild>
            <Link href="/services" className="inline-flex items-center gap-1">
              Browse services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
