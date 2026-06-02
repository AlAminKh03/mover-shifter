import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type MediaPlaceholderProps = {
  /** Short service/label shown at the bottom of the tile. Omit for icon-only. */
  label?: string;
  /** lucide-react icon component. */
  Icon: LucideIcon;
  /** Wrapper classes — the parent controls aspect ratio/size. */
  className?: string;
  /** Icon size override (defaults to a mid tile size). */
  iconClassName?: string;
};

/**
 * On-brand image placeholder — a deliberate, consistent tile used in place of
 * stock photography until real job photos are supplied. Drops into any
 * `relative` aspect-ratio container exactly like a filled <Image>.
 */
export function MediaPlaceholder({
  label,
  Icon,
  className,
  iconClassName,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 16px)",
        }}
      />
      <Icon
        aria-hidden
        className={cn("relative h-10 w-10 text-primary", iconClassName)}
      />
      {label ? (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-left font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
          {label}
        </span>
      ) : null}
    </div>
  );
}
