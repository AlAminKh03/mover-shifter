"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";

/* ──────────────────────────  DATA  ──────────────────────── */

/* Curated, high-quality interior photography (Unsplash). Swap for your own
   job photos by replacing the IDs. */
const u = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

type Service = { slug: string; title: string; blurb: string; img: string; alt: string };

const cabinetServices: Service[] = [
  {
    slug: "wall-cabinets",
    title: "Wall cabinets",
    blurb:
      "Wall-mounted cabinets, storage walls, and display units — measured, built, and fitted flush and level. Soft-close hardware, your finish.",
    img: u("1556909114-f6e7ad7d3136"),
    alt: "Custom fitted wall cabinets",
  },
  {
    slug: "kitchen-cabinets",
    title: "Kitchen cabinets",
    blurb:
      "Full kitchen cabinetry to measure — base and wall units, tall larders, drawer banks. Moisture-resistant carcasses, soft-close throughout.",
    img: u("1649361811423-a55616f7ab11"),
    alt: "Fitted kitchen cabinetry",
  },
  {
    slug: "wardrobes",
    title: "Built-in wardrobes",
    blurb:
      "Measured, built, installed. Hinged or sliding doors, soft-close hardware, configured to your clothes.",
    img: u("1558211583-d26f610c1eb1"),
    alt: "Built-in wardrobe interior",
  },
  {
    slug: "tv-units",
    title: "TV units & storage joinery",
    blurb:
      "Media walls, TV units, shoe and entry storage, and bespoke shelving — built to the wall, finished to match.",
    img: u("1672137233327-37b0c1049e77"),
    alt: "Built-in storage joinery",
  },
];

const finishesServices: Service[] = [
  {
    slug: "curtains",
    title: "Curtains & blinds",
    blurb:
      "Measure, make, hang, dress. Sheers, blackout, roman and roller blinds, motorised tracks — and our own fabric library on site.",
    img: u("1513161455079-7dc1de15ef3e"),
    alt: "Made-to-measure curtains in a living room",
  },
  {
    slug: "custom-sofas",
    title: "Custom sofas & majlis",
    blurb:
      "Made to measure. Frames, foam, fabric, and leather — built to the size and feel you want.",
    img: u("1555041469-a586c61ea9bc"),
    alt: "Custom sofa and majlis seating",
  },
  {
    slug: "reupholstery",
    title: "Reupholstery",
    blurb:
      "Frame check, refoam, refabric — leather and fabric. Pickup and return delivery across Qatar.",
    img: u("1493663284031-b7e3aefcae8e"),
    alt: "Reupholstered seating",
  },
  {
    slug: "flooring",
    title: "SPC & wood flooring",
    blurb:
      "Waterproof SPC, Barkiya PVC, and engineered wood. Subfloor prep and a clean handover.",
    img: u("1581858726788-75bc0f6a952d"),
    alt: "Wood-look flooring",
  },
];

const extrasServices: Service[] = [
  {
    slug: "furniture-moving",
    title: "Furniture moving & shifting",
    blurb:
      "Home, villa, and office moves across Qatar — wrap, load, drive, place. Bookable on its own or alongside a fit-out.",
    img: u("1715645948484-da40dd56bc93"),
    alt: "Crew loading furniture into a moving truck",
  },
  {
    slug: "packing",
    title: "Packing & transport",
    blurb:
      "Boxes, bubble wrap, blankets, wardrobe cartons, tape — supplied. Right-sized vehicles, glass and electronics handled with extra care.",
    img: u("1530124566582-a618bc2615dc"),
    alt: "Stacked moving boxes",
  },
  {
    slug: "handyman",
    title: "Handyman & small repairs",
    blurb:
      "Hanging shelves and TVs, adjusting hinges and handles, touch-up paint, loose fittings. One visit, one invoice.",
    img: u("1581094794329-c8112a89af12"),
    alt: "Hand tools on a workbench",
  },
];

const allServices = [...cabinetServices, ...finishesServices, ...extrasServices];

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
            Everything for the room,{" "}
            <em className="not-italic underline decoration-primary decoration-[5px] underline-offset-[8px]">
              one team.
            </em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Wall cabinets, kitchens, and wardrobes — alongside curtains and
            blinds, custom sofas and majlis, flooring, and furniture moving.
            Book one or several: one free survey, one fixed quote within 48
            hours.
          </p>
        </div>
      </section>

      {/* Curtains spotlight */}
      <section className="layout-section pt-6">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Curtains & blinds
              </p>
              <h3 className="font-display mt-2 text-xl font-bold leading-tight text-secondary">
                Measure, make, hang — an end-to-end curtains service
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We offer sheers, blackout, roman and roller blinds, motorised tracks and an on-site fabric library. Tell us the window and we&apos;ll advise the best finish.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/quote" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  Request a curtain quote
                </Link>
                <Link href="/work" className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-secondary hover:bg-muted">
                  See curtain projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────  SERVICES — three-column list  ──────── */}
      <section className="layout-section pt-0">
        <div className="layout-container">
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-3 lg:gap-12">
            <ServiceColumn
              roman="I"
              chapter="Cabinets & joinery"
              services={cabinetServices}
            />
            <ServiceColumn
              roman="II"
              chapter="Curtains, sofas & finishes"
              services={finishesServices}
            />
            <ServiceColumn
              roman="III"
              chapter="Moving & extras"
              services={extrasServices}
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
                — Get a quote —
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-secondary sm:text-3xl">
                Tell us about the job.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                The room, the address, and roughly what you want done.
                We&apos;ll come back within 48 hours with a fixed, itemised
                quote.
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
              <OptimizedImage
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
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
