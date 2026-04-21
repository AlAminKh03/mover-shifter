"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideControlsProps {
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSelectSlide: (index: number) => void;
  currentSlide: number;
  totalSlides: number;
  /** Short labels for each slide (e.g. kickers) */
  labels: readonly string[];
}

export function SlideControls({
  onPrevSlide,
  onNextSlide,
  onSelectSlide,
  currentSlide,
  totalSlides,
  labels,
}: SlideControlsProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Choose a story"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-current={index === currentSlide ? "true" : undefined}
            onClick={() => onSelectSlide(index)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-left text-xs font-medium transition-all sm:text-sm",
              index === currentSlide
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border/80 bg-background/80 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            <span className="tabular-nums text-[0.65rem] opacity-80 sm:text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>{" "}
            <span className="ml-1">{labels[index]}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onPrevSlide}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-sm transition hover:border-primary/50 hover:bg-accent"
          aria-label="Previous story"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onNextSlide}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-sm transition hover:border-primary/50 hover:bg-accent"
          aria-label="Next story"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
