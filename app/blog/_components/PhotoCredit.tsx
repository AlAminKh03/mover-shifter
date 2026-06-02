import { cn } from "@/lib/utils";

import type { ImageCredit } from "../posts";

/**
 * Standard Unsplash attribution: "Photo by [photographer] on Unsplash".
 *
 * Links carry Unsplash's required UTM params and rel="nofollow" — the nofollow
 * means these credit links pass no ranking signal in either direction, so the
 * attribution is purely goodwill and can never affect SEO.
 */
const UTM = "utm_source=doha_interiors&utm_medium=referral";

const linkClass =
  "underline decoration-dotted underline-offset-2 hover:text-primary";

export function PhotoCredit({
  credit,
  className,
}: {
  credit: ImageCredit;
  className?: string;
}) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      Photo by{" "}
      <a
        href={`${credit.profileUrl}?${UTM}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={linkClass}
      >
        {credit.name}
      </a>{" "}
      on{" "}
      <a
        href={`${credit.photoUrl}?${UTM}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={linkClass}
      >
        Unsplash
      </a>
    </p>
  );
}
