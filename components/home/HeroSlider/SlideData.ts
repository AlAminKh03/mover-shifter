/**
 * Hero stories — Doha Interiors.
 *
 * REPLACE-IMAGES: every `image` is an Unsplash placeholder, themed to its slide.
 * Final shoot direction:
 *   • Real Qatar homes and kitchens (Lusail, Pearl, West Bay, compounds)
 *   • Finished cabinetry with soft-close hardware in frame
 *   • Wide 16:10+ horizontal compositions
 */
export const slides = [
  {
    // Custom wall cabinets and storage built into a home
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=88&w=2400",
    imageAlt: "Custom wall cabinets and storage built into a Doha home",
    eyebrow: "01 — Wall cabinets",
    title: "Built to fit.",
    subtitle:
      "Wall cabinets and storage units measured, made, and installed — flush to your walls, level every time.",
    chip: "Free survey",
  },
  {
    // Built-in wardrobe with soft-close hardware
    image:
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=88&w=2400",
    imageAlt: "Built-in wardrobe with soft-close hardware",
    eyebrow: "02 — Kitchens & wardrobes",
    title: "Made to measure.",
    subtitle:
      "Kitchen cabinetry, built-in wardrobes, and TV units — configured to your space and your finish.",
    chip: "Made-to-measure",
  },
  {
    // Living room with sofa and curtains
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=88&w=2400",
    imageAlt: "Living room with custom sofa and made-to-measure curtains",
    eyebrow: "03 — Curtains & sofas",
    title: "And the rest.",
    subtitle:
      "Curtains and blinds, custom sofas and majlis, flooring, and furniture moving — full services, one studio.",
    chip: "One studio",
  },
] as const;
