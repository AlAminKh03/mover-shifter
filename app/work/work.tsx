"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import {
  Archive,
  ArrowRight,
  Layers,
  MessageCircle,
  Phone,
  Scissors,
  Sofa,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ──────────────────────────  DATA  ──────────────────────── */

type Category = "All" | "Moves" | "Sofas & majlis" | "Curtains" | "Flooring" | "Wardrobes";

type Tile = {
  id: string;
  category: Exclude<Category, "All">;
  Icon: React.ComponentType<{ className?: string }>;
  /** Tailwind gradient classes for the icon-placeholder background. */
  gradient: string;
  caption: string;
  /**
   * Set this to a real photo path to replace the icon placeholder.
   * Drop your file in /public/work/ — e.g. /public/work/moves-truck-1.jpg —
   * then set photo: "/work/moves-truck-1.jpg" here.
   */
  photo?: string;
};

/* Tile photos verified via Unsplash search — each ID came from a search for
   the exact category keyword, so the image content matches the caption.
   Drop your real photo into /public/work/{id}.jpg and replace the photo URL. */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=1200`;

const tiles: Tile[] = [
  // Moves
  {
    id: "moves-1",
    category: "Moves",
    Icon: Truck,
    gradient: "from-secondary via-secondary/95 to-secondary/80",
    caption: "Home & villa moves",
    photo: u("1628481103102-01de5ffe556b"),
  },
  {
    id: "moves-2",
    category: "Moves",
    Icon: Truck,
    gradient: "from-[#16294a] via-[#1f3963] to-[#0f1d35]",
    caption: "Office & retail shifting",
    photo: u("1636543133032-e175f2adfe25"),
  },
  {
    id: "moves-3",
    category: "Moves",
    Icon: Truck,
    gradient: "from-secondary/90 via-secondary to-[#0a1729]",
    caption: "Packing & transport",
    photo: u("1730154838368-c37b1fdebcf6"),
  },

  // Sofas & majlis
  {
    id: "sofa-1",
    category: "Sofas & majlis",
    Icon: Sofa,
    gradient: "from-[#3d1d0a] via-[#5c2c12] to-[#2b1305]",
    caption: "Custom sofa builds",
    photo: u("1653340513561-3ef95d9e4d94"),
  },
  {
    id: "sofa-2",
    category: "Sofas & majlis",
    Icon: Sofa,
    gradient: "from-[#4a2210] via-[#6b3018] to-[#321608]",
    caption: "Majlis sets",
    photo: u("1623353283172-2518d7e6f5ab"),
  },
  {
    id: "sofa-3",
    category: "Sofas & majlis",
    Icon: Sofa,
    gradient: "from-[#2a160a] via-[#3d1f0e] to-[#1c0f06]",
    caption: "Reupholstery",
    photo: u("1571838972106-3da673706e5f"),
  },

  // Curtains
  {
    id: "curtain-1",
    category: "Curtains",
    Icon: Scissors,
    gradient: "from-[#1a3535] via-[#27504e] to-[#0d2424]",
    caption: "Curtain installation",
    photo: u("1528822855841-e8bf3134cdc9"),
  },
  {
    id: "curtain-2",
    category: "Curtains",
    Icon: Scissors,
    gradient: "from-[#214644] via-[#326664] to-[#143131]",
    caption: "Motorised tracks",
    photo: u("1508778552286-12d4c6007799"),
  },

  // Flooring
  {
    id: "floor-1",
    category: "Flooring",
    Icon: Layers,
    gradient: "from-[#2d2818] via-[#4a4126] to-[#1c1810]",
    caption: "SPC flooring",
    photo: u("1575204015311-0fe377370780"),
  },
  {
    id: "floor-2",
    category: "Flooring",
    Icon: Layers,
    gradient: "from-[#3a3220] via-[#5a4f30] to-[#26200f]",
    caption: "Wood & engineered",
    photo: u("1573869908170-64b53a60d8da"),
  },

  // Wardrobes
  {
    id: "wardrobe-1",
    category: "Wardrobes",
    Icon: Archive,
    gradient: "from-[#2c1840] via-[#42235e] to-[#1c0d2a]",
    caption: "Built-in wardrobes",
    photo: u("1649361811423-a55616f7ab11"),
  },
  {
    id: "wardrobe-2",
    category: "Wardrobes",
    Icon: Archive,
    gradient: "from-[#321a48] via-[#4d2a6b] to-[#220f33]",
    caption: "Walk-in closets",
    photo: u("1672137233327-37b0c1049e77"),
  },
];

const categories: Category[] = [
  "All",
  "Moves",
  "Sofas & majlis",
  "Curtains",
  "Flooring",
  "Wardrobes",
];

/* ──────────────────────────  PAGE  ─────────────────────── */

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = tiles.filter((t) => active === "All" || t.category === active);
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
              Look book
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[3.75rem]">
            What these jobs{" "}
            <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
              tend to look like.
            </em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Reference photography by category, while we shoot our own jobs in
            Doha. Each tile shows the kind of work the category covers.
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
            {filtered.map((t, i) => (
              <Dialog key={t.id}>
                <DialogTrigger asChild>
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                    whileHover={{ y: -3 }}
                    type="button"
                    className={`group relative aspect-square overflow-hidden rounded-md ring-1 ring-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary ${
                      t.photo ? "bg-muted" : `bg-gradient-to-br ${t.gradient}`
                    }`}
                  >
                    {t.photo ? (
                      <Image
                        src={t.photo}
                        alt={t.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        {/* Placeholder hatch pattern */}
                        <div
                          className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)",
                          }}
                          aria-hidden
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <t.Icon className="h-12 w-12 text-primary/90 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14" />
                        </div>
                        <span className="absolute right-2 top-2 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm sm:text-[9px]">
                          Placeholder
                        </span>
                      </>
                    )}

                    {/* Bottom caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 text-left sm:p-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                        {t.category}
                      </p>
                      <p className="mt-0.5 font-display text-xs font-bold text-white sm:text-sm">
                        {t.caption}
                      </p>
                    </div>
                  </motion.button>
                </DialogTrigger>
                <DialogContent
                  aria-describedby={undefined}
                  className="max-w-[95vw] sm:max-w-3xl border-0 bg-transparent p-0 shadow-none"
                >
                  {t.photo ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-secondary">
                      <Image
                        src={t.photo}
                        alt={t.caption}
                        fill
                        sizes="95vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${t.gradient}`}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)",
                        }}
                        aria-hidden
                      />
                      <t.Icon className="relative h-28 w-28 text-primary/90 sm:h-36 sm:w-36" />
                      <span className="absolute right-3 top-3 rounded bg-white/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                        Placeholder
                      </span>
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between text-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {t.category}
                    </p>
                    <p className="text-xs text-white/70">{t.caption}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filtered.length === 0 && (
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
                — Want to see actual photos? —
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                Ask us — we&apos;ll send some over.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We have phone-camera photos from past jobs we can send by
                WhatsApp. Tell us which category and we&apos;ll pull a few.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1"
                  asChild
                >
                  <Link href="/quote">
                    Ask for a quote
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
