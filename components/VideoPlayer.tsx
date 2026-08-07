'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  title?: string;
  /**
   * Defaults to 'none' so a multi-megabyte clip costs nothing until someone
   * presses play — these sit below the fold and would otherwise compete with
   * the LCP image for bandwidth.
   */
  preload?: 'none' | 'metadata' | 'auto';
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  muted = false,
  loop = true,
  className = '',
  title = 'Video',
  preload = 'none',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  return (
    <div className={`relative w-full bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={isPlaying}
        muted={muted || isPlaying}
        loop={loop}
        playsInline
        preload={preload}
        controls={isPlaying}
        className="w-full h-full object-cover"
        title={title}
      />

      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
          aria-label={`Play ${title}`}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-black fill-black" />
          </div>
        </button>
      )}
    </div>
  );
}
