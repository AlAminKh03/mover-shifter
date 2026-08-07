'use client';

import { WORK_VIDEOS } from '@/config/videos';

import { VideoPlayer } from './VideoPlayer';
import { VideoSchema } from './VideoSchema';

/**
 * Finished-work walkthroughs — wardrobes and joinery, filmed on site.
 *
 * Previously presented as "customer testimonials", which none of these are:
 * nobody speaks to camera. They are worth more as proof of the cabinet and
 * wardrobe work we otherwise have no photography for, so they are framed that
 * way, and each caption describes its own clip.
 *
 * All three are portrait (368x492 and 368x650) and were being cropped by an
 * `aspect-video` box; they now sit in a portrait frame at their native ratio.
 */
export function WorkVideos() {
  return (
    <>
      <section className="layout-section border-y border-border bg-muted/40">
        <div className="layout-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              On site
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              Finished jobs, filmed on the day.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Wardrobes, dressing units, and fitted joinery in Qatar homes —
              walked through on installation day, not staged afterwards.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {WORK_VIDEOS.map((video) => (
              <article
                key={video.src}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <VideoPlayer
                  src={video.src}
                  poster={video.poster}
                  title={video.title}
                  className="aspect-[3/4]"
                />
                <div className="p-3">
                  <h3 className="font-display text-sm font-bold leading-snug text-secondary">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <VideoSchema videos={WORK_VIDEOS} />
    </>
  );
}
