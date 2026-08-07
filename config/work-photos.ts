/**
 * First-party job photography — the complete inventory of photos we own.
 *
 * Grouped by WHAT IS ACTUALLY IN THE FRAME. `alt` describes the photograph
 * literally, never the service a page is selling: alt text that contradicts its
 * image is both an SEO liability and a trust problem.
 *
 * Sources live in /_photo_source (git-ignored). Only images verified as our own
 * work reach this file. Rejected on review: manufacturer diagrams, 3D renders,
 * magazine/Pinterest reference shots, and anything carrying a third-party
 * watermark. Low resolution (roughly under 1000px, or an exact 736px/554px
 * width) is a reliable tell for a borrowed image — our own are phone photos.
 *
 * STILL MISSING — no photography exists yet for:
 *   • wall cabinets / storage joinery
 *   • curtains beyond the single office fit-out below
 * Those slots use STAND_IN. Grep `STAND_IN(` to find every one.
 */
export type WorkPhoto = { src: string; alt: string };

/** Media walls and TV joinery — three separate jobs. */
export const TV_UNIT_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/tv-units/tv-niche-recess-doha.webp",
    alt: "Television recessed into a built-in wall niche with a display ledge below",
  },
  {
    src: "/work/tv-units/slat-marble-tv-wall-led.webp",
    alt: "Fluted slat media wall with a marble centre panel and LED backlighting",
  },
  {
    src: "/work/tv-units/slat-tv-wall-fireplace-unit.webp",
    alt: "Slat media wall with a floating TV cabinet and inset electric fireplace",
  },
];

/**
 * Built-in wardrobes. These are poster frames lifted from our own installation
 * videos, so they are 368px wide — ample for service cards and gallery tiles at
 * their rendered size, but do not promote them to a hero or full-bleed slot.
 * Replace with proper stills at the next wardrobe fit.
 */
export const WARDROBE_PHOTOS: WorkPhoto[] = [
  {
    src: "/videos/walk-in-wardrobe-dressing-unit-doha.poster.webp",
    alt: "Walk-in wardrobe in light oak with glazed upper cabinets and a built-in dressing table",
  },
  {
    src: "/videos/built-in-wardrobes-fitted-qatar.poster.webp",
    alt: "Run of white floor-to-ceiling built-in wardrobes with overhead storage",
  },
];

/** Fitted kitchen cabinetry. */
export const KITCHEN_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/kitchens/fitted-kitchen-white-cabinets-black-worktop.webp",
    alt: "Fitted kitchen with white raised-panel cabinets and a black worktop",
  },
];

/** SPC, vinyl plank, and wood-look flooring. */
export const FLOORING_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/flooring/herringbone-wood-look-flooring.webp",
    alt: "Herringbone wood-look flooring laid through a room corner",
  },
  {
    src: "/work/flooring/office-vinyl-plank-flooring-qatar.webp",
    alt: "Wood-look vinyl plank flooring across an open office floor in Qatar",
  },
];

/** Sofas, majlis, and reupholstery. The blue set is one job, four angles. */
export const SOFA_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/sofas/cream-corner-sofa-majlis.webp",
    alt: "Cream corner sofa with scatter cushions on a marble floor",
  },
  {
    src: "/work/sofas/formal-majlis-carved-wood-frames.webp",
    alt: "Formal majlis seating with carved wood frames under a chandelier",
  },
  {
    src: "/work/sofas/reupholstered-sofa-set-blue-01.webp",
    alt: "Reupholstered sofa set in pale blue, wrapped after delivery",
  },
  {
    src: "/work/sofas/reupholstered-sofa-set-blue-02.webp",
    alt: "Reupholstered pale blue armchairs and sofa around a carved coffee table",
  },
  {
    src: "/work/sofas/reupholstered-sofa-set-blue-03.webp",
    alt: "Full majlis of reupholstered pale blue seating in a Qatar villa",
  },
  {
    src: "/work/sofas/reupholstered-sofa-set-blue-04.webp",
    alt: "Reupholstered pale blue majlis seating beside full-height curtains",
  },
];

/** Beds and upholstered headboards. */
export const BED_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/beds/upholstered-divan-beds-headboards.webp",
    alt: "Twin divan beds with tall upholstered blue headboards",
  },
];

/** One Doha office fit-out, three angles. Herringbone wood floor in frame. */
export const CURTAIN_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/curtains/luxury-office-curtains-doha.webp",
    alt: "Made-to-measure curtains and sheers on a curved track in a Doha office",
  },
  {
    src: "/work/curtains/elegant-curtains-interior-design.webp",
    alt: "Full-height curtains and sheers over a herringbone wood floor, Doha",
  },
  {
    src: "/work/curtains/floor-to-ceiling-curtains-qatar.webp",
    alt: "Floor-to-ceiling curtains running the length of a curved wall, Qatar",
  },
];

/** Upholstered chairs, photographed in the workshop. */
export const SEATING_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/chairs/cream-upholstered-chair-front.webp",
    alt: "Cream upholstered armchair on a gold-finished frame",
  },
  {
    src: "/work/chairs/chair-embroidery-detail.webp",
    alt: "Embroidery detail stitched into an upholstered chair back",
  },
];

/** One upholstered dining set, showroom. */
export const DINING_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/dining/elegant-dining-interior.webp",
    alt: "Upholstered dining set with a mirrored table base",
  },
  {
    // Stored under /work/moving/ but this is a dining photograph.
    src: "/work/moving/careful-furniture-handling.webp",
    alt: "Dining table surrounded by upholstered chairs",
  },
];

/**
 * Furniture moving — loading and transport across Qatar. Ordered strongest
 * first: the West Bay frame carries a recognisable Doha skyline, which is the
 * clearest geographic proof anywhere in this inventory.
 */
export const MOVING_PHOTOS: WorkPhoto[] = [
  {
    src: "/work/moving/furniture-move-west-bay-doha-skyline.webp",
    alt: "Truck loaded with wrapped office furniture in front of the West Bay towers, Doha",
  },
  {
    src: "/work/moving/loaded-truck-boxes-residential-qatar.webp",
    alt: "Flatbed truck stacked with packed cartons on a residential street in Qatar",
  },
  {
    src: "/work/moving/moving-truck-loading.webp",
    alt: "Packed boxes being loaded onto a moving truck in Qatar",
  },
  {
    // Stored under /work/sofas/ but this is a moving photograph.
    src: "/work/sofas/modern-sofa-arrangement.webp",
    alt: "Wardrobe and wrapped furniture loaded onto a flatbed truck",
  },
  {
    // Stored under /work/dining/ but this is a moving photograph.
    src: "/work/dining/luxury-dining-set-formal.webp",
    alt: "Two movers loading packed cartons onto a truck bed",
  },
];

/**
 * Marks a photo standing in for wall cabinets — the last service with no
 * photography of its own. The image and its alt text stay truthful about what
 * they show; only the adjacent copy sells the service.
 */
export const STAND_IN = (photo: WorkPhoto): WorkPhoto => photo;

/** Every owned photo, for callers that just need the full set. */
export const ALL_WORK_PHOTOS: WorkPhoto[] = [
  ...KITCHEN_PHOTOS,
  ...WARDROBE_PHOTOS,
  ...TV_UNIT_PHOTOS,
  ...SOFA_PHOTOS,
  ...CURTAIN_PHOTOS,
  ...FLOORING_PHOTOS,
  ...BED_PHOTOS,
  ...SEATING_PHOTOS,
  ...DINING_PHOTOS,
  ...MOVING_PHOTOS,
];
