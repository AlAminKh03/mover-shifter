"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { useState } from "react";

/* ──────────────────────────  DATA  ──────────────────────── */

/* Curated, high-quality interior photography (Unsplash). Swap for your own
   job photos by replacing the IDs. */
const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

type Category =
  | "All"
  | "Wall cabinets"
  | "Kitchens"
  | "Wardrobes & storage"
  | "Sofas"
  | "Curtains"
  | "Flooring & moving";

type Tile = {
  id: string;
  category: Exclude<Category, "All">;
  caption: string;
  img: string;
};

const tiles: Tile[] = [
  // Wall cabinets
  { id: "wall-1", category: "Wall cabinets", caption: "Wall-mounted cabinets", img: u("1556909114-f6e7ad7d3136") },
  { id: "wall-2", category: "Wall cabinets", caption: "Storage walls", img: u("1672137233327-37b0c1049e77") },
  { id: "wall-3", category: "Wall cabinets", caption: "Display & open shelving", img: u("1649361811423-a55616f7ab11") },

  // Kitchens
  { id: "kitchen-1", category: "Kitchens", caption: "Fitted kitchen cabinetry", img: u("1649361811423-a55616f7ab11") },
  { id: "kitchen-2", category: "Kitchens", caption: "Islands & tall larders", img: u("1556909114-f6e7ad7d3136") },

  // Wardrobes & storage
  { id: "wardrobe-1", category: "Wardrobes & storage", caption: "Built-in wardrobes", img: u("1558211583-d26f610c1eb1") },
  { id: "wardrobe-2", category: "Wardrobes & storage", caption: "Walk-in closets", img: u("1672137233327-37b0c1049e77") },
  { id: "wardrobe-3", category: "Wardrobes & storage", caption: "TV & media units", img: u("1649361811423-a55616f7ab11") },

  // Sofas
  { id: "sofa-1", category: "Sofas", caption: "Custom sofas & majlis", img: u("1555041469-a586c61ea9bc") },

  // Curtains
  { id: "curtain-1", category: "Curtains", caption: "Curtains & blinds", img: u("1513161455079-7dc1de15ef3e") },
  { id: "curtain-2", category: "Curtains", caption: "Roman blinds & sheers", img: u("1513161455079-7dc1de15ef3e") },

  // Flooring & moving
  { id: "floor-1", category: "Flooring & moving", caption: "SPC & wood flooring", img: u("1581858726788-75bc0f6a952d") },
  { id: "moving-1", category: "Flooring & moving", caption: "Furniture moving & shifting", img: u("1715645948484-da40dd56bc93") },
];

const categories: Category[] = [
  "All",
  "Wall cabinets",
  "Kitchens",
  "Wardrobes & storage",
  "Sofas",
  "Curtains",
  "Flooring & moving",
];

/* ──────────────────────────  PAGE  ─────────────────────── */

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = tiles.filter((t) => active === "All" || t.category === active);
  // Remove tiles that reference the same image URL to avoid repetitive pictures
  const uniqueFiltered = filtered.filter(
    (t, i, arr) => arr.findIndex((x) => x.img === t.img) === i,
  );
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      {/* ────────  HEADER  ──────── */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,hsl(18_100%_96%/0.5),transparent_60%)]"
          aria-hidden
        />
        <div className="layout-container pt-20 pb-8 sm:pt-24 sm:pb-12">
          <div className="flex items-baseline gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Our work
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[3.75rem]">
            What we build,{" "}
            <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
              by category.
            </em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Cabinets, kitchens, wardrobes, curtains, sofas, flooring, and
            furniture moving across Qatar. Filter below — and ask us for photos
            of finished jobs in your area.
          </p>
        </div>
      </section>

      {/* ────────  CATEGORY FILTER  ──────── */}
      <div className="border-y border-border bg-muted/40">
        <div className="layout-container">
          <div className="flex gap-2 overflow-x-auto py-4 sm:gap-3 sm:py-5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                type="button"
                className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-5 sm:py-2 sm:text-xs ${
                  active === c
                    ? "border-secondary bg-secondary text-white"
                    : "border-border bg-background text-muted-foreground hover:border-secondary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ────────  GALLERY GRID  ──────── */}
      <section className="layout-section pt-10">
        <div className="layout-container">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {uniqueFiltered.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -3 }}
                className="group relative aspect-square overflow-hidden rounded-md bg-muted ring-1 ring-secondary/10"
              >
                <OptimizedImage
                  src={t.img}
                  alt={t.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.figure>
            ))}
          </div>

          {uniqueFiltered.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Nothing in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ────────  SIGN-OFF  ──────── */}
      <section className="layout-section pt-0">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:p-10">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Want to see real jobs? —
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                Ask us — we&apos;ll send photos.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Tell us which category you&apos;re interested in and we&apos;ll
                send photos of finished jobs by WhatsApp, plus a fixed quote for
                yours.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1"
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
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
