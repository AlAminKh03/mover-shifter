import { Lightbulb } from "lucide-react";

import type { Block } from "../posts";

/**
 * Renders structured article blocks with consistent, on-brand typography.
 * Server component — no client JS needed for static content.
 */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display scroll-mt-24 pt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display pt-2 text-xl font-semibold tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-8 text-muted-foreground sm:text-lg">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-7 text-muted-foreground sm:text-lg">
                    <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-7 text-muted-foreground sm:text-lg">
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                    >
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary/60 pl-5 text-lg font-medium italic text-foreground"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6"
              >
                <Lightbulb className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <p className="text-base leading-7 text-foreground sm:text-lg">{block.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
