/**
 * Video registry — one source of truth for players and for VideoObject schema.
 *
 * Every field is measured from the actual file and every description was
 * written after watching the footage. These clips were previously labelled
 * "customer testimonials" because that is what the filenames said; none of them
 * shows a customer speaking. Two are finished built-in wardrobes, one is a
 * console-and-mirror install, one is a house move being packed.
 *
 * Google fetches the video and compares `duration` and `thumbnailUrl` against
 * what it finds, so both are measured, and posters are real frames pulled from
 * each file rather than a stand-in image.
 *
 * When adding a video: measure duration and frame size from the file, export a
 * poster frame from the footage, and set `uploadDate` to a fixed date — never a
 * computed one, or it re-dates on every deploy.
 */
export type SiteVideo = {
  /** Public path under /public. */
  src: string;
  /** A real frame from this video. Required for VideoObject rich results. */
  poster: string;
  title: string;
  description: string;
  /** ISO 8601, measured from the file. */
  duration: string;
  /** Fixed date — must not be computed. */
  uploadDate: string;
  width: number;
  height: number;
};

/**
 * Finished-work walkthroughs. Portrait phone clips, shot on site.
 *
 * TODO(video): these are 368px-wide sources — fine as proof, soft on a large
 * screen. Reshoot at 1080p when convenient.
 */
export const WORK_VIDEOS: SiteVideo[] = [
  {
    src: "/videos/walk-in-wardrobe-dressing-unit-doha.mp4",
    poster: "/videos/walk-in-wardrobe-dressing-unit-doha.poster.webp",
    title: "Walk-in wardrobe with built-in dressing table, Doha",
    description:
      "A fitted walk-in wardrobe in a light oak finish — glazed upper cabinets, full-height hanging, and a built-in dressing table with mirror and drawers.",
    duration: "PT0M4S",
    uploadDate: "2026-08-03",
    width: 368,
    height: 492,
  },
  {
    src: "/videos/built-in-wardrobes-fitted-qatar.mp4",
    poster: "/videos/built-in-wardrobes-fitted-qatar.poster.webp",
    title: "Built-in wardrobes, floor to ceiling — Qatar",
    description:
      "A run of white floor-to-ceiling built-in wardrobes with overhead storage boxes, fitted flush to the wall on installation day.",
    duration: "PT0M5S",
    uploadDate: "2026-08-03",
    width: 368,
    height: 650,
  },
  {
    src: "/videos/console-table-mirror-majlis-install.mp4",
    poster: "/videos/console-table-mirror-majlis-install.poster.webp",
    title: "Console table and wall mirror fitted in a majlis",
    description:
      "A wall-mounted console table and full-height mirror installed against a fluted feature wall in a Qatar majlis.",
    duration: "PT0M8S",
    uploadDate: "2026-08-03",
    width: 368,
    height: 492,
  },
];

/**
 * House move being packed. The footage covers wrapping and boxing fragile
 * kitchenware — described as packing rather than transport, because packing is
 * what the clip actually shows.
 */
export const PACKING_VIDEO: SiteVideo = {
  src: "/videos/packing-furniture-move-qatar.mp4",
  poster: "/videos/packing-furniture-move-qatar.poster.webp",
  title: "Packing a house move in Qatar",
  description:
    "Wrapping and boxing kitchenware and fragile items ahead of a home move in Qatar — packed by the same crew that loads and delivers.",
  duration: "PT0M45S",
  uploadDate: "2026-08-07",
  width: 576,
  height: 1024,
};

export const ALL_VIDEOS: SiteVideo[] = [PACKING_VIDEO, ...WORK_VIDEOS];
