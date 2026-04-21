import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Site mark — truck + cargo box (moving & shifting).
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
        {/* Cargo box */}
        <path d="M11 17.5l7-3 7 3v6l-7 3-7-3z" />
        <path d="M11 17.5v6l7 3" className="opacity-50" />
        <path d="M25 17.5v6l-7 3" className="opacity-50" />
        {/* Truck bed + cab */}
        <path d="M8 27.5h14v-4H8z" />
        <path d="M22 23.5h5.5l4.2 4.2V27.5H22" />
        <path d="M31.7 27.7l.3.8v3H22" />
        {/* Wheels */}
        <circle cx="13" cy="30.5" r="2.35" className="fill-primary stroke-none" />
        <circle cx="26" cy="30.5" r="2.35" className="fill-primary stroke-none" />
      </g>
    </svg>
  );
}
