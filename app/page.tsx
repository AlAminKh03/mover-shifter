"use client";

import { HeroSlider } from "@/components/home/HeroSlider";
import { ValueBand } from "@/components/home/ValueBand";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  Home as HomeIcon,
  MessageCircle,
  Package,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const moveServices = [
  {
    icon: HomeIcon,
    title: "Villa & home moves",
    text: "Full or partial villa relocations across compounds, towers, and standalone homes.",
    tag: "Most booked",
  },
  {
    icon: Building2,
    title: "Office shifting",
    text: "Phased moves, after-hours options, IT-safe handling, desk-to-desk delivery.",
  },
  {
    icon: Package,
    title: "Pack & unpack",
    text: "Materials supplied. Fragile, glass, art — wrapped, boxed, and unpacked at the other end.",
  },
  {
    icon: Truck,
    title: "Furniture transport",
    text: "Single piece or full lorry. Last-mile delivery, lift coordination, load securing.",
  },
];

const interiorServices = [
  {
    icon: Sofa,
    title: "Custom sofas & majlis",
    text: "Made to measure. Frames, foam, fabric, leather — built for Qatar living.",
    tag: "Bespoke",
  },
  {
    icon: Scissors,
    title: "Curtains & blinds",
    text: "Fabric library, motorised tracks, professional install and dressing.",
  },
  {
    icon: Sparkles,
    title: "SPC & wood flooring",
    text: "Waterproof systems, subfloor prep, clean handover. Supplied and fitted.",
  },
  {
    icon: ShieldCheck,
    title: "Reupholstery",
    text: "Bring tired furniture back to factory-new. Frame check, refoam, refabric.",
  },
];

/**
 * REPLACE-IMAGES: every project `image` is an Unsplash placeholder, themed to category.
 * Swap with real Qatar work when ready.
 */
const projects = [
  {
    title: "High-rise pack & move",
    location: "West Bay",
    category: "Moving",
    // Stacked moving boxes in a bright apartment
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=85&w=1400",
  },
  {
    title: "Majlis curtain install",
    location: "The Pearl",
    category: "Curtains",
    // Elegant curtains in a designed living room
    image:
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=85&w=900",
  },
  {
    title: "Custom TV cabinet",
    location: "Lusail",
    category: "Furniture",
    // Modern living room with TV media unit
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=85&w=900",
  },
  {
    title: "Walk-in wardrobe",
    location: "Al Wakrah",
    category: "Furniture",
    // Built-in wardrobe / closet interior
    image:
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=85&w=900",
  },
  {
    title: "Family room sofa set",
    location: "Al Rayyan",
    category: "Upholstery",
    // Premium sofa in a warm living room
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=85&w=900",
  },
  {
    title: "Barkiya SPC flooring",
    location: "Doha",
    category: "Flooring",
    // Wood / SPC flooring close-up in a finished room
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=85&w=900",
  },
];

const testimonials = [
  {
    name: "Khalid Al Muhannadi",
    role: "Villa relocation · West Bay",
    text: "Two days, villa to villa, labels on every carton. Crew showed up when they said they would — rare in this town.",
    rating: 5,
  },
  {
    name: "Mohammed Al Naimi",
    role: "Majlis + curtains · The Pearl",
    text: "Same team did the move and the majlis fit-out. The room finally feels like ours, and we didn’t repeat ourselves once.",
    rating: 5,
  },
  {
    name: "Fatima Al Sayed",
    role: "Reupholstery · Lusail",
    text: "Sofa came back looking factory-new. They were honest about which fabrics would survive our kids.",
    rating: 5,
  },
  {
    name: "Ahmed Al Emadi",
    role: "Retail unit move · Doha",
    text: "Weekend move, shelves back up for Monday opening. Zero drama, zero damage.",
    rating: 5,
  },
  {
    name: "Maryam Al Thani",
    role: "Interior designer · Doha",
    text: "I keep sending clients here for SPC. Installs stay flat and quiet — that’s all I need.",
    rating: 5,
  },
  {
    name: "Sara Al Mansouri",
    role: "Whole-house curtains · Al Khor",
    text: "Tracks level, pleats even, hoovered after. Small things, big difference.",
    rating: 5,
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "On-time, every time",
    text: "We don’t double-book crews. The team that quoted you is the team that shows up.",
  },
  {
    icon: ShieldCheck,
    title: "Insured handling",
    text: "Optional cover for high-value items. Documented inventory before and after.",
  },
  {
    icon: BadgeCheck,
    title: "Local knowledge",
    text: "Compounds, tower lift booking, weekend rules — we know the access quirks.",
  },
  {
    icon: Sparkles,
    title: "One partner",
    text: "Move, then furnish. Curtains, sofas, floors — same trust, same crew.",
  },
];

const trustLocations = [
  "West Bay villas",
  "Lusail compounds",
  "Pearl Qatar",
  "Al Wakrah",
  "Al Rayyan",
  "Al Khor",
  "Doha CBD",
  "Education City",
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"moving" | "interior">("moving");
  const services = activeTab === "moving" ? moveServices : interiorServices;

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <>
      <HeroSlider />

      {/* ─────────────────────────  TRUST MARQUEE  ───────────────────────── */}
      <section className="border-y border-border bg-background py-6">
        <div className="layout-container">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted across Qatar
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-12 animate-marquee">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 gap-12">
                  {trustLocations.map((loc) => (
                    <span
                      key={loc + dup}
                      className="font-display text-base font-semibold uppercase tracking-wider text-muted-foreground/70"
                    >
                      ✦ {loc}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValueBand />

      {/* ─────────────────────────  SERVICES (TABS)  ─────────────────────── */}
      <section className="layout-section bg-background">
        <div className="layout-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Our services
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Two trades.
                <br />
                <span className="text-gradient-orange">One bill.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Most clients call us for the move. Half of them keep us on for the
                fit-out. Switch the tab to see why.
              </p>

              <div className="mt-8 inline-flex rounded-full border border-border bg-muted p-1">
                <button
                  onClick={() => setActiveTab("moving")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    activeTab === "moving"
                      ? "bg-secondary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Moving & shifting
                </button>
                <button
                  onClick={() => setActiveTab("interior")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    activeTab === "interior"
                      ? "bg-secondary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Furniture & interior
                </button>
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Full service list
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8"
            >
              {services.map(({ icon: Icon, title, text, tag }) => (
                <div
                  key={title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  {tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {tag}
                    </span>
                  )}
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────  PROJECTS  ────────────────────────────── */}
      <section className="layout-section bg-secondary text-white">
        <div className="layout-container">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Recent work
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Real moves.
                <br />
                <span className="text-gradient-orange">Real spaces.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              View full portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0
                    ? "sm:col-span-2 sm:row-span-2 aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                {/* REPLACE-IMAGE: project showcase — final shoot should be real Qatar work */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {p.category}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/60">{p.location}</p>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  WHY US  ──────────────────────────────── */}
      <section className="layout-section bg-background">
        <div className="layout-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Why us
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Built on <span className="text-gradient-orange">repeat</span>{" "}
                bookings.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                We’d rather move you twice in five years than chase you for a
                review. The result is a quieter sales pipeline — and a fuller
                schedule.
              </p>

              {/* REPLACE-IMAGE: candid crew shot in Qatar — real shoot needed */}
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1698917414969-feade59e3343?auto=format&fit=crop&q=85&w=1400"
                  alt="Qatar Moving & Shifting crew at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  Booking now for next week
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {whyUs.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────  TESTIMONIALS  ────────────────────────── */}
      <section className="layout-section bg-muted">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Reviews
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Word travels{" "}
              <span className="text-gradient-orange">in compounds.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <Quote
                  className="absolute right-5 top-5 h-7 w-7 text-primary/15"
                  aria-hidden
                />
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-base font-medium leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  FINAL CTA  ───────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-grid-dark opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"
          aria-hidden
        />
        <div className="layout-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Ready when you are
            </p>
            <h2 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Let’s plan your{" "}
              <span className="text-gradient-orange">next move.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us your dates, address, and what needs to move. We’ll come
              back within 48 hours with a clear plan and a fixed quote.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-14 min-w-[220px] gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-orange"
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
                className="h-14 gap-2 rounded-full border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 gap-2 rounded-full px-8 text-base font-medium text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={`tel:${SITE.phoneE164}`}>
                  <Phone className="h-4 w-4" />
                  {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
