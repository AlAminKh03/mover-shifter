import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [fallback, setFallback] = useState<string | null>(null);

  const finalSrc = fallback ?? src;
  const sharedProps = {
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    priority: false,
    onLoad: () => setLoading(false),
    onError: () => {
      // Diagnostics: try a HEAD request to report the HTTP status for the failing image
      (async () => {
        try {
          const resp = await fetch(finalSrc, { method: "HEAD" });
          // eslint-disable-next-line no-console
          console.warn("OptimizedImage load failed; HEAD status:", resp.status, finalSrc);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn("OptimizedImage load failed; fetch HEAD error:", err, finalSrc);
        }
      })();

      // Use a lightweight placeholder service when the image fails to load
      setFallback(`https://placehold.co/${width || 600}x${height || 400}?text=Image+unavailable`);
      setLoading(false);
    },
  } as const;

  const imageProps = fill
    ? { fill: true, ...sharedProps }
    : { width: width || 500, height: height || 300, ...sharedProps };

  return (
    <Image
      src={finalSrc}
      alt={alt || "Doha Interiors"}
      className={`
        ${className}
        ${isLoading ? "blur-sm grayscale" : "blur-0 grayscale-0"}
        transition-all duration-300
      `}
      {...imageProps}
    />
  );
}
