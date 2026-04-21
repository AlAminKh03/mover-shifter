"use client";

import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "./SlideData";
import { SlideControls } from "./SlideControls";

const AUTO_MS = 6500;

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(nextSlide, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [nextSlide, reduceMotion]);

  const s = slides[currentSlide];

  return (
    <section
      className="relative overflow-x-hidden border-b border-border/50 bg-background"
      aria-label="Featured moving services"
    >
      {/* Soft ambient shapes — not a full-bleed dark slider */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <div className="absolute -left-[20%] top-0 h-[70%] w-[55%] rounded-full bg-primary/[0.09] blur-3xl" />
        <div className="absolute -right-[10%] bottom-0 h-[55%] w-[45%] rounded-full bg-[hsl(240_35%_35%/0.06)] blur-3xl" />
      </div>

      <div className="layout-container relative pt-6 pb-10 sm:pt-8 sm:pb-12 lg:grid lg:min-h-[min(88vh,920px)] lg:grid-cols-2 lg:items-start lg:gap-12 lg:pt-8 lg:pb-14 xl:gap-16">
        <div className="flex flex-col lg:min-h-0 lg:pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Qatar moving & shifting
          </p>

          <h1 className="font-display mt-3 text-[2.125rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
            <span className="block">Relocation without</span>
            <span className="mt-1 block bg-gradient-to-r from-primary via-primary to-[hsl(28_85%_38%)] bg-clip-text text-transparent dark:to-[hsl(38_95%_60%)]">
              the guesswork.
            </span>
          </h1>

          <div className="mt-8 min-h-[4.5rem] sm:min-h-[5rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion ? undefined : { opacity: 0, y: -8 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
              >
                <p className="text-sm font-semibold text-foreground/90">
                  {s.kicker}
                </p>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {s.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Survey before trucks
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Doha &amp; Qatar-wide
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Interiors when you need them
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full px-8 text-base shadow-md"
              asChild
            >
              <Link href="/quote">
                Get a free quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/80 bg-background/80 px-8 text-base backdrop-blur-sm"
              asChild
            >
              <a href={`tel:${SITE.phoneE164}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>

          <SlideControls
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            onSelectSlide={setCurrentSlide}
            currentSlide={currentSlide}
            totalSlides={slides.length}
            labels={slides.map((sl) => sl.kicker)}
          />
        </div>

        <div className="relative mt-8 pb-14 sm:mt-10 sm:pb-16 lg:mt-0 lg:pb-12 lg:pt-1">
          <div
            className={cn(
              "relative mx-auto aspect-[4/3] w-full max-w-xl lg:mx-0 lg:max-w-none",
              "lg:aspect-[5/6] lg:min-h-[420px] xl:min-h-[480px]"
            )}
          >
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-[hsl(240_30%_30%/0.12)] blur-2xl sm:-inset-4 sm:rounded-[2.25rem]"
              aria-hidden
            />
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-border/60 bg-muted shadow-[0_24px_80px_-24px_hsl(240_35%_12%/0.35)] sm:rounded-[2rem]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }
                  }
                  transition={{ duration: reduceMotion ? 0.2 : 0.55 }}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={currentSlide === 0}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent"
                    aria-hidden
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur-md dark:bg-card/90">
                <p className="font-display text-sm font-semibold text-foreground">
                  Same crew. Clear plan.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Book a survey — we&apos;ll confirm access, timing, and what ships
                  first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
