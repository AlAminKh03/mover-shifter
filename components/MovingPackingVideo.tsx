"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { PACKING_VIDEO } from "@/config/videos";
import { MOVING_PHOTOS } from "@/config/work-photos";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { VideoPlayer } from "./VideoPlayer";
import { VideoSchema } from "./VideoSchema";

/**
 * Moving and packing, shown rather than claimed — the service with the deepest
 * real photography, so it carries the video and the supporting stills.
 *
 * The clip shows the packing stage specifically (wrapping and boxing fragile
 * kitchenware); the stills beside it cover loading and transport, so together
 * they represent the whole job without either overclaiming.
 *
 * Portrait 576x1024 in a 9:16 box. `preload="none"` keeps its 3.9MB off the
 * initial page cost.
 */
export function MovingPackingVideo() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote for furniture moving.",
  )}`;

  const stills = MOVING_PHOTOS.slice(0, 4);

  return (
    <>
      <section className="layout-section">
        <div className="layout-container">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12">
            {/* Video */}
            <div className="mx-auto w-full max-w-[20rem] lg:mx-0">
              <VideoPlayer
                src={PACKING_VIDEO.src}
                poster={PACKING_VIDEO.poster}
                title={PACKING_VIDEO.title}
                muted
                className="aspect-[9/16] shadow-xl ring-1 ring-secondary/10"
              />
            </div>

            {/* Copy + stills */}
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Moving &amp; shifting
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Packed, loaded, delivered — across Qatar.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-[1.7] text-muted-foreground sm:text-base">
                Homes, villas, and offices. We box the fragile things properly,
                wrap and pad the furniture, load it, drive it, and set it down
                where you want it — Doha, Lusail, The Pearl, Al Wakrah, Al
                Rayyan, and Al Khor. Book it on its own or bundled with a
                fit-out on one invoice.
              </p>

              <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
                {stills.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-square overflow-hidden rounded-lg bg-muted ring-1 ring-secondary/10"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 25vw, 12vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <Button
                  size="lg"
                  className="h-12 gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:text-base"
                  asChild
                >
                  <Link href="/quote">
                    Get a moving quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 rounded-full border-secondary/20 bg-background px-6 text-sm font-medium text-secondary hover:bg-muted sm:text-base"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoSchema videos={[PACKING_VIDEO]} />
    </>
  );
}
