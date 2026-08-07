"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import {
  CURTAIN_PHOTOS,
  KITCHEN_PHOTOS,
  SOFA_PHOTOS,
} from "@/config/work-photos";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* First-party photography only — see config/work-photos for the inventory and
   for which frames are standing in for work we cannot yet illustrate. The
   `label` sells the service; `alt` describes the actual photograph. */
const showcase = {
  hero: {
    ...KITCHEN_PHOTOS[0],
    label: "Cabinets",
  },
  side: [
    {
      ...CURTAIN_PHOTOS[0],
      label: "Curtains",
    },
    {
      ...SOFA_PHOTOS[1],
      label: "Sofas & majlis",
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

      <div className="layout-container relative pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
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
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
                Cabinets. Curtains.
              </span>
              <span className="mt-2 block text-base font-semibold text-white/80 sm:text-lg md:text-xl lg:text-[1.6rem] lg:mt-3">
                Whole rooms and moving &amp; shifting
              </span>
              <span className="mt-1 block text-3xl text-gradient-orange sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
                across Qatar.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base lg:text-lg">
              Wall cabinets, kitchens, wardrobes, curtains &amp; blinds, custom
              sofas &amp; majlis, flooring, and furniture moving — one Qatar team
              for the whole job.
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 sm:mt-7">
              {trades.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/85 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-wrap sm:flex-row sm:items-center sm:gap-3">
              <Button
                size="lg"
                className="group h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 glow-orange sm:h-14 sm:w-auto sm:px-8 sm:text-base"
                asChild
              >
                <Link href="/quote">
                  Get a free quote
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full gap-2 rounded-full border-white/30 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-md hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-base"
                asChild
              >
                <a href={`tel:${SITE.phoneE164}`}>
                  <Phone className="h-4 w-4" />
                  <span className="sm:inline">{SITE.phoneDisplay}</span>
                  <span className="inline sm:hidden">Call</span>
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/60 sm:mt-5 sm:text-sm">
              Free survey · Fixed quote within 48 hours · No surprises after.
            </p>
          </motion.div>

          {/* ───── Showcase photos (hidden on mobile, shown on tablet+) ───── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:block lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                <Image
                  src={showcase.hero.src}
                  alt={showcase.hero.alt}
                  fill
                  priority
                  sizes="50vw"
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
                    sizes="25vw"
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
