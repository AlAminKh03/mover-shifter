"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────  DATA  ──────────────────────── */

/* REPLACE-IMAGES: each thumbnail is an Unsplash placeholder, themed to its
   service. All verified working. */
const u = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

type Service = { slug: string; title: string; blurb: string; img: string; alt: string };

const moveServices: Service[] = [
  {
    slug: "home-moves",
    title: "Home & villa moves",
    blurb:
      "Full or partial relocations across compounds, towers, and standalone villas. Wrap, load, drive, place.",
    img: u("1715645948484-da40dd56bc93"),
    alt: "Crew loading furniture into a moving truck",
  },
  {
    slug: "office-moves",
    title: "Office & retail shifting",
    blurb:
      "Phased moves with workstation breakdown and labelled inventory — designed to keep the business running.",
    img: u("1450101499163-c8848c66ca85"),
    alt: "Loaded van ready to depart",
  },
  {
    slug: "packing",
    title: "Packing & materials",
    blurb:
      "Boxes, bubble wrap, blankets, wardrobe cartons, tape — supplied. Glass, art, and electronics get extra care.",
    img: u("1530124566582-a618bc2615dc"),
    alt: "Stacked moving boxes",
  },
  {
    slug: "transport",
    title: "Furniture transport",
    blurb:
      "Right-sized vehicles for one item or one truck. Lift coordination and parking sorted in advance.",
    img: u("1698917414969-feade59e3343"),
    alt: "Mover unloading wrapped furniture",
  },
];

const interiorServices: Service[] = [
  {
    slug: "custom-sofas",
    title: "Custom sofas & majlis",
    blurb:
      "Made to measure. Frames, foam, fabric, leather — built in our Al Mansoura workshop.",
    img: u("1555041469-a586c61ea9bc"),
    alt: "Living room sofa",
  },
  {
    slug: "curtains",
    title: "Curtains & blinds",
    blurb:
      "Measure, make, hang, dress. Motorised tracks and a fabric library on site.",
    img: u("1513161455079-7dc1de15ef3e"),
    alt: "Curtained living room",
  },
  {
    slug: "flooring",
    title: "SPC & wood flooring",
    blurb:
      "Waterproof SPC, Barkiya PVC, engineered wood. Subfloor prep, clean handover.",
    img: u("1581858726788-75bc0f6a952d"),
    alt: "Wood-look flooring",
  },
  {
    slug: "reupholstery",
    title: "Reupholstery",
    blurb:
      "Frame check, refoam, refabric — leather and fabric. Pickup and return delivery.",
    img: u("1493663284031-b7e3aefcae8e"),
    alt: "Reupholstered seating",
  },
  {
    slug: "wardrobes",
    title: "Built-in wardrobes",
    blurb:
      "Measured, built, installed. Soft-close hardware, configured to your clothes.",
    img: u("1558211583-d26f610c1eb1"),
    alt: "Built-in wardrobe interior",
  },
];

const allServices = [...moveServices, ...interiorServices];

/* ──────────────────────────  PAGE  ─────────────────────── */

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote.",
  )}`;

  return (
    <article className="bg-background">
      {/* ────────  HEADER  ──────── */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(18_100%_96%/0.5),transparent_60%)]"
          aria-hidden
        />
        <div className="layout-container pt-20 pb-10 sm:pt-24 sm:pb-14">
          <div className="flex items-baseline gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Services
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-[3.75rem]">
            Two chapters,{" "}
            <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
              one workshop.
            </em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Moves on the left. Fit-out on the right. After your call, the
            survey is free and a fixed quote follows within 48 hours.
          </p>
        </div>
      </section>

      {/* ────────  SERVICES — two-column list  ──────── */}
      <section className="layout-section pt-0">
        <div className="layout-container">
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-2 lg:gap-16">
            <ServiceColumn
              roman="I"
              chapter="Moving & shifting"
              services={moveServices}
            />
            <ServiceColumn
              roman="II"
              chapter="Furniture & fit-out"
              services={interiorServices}
            />
          </div>
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
                — Send us the job —
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                Tell us a bit about it.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Dates, address, and roughly what&apos;s involved. We&apos;ll
                come back within 48 hours with a fixed quote.
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

      {/* Service JSON-LD — one entry per offering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            allServices.map((s) => ({
              "@context": "https://schema.org",
              "@type": "Service",
              name: s.title,
              description: s.blurb,
              url: `${SITE.url}/services#${s.slug}`,
              provider: { "@id": `${SITE.url}#business` },
              areaServed: { "@type": "Country", name: "Qatar" },
            })),
          ),
        }}
      />
    </article>
  );
}

/* ──────────────────────  SUB-COMPONENTS  ─────────────────── */

function ServiceColumn({
  roman,
  chapter,
  services,
}: {
  roman: string;
  chapter: string;
  services: Service[];
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl font-extrabold text-primary">
          {roman}
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {chapter}
        </p>
      </div>

      <ul className="mt-5">
        {services.map((s, i) => (
          <motion.li
            key={s.slug}
            id={s.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group flex items-start gap-4 border-b border-border py-5 last:border-b-0 scroll-mt-24 sm:gap-5"
          >
            <div className="relative aspect-square h-16 shrink-0 overflow-hidden rounded-md bg-muted ring-1 ring-secondary/10 sm:h-20">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-bold text-secondary sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {s.blurb}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
