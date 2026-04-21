import { SITE } from "@/config/site";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="border-b border-border/50 bg-primary/[0.07] text-muted-foreground">
      <div className="layout-container flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5 text-xs sm:text-sm">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="inline-flex items-center gap-1.5 font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-w-0 max-w-[min(100%,14rem)] items-center gap-1.5 truncate transition-colors hover:text-primary sm:max-w-xs"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span className="truncate">{SITE.email}</span>
          </a>
        </div>
        <Link
          href="/quote"
          className="shrink-0 font-semibold text-primary transition-colors hover:underline"
        >
          Request a quote →
        </Link>
      </div>
    </div>
  );
}
