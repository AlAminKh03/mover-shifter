/**
 * Quote form service options, grouped by chapter (matches /services).
 * Used as multi-select checkboxes — clients can pick more than one.
 */
export const quoteServiceGroups = [
  {
    label: "Moving & shifting",
    options: [
      "Home or villa move",
      "Apartment move",
      "Office or retail move",
      "Packing only",
      "Furniture transport",
    ],
  },
  {
    label: "Furniture & fit-out",
    options: [
      "Custom sofa or majlis",
      "Reupholstery",
      "Curtains or blinds",
      "SPC or wood flooring",
      "Built-in wardrobe",
      "Bed or headboard install",
      "TV unit install",
    ],
  },
  {
    label: "Other",
    options: ["Not sure yet"],
  },
] as const;

/** Flat list of all options — useful for validation / Zod enum. */
export const quoteServices = quoteServiceGroups.flatMap((g) => g.options) as readonly string[];
