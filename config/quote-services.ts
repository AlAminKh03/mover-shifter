/**
 * Quote form service options, grouped by chapter (matches /services).
 * Used as multi-select checkboxes — clients can pick more than one.
 */
export const quoteServiceGroups = [
  {
    label: "Wall cabinets & joinery",
    options: [
      "Wall cabinets",
      "Kitchen cabinets",
      "Built-in wardrobe",
      "TV unit or media wall",
      "Storage / shelving joinery",
      "Rework or re-door existing cabinets",
    ],
  },
  {
    label: "Curtains, sofas & finishes",
    options: [
      "Curtains or blinds",
      "Custom sofa or majlis",
      "Reupholstery",
      "SPC or wood flooring",
    ],
  },
  {
    label: "Moving & extras",
    options: [
      "Furniture moving / shifting",
      "Packing & transport",
      "Handyman & small repairs",
    ],
  },
  {
    label: "Other",
    options: ["Not sure yet"],
  },
] as const;

/** Flat list of all options — useful for validation / Zod enum. */
export const quoteServices = quoteServiceGroups.flatMap((g) => g.options) as readonly string[];
