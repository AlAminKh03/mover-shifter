"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

const showcase = {
  hero: {
    src: u("1715645948484-da40dd56bc93", 1600),
    alt: "Crew loading furniture and boxes into a moving truck",
    label: "Move",
  },
  side: [
    {
      src: u("1618221195710-dd6b41faaea6", 800),
      alt: "Furnished living room with sofa, curtains, and warm daylight",
      label: "Furnish",
    },
    {
      src: u("1558211583-d26f610c1eb1", 800),
      alt: "Built-in wardrobe with soft-close hardware",
      label: "Maintain",
    },
  ],
};

const trades = [
  "Home & office moves",
  "Packing & transport",
  "Fitted cabinets & wardrobes",
  "Custom sofas & majlis",
  "Curtains & flooring",
  "House maintenance",
];

export function HeroSlider() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-secondary text-white"
      aria-label="Qatar Moving & Shifting — moves, furniture, and house maintenance in Doha"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="layout-container relative pt-10 pb-16 sm:pt-10 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ───── Text panel ───── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {SITE.shortName} · Doha, Qatar
              </p>
            </div>

            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              <span className="block">Move it.</span>
              <span className="block">Furnish it.</span>
              <span className="block text-gradient-orange">Maintain it.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              One Doha crew for home and office moves, fitted cabinets and
              custom furniture, curtains, flooring — and the small repairs after
              you&apos;ve settled in.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {trades.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <p className="mt-5 text-sm text-white/60">
              Free survey · Fixed quote within 48 hours · No surprises after.
            </p>
          </motion.div>

          {/* ───── Image showcase ───── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Big primary tile — Furnish (the dream state) */}
              <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                <Image
                  src={showcase.hero.src}
                  alt={showcase.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-secondary/85 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  {showcase.hero.label}
                </span>
              </figure>

              {/* Two smaller tiles — Move + Maintain */}
              {showcase.side.map((tile) => (
                <figure
                  key={tile.label}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl"
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-secondary/85 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                    {tile.label}
                  </span>
                </figure>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
