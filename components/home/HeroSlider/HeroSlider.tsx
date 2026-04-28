"use client";

import { SITE } from "@/config/site";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { slides } from "./SlideData";

const AUTO_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [],
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(t);
  }, [next, reduceMotion]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-secondary text-white"
      aria-label="Featured services"
    >
      {/* Background image stack */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 1.1, ease: "easeOut" }}
          >
            {/* REPLACE-IMAGE: hero background — see SlideData for description */}
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient + grain overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
        <div className="absolute inset-0 bg-grid-dark opacity-30 mask-fade-b" />
      </div>

      {/* Orange ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-primary/30 blur-[120px]"
        aria-hidden
      />

      <div className="layout-container relative flex min-h-[88vh] flex-col justify-between pt-28 pb-16 sm:pt-32 lg:min-h-[92vh]">
        {/* Top eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {SITE.shortName} · Doha, Qatar
          </p>
        </div>

        {/* Main content */}
        <div className="grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={`eyebrow-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/60"
              >
                {slide.eyebrow}
              </motion.p>
            </AnimatePresence>

            <h1 className="font-display mt-4 text-[3rem] font-extrabold leading-[0.95] tracking-tighter sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
              <span className="block">Move it.</span>
              <span className="block">Furnish it.</span>
              <span className="block text-gradient-orange">Done.</span>
            </h1>

            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={`sub-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="group h-14 gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 glow-orange"
                asChild
              >
                <Link href="/quote">
                  Get a free quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-2 rounded-full border-white/30 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={`tel:${SITE.phoneE164}`}>
                  <Phone className="h-4 w-4" />
                  {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>

          {/* Right: trust card + slide indicator */}
          <div className="lg:col-span-4 lg:pb-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-semibold text-white/80">
                  4.9 · 200+ reviews
                </span>
              </div>
              <p className="mt-3 font-display text-base font-medium leading-snug text-white">
                &ldquo;Showed up on time, wrapped everything, and even helped with
                the curtains the next week.&rdquo;
              </p>
              <p className="mt-2 text-xs text-white/60">
                — Khalid, Lusail villa relocation
              </p>
            </div>

            {/* Slide pills */}
            <div className="mt-6 flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    i === index ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-white/80">
          <Stat n="800+" label="moves & projects" />
          <Stat n="15+" label="years in Qatar" />
          <Stat n="48h" label="avg quote turnaround" />
          <Stat n="100%" label="local crews" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-bold text-white">{n}</span>
      <span className="text-xs uppercase tracking-wider text-white/55">
        {label}
      </span>
    </div>
  );
}
