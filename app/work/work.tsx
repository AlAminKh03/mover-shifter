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
  // Sofas & seating
  { id: "sofa-1", category: "Sofas", caption: "Modern sofa arrangement", img: "/work/sofas/modern-sofa-arrangement.webp" },
  { id: "sofa-4", category: "Sofas", caption: "Formal seating arrangement", img: "/work/sofas/formal-seating-arrangement.webp" },
  { id: "chair-1", category: "Sofas", caption: "Cream upholstered chairs", img: "/work/chairs/cream-upholstered-chair-front.webp" },
  { id: "chair-2", category: "Sofas", caption: "Chair embroidery detail", img: "/work/chairs/chair-embroidery-detail.webp" },
  { id: "chair-4", category: "Sofas", caption: "Upholstered chair detail", img: "/work/chairs/upholstered-chair-detail.webp" },
  { id: "dining-1", category: "Sofas", caption: "Luxury dining set", img: "/work/dining/luxury-dining-set-formal.webp" },
  { id: "dining-2", category: "Sofas", caption: "Elegant dining interior", img: "/work/dining/elegant-dining-interior.webp" },

  // Curtains
  { id: "curtain-1", category: "Curtains", caption: "Luxury office curtains", img: "/work/curtains/luxury-office-curtains-doha.webp" },
  { id: "curtain-2", category: "Curtains", caption: "Elegant curtains & blinds", img: "/work/curtains/elegant-curtains-interior-design.webp" },
  { id: "curtain-3", category: "Curtains", caption: "Floor-to-ceiling curtains", img: "/work/curtains/floor-to-ceiling-curtains-qatar.webp" },

  // Flooring & moving
  { id: "moving-4", category: "Flooring & moving", caption: "Careful furniture handling", img: "/work/moving/careful-furniture-handling.webp" },
  { id: "moving-5", category: "Flooring & moving", caption: "Moving truck loading", img: "/work/moving/moving-truck-loading.webp" },
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
        <div className="layout-container pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-12">
          <div className="flex items-baseline gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Our work
            </span>
          </div>

          <h1 className="font-display mt-4 max-w-3xl text-2xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:mt-5 sm:text-3xl lg:text-5xl lg:text-[3.75rem]">
            What we build,{" "}
            <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[6px] sm:underline-offset-[8px]">
              by category.
            </em>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-[1.6] text-muted-foreground sm:mt-5 sm:text-base lg:text-lg lg:leading-[1.7]">
            Cabinets, kitchens, wardrobes, curtains, sofas, flooring, and
            furniture moving across Qatar. Filter below — and ask us for photos
            of finished jobs in your area.
          </p>
        </div>
      </section>

      {/* ────────  CATEGORY FILTER  ──────── */}
      <div className="border-y border-border bg-muted/40">
        <div className="layout-container">
          <div className="flex gap-1.5 overflow-x-auto py-3 sm:gap-2 sm:py-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                type="button"
                className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-4 sm:py-2 sm:text-[11px] ${
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

      {/* ────────  GALLERY GRID (responsive: 1-2 cols mobile, 3-4 desktop) ──────── */}
      <section className="layout-section pt-8 sm:pt-10">
        <div className="layout-container">
          <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {uniqueFiltered.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -3 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted ring-1 ring-secondary/10"
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
      <section className="layout-section pt-6 sm:pt-8">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl sm:rounded-[2rem] sm:p-8 lg:p-10">
              <span
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-primary/25"
                aria-hidden
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Want to see real jobs? —
              </p>
              <h2 className="font-display mt-2 text-xl font-bold leading-tight text-secondary sm:mt-3 sm:text-2xl lg:text-3xl">
                Ask us — we&apos;ll send photos.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base lg:text-lg">
                Tell us which category you&apos;re interested in and we&apos;ll
                send photos of finished jobs by WhatsApp, plus a fixed quote for
                yours.
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3">
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
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 w-full gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground hover:bg-muted sm:w-auto sm:text-base"
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
