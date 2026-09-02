"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import type { Locale } from "@/i18n.config";
import {
  BED_PHOTOS,
  CURTAIN_PHOTOS,
  DINING_PHOTOS,
  FLOORING_PHOTOS,
  KITCHEN_PHOTOS,
  MOVING_PHOTOS,
  SEATING_PHOTOS,
  SOFA_PHOTOS,
  TV_UNIT_PHOTOS,
  WARDROBE_PHOTOS,
} from "@/config/work-photos";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { useState } from "react";

/* ──────────────────────────  DATA  ──────────────────────── */

/**
 * Portfolio tiles. Categories describe what is genuinely in the photographs —
 * a filter that resolves to nothing reads as "no track record", so a category
 * only exists here once we have work to put in it. Cabinets, kitchens,
 * wardrobes are absent by design until that shoot happens; add
 * them back alongside the photos, not before.
 *
 * `category` stays a fixed English key used for filtering; `categoryLabels`
 * below maps it to the label shown in each locale.
 */
type Tile = {
  category: string;
  caption: string;
  img: string;
};

const tiles: Tile[] = [
  ...KITCHEN_PHOTOS.map((p) => ({ category: "Kitchens", caption: p.alt, img: p.src })),
  ...WARDROBE_PHOTOS.map((p) => ({ category: "Wardrobes", caption: p.alt, img: p.src })),
  ...TV_UNIT_PHOTOS.map((p) => ({ category: "TV units & joinery", caption: p.alt, img: p.src })),
  ...SOFA_PHOTOS.map((p) => ({ category: "Sofas & majlis", caption: p.alt, img: p.src })),
  ...CURTAIN_PHOTOS.map((p) => ({ category: "Curtains & blinds", caption: p.alt, img: p.src })),
  ...FLOORING_PHOTOS.map((p) => ({ category: "Flooring", caption: p.alt, img: p.src })),
  ...BED_PHOTOS.map((p) => ({ category: "Beds & headboards", caption: p.alt, img: p.src })),
  ...SEATING_PHOTOS.map((p) => ({ category: "Seating & upholstery", caption: p.alt, img: p.src })),
  ...DINING_PHOTOS.map((p) => ({ category: "Dining furniture", caption: p.alt, img: p.src })),
  ...MOVING_PHOTOS.map((p) => ({ category: "Moving & packing", caption: p.alt, img: p.src })),
];

/* Derived from the tiles, so a category can never outlive its photos. */
const categories: string[] = [
  "All",
  ...Array.from(new Set(tiles.map((t) => t.category))),
];

const categoryLabelsAR: Record<string, string> = {
  All: "الكل",
  Kitchens: "المطابخ",
  Wardrobes: "الدواليب",
  "TV units & joinery": "وحدات التلفزيون والنجارة",
  "Sofas & majlis": "الأرائك والمجالس",
  "Curtains & blinds": "الستائر والمظلات",
  Flooring: "الأرضيات",
  "Beds & headboards": "الأسرة ورؤوس الأسرة",
  "Seating & upholstery": "المقاعد والتنجيد",
  "Dining furniture": "أثاث الطعام",
  "Moving & packing": "النقل والتغليف",
};

/* ──────────────────────────  PAGE  ─────────────────────── */

export default function WorkPage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [active, setActive] = useState<string>("All");
  const filtered = tiles.filter((t) => active === "All" || t.category === active);
  // Remove tiles that reference the same image URL to avoid repetitive pictures
  const uniqueFiltered = filtered.filter(
    (t, i, arr) => arr.findIndex((x) => x.img === t.img) === i,
  );
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    isAr ? "مرحباً! أرغب في الحصول على عرض سعر." : "Hi! I'd like a quote.",
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
              {isAr ? "أعمالنا" : "Our work"}
            </span>
          </div>

          <h1 className="font-display mt-4 max-w-3xl text-2xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:mt-5 sm:text-3xl lg:text-5xl lg:text-[3.75rem]">
            {isAr ? (
              <>
                ما نصنعه،{" "}
                <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[6px] sm:underline-offset-[8px]">
                  حسب الفئة.
                </em>
              </>
            ) : (
              <>
                What we build,{" "}
                <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[6px] sm:underline-offset-[8px]">
                  by category.
                </em>
              </>
            )}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-[1.6] text-muted-foreground sm:mt-5 sm:text-base lg:text-lg lg:leading-[1.7]">
            {isAr
              ? "خزائن، مطابخ، دواليب، ستائر، أرائك، أرضيات، ونقل أثاث في جميع أنحاء قطر. صنّف أدناه — واطلب منا صورًا لأعمال منجزة في منطقتك."
              : "Cabinets, kitchens, wardrobes, curtains, sofas, flooring, and furniture moving across Qatar. Filter below — and ask us for photos of finished jobs in your area."}
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
                {isAr ? categoryLabelsAR[c] ?? c : c}
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
                key={t.img}
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
              {isAr ? "لا يوجد شيء في هذه الفئة بعد." : "Nothing in this category yet."}
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
                {isAr ? "— تريد رؤية أعمال حقيقية؟ —" : "— Want to see real jobs? —"}
              </p>
              <h2 className="font-display mt-2 text-xl font-bold leading-tight text-secondary sm:mt-3 sm:text-2xl lg:text-3xl">
                {isAr ? "اسألنا — سنرسل لك الصور." : "Ask us — we'll send photos."}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base lg:text-lg">
                {isAr
                  ? "أخبرنا بالفئة التي تهمك وسنرسل صورًا لأعمال منجزة عبر واتساب، مع عرض سعر ثابت لمشروعك."
                  : "Tell us which category you're interested in and we'll send photos of finished jobs by WhatsApp, plus a fixed quote for yours."}
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:flex-1 sm:px-7 sm:text-base"
                  asChild
                >
                  <Link href={`/${locale}/quote`}>
                    {isAr ? "احصل على عرض سعر مجاني" : "Get a free quote"}
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
                    {isAr ? "اتصل" : "Call"}
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
