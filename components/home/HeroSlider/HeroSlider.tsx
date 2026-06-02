"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* Curated, high-quality interior photography (Unsplash). Swap for your own
   job photos by replacing the IDs. */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

const showcase = {
  hero: {
    src: u("1649361811423-a55616f7ab11", 1600),
    alt: "Custom built-in cabinetry in a Qatar home",
    label: "Cabinets",
  },
  side: [
    {
      src: u("1513161455079-7dc1de15ef3e", 800),
      alt: "Made-to-measure curtains in a living room",
      label: "Curtains",
    },
    {
      src: u("1715645948484-da40dd56bc93", 800),
      alt: "Crew loading furniture for a Qatar move",
      label: "Moving & shifting",
    },
  ],
};

const trades = [
  "Wall cabinets",
  "Kitchens & wardrobes",
  "Curtains & blinds",
  "Sofas & majlis",
  "SPC & wood flooring",
  "Furniture moving",
];

export function HeroSlider() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-secondary text-white"
      aria-label="Doha Interiors — cabinets, curtains, full rooms, and moving & shifting across Qatar"
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
                {SITE.shortName} · Al Wokra, Qatar
              </p>
            </div>

            <h1 className="font-display mt-6 font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                Cabinets. Curtains.
              </span>
              <span className="mt-3 block text-lg font-semibold text-white/80 sm:text-xl md:text-2xl lg:text-[1.6rem]">
                Whole rooms and moving &amp; shifting
              </span>
              <span className="mt-1 block text-4xl text-gradient-orange sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                across Qatar.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Wall cabinets, kitchens, wardrobes, curtains &amp; blinds, custom
              sofas &amp; majlis, flooring, and furniture moving — one Qatar team
              for the whole job.
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

          {/* ───── Showcase photos ───── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                <Image
                  src={showcase.hero.src}
                  alt={showcase.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>

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
                </figure>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
