'use client';

import { VideoPlayer } from './VideoPlayer';

interface HeroVideoSectionProps {
  videoSrc: string;
  title?: string;
  subtitle?: string;
}

export function HeroVideoSection({
  videoSrc,
  title,
  subtitle,
}: HeroVideoSectionProps) {
  return (
    <section className="relative w-full h-96 md:h-screen overflow-hidden">
      <VideoPlayer
        src={videoSrc}
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            {title && (
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-2xl text-gray-200">{subtitle}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
