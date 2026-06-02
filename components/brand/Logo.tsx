import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Site mark — wall cabinet with twin doors (Doha Interiors).
 * Replace this component if you add a custom `/public` brand pack later.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        className="fill-primary/14 stroke-primary/35"
        strokeWidth="1"
      />
      <g
        className="stroke-primary"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Wall-mount rail */}
        <path d="M9 10h22" className="opacity-50" />
        {/* Cabinet carcass */}
        <rect x="10" y="13" width="20" height="17" rx="1.5" />
        {/* Centre divider — twin doors */}
        <path d="M20 13v17" />
        {/* Mid shelf */}
        <path d="M10 21.5h20" className="opacity-50" />
      </g>
      {/* Door handles */}
      <circle cx="18" cy="21.5" r="1.15" className="fill-primary stroke-none" />
      <circle cx="22" cy="21.5" r="1.15" className="fill-primary stroke-none" />
    </svg>
  );
}
