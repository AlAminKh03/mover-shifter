"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n.config";
import { localeConfig } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment of the current path and links to it — so
 * switching language keeps you on the same page (e.g. /en/services/ ->
 * /ar/services/) rather than bouncing to the homepage.
 */
export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "ar" : "en";
  const otherConfig = localeConfig[otherLocale as keyof typeof localeConfig];

  const segments = pathname.split("/").filter(Boolean);
  segments[0] = otherLocale;
  const targetPath = `/${segments.join("/")}/`;

  return (
    <Link
      href={targetPath}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:bg-muted",
        className,
      )}
      aria-label={`Switch to ${otherConfig.name}`}
    >
      <span
        aria-hidden
        className="flex h-4 w-4 items-center justify-center rounded-full bg-muted text-[9px] font-bold"
      >
        {otherConfig.abbr}
      </span>
      {otherConfig.name}
    </Link>
  );
}
