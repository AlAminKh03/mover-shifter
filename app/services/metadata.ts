import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cabinets, curtains, sofas, flooring & moving | ${SITE.name}`,
  description:
    "What we do across Qatar: wall cabinets, kitchen cabinets, built-in wardrobes, and TV units; curtains and blinds; custom sofas and majlis; reupholstery; SPC and wood flooring; and furniture moving. One free survey, one fixed quote.",
  keywords: [
    "wall cabinets Qatar",
    "kitchen cabinets Qatar",
    "built-in wardrobes Doha",
    "custom cabinets Qatar",
    "TV unit cabinet Qatar",
    "curtains Qatar",
    "curtain installation Doha",
    "blinds Qatar",
    "custom sofa Qatar",
    "majlis maker Doha",
    "reupholstery Qatar",
    "SPC flooring Qatar",
    "furniture moving Qatar",
    "interior fit-out Doha",
  ],
  alternates: {
    canonical: `${SITE.url}/en/services/`,
    languages: {
      "en": `${SITE.url}/en/services/`,
      "ar": `${SITE.url}/ar/services/`,
      "x-default": `${SITE.url}/en/services/`,
    },
  },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "Cabinets, kitchens, wardrobes, curtains, sofas & majlis, flooring, and furniture moving — what's included, what we need from you, and how quotes work.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Services`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${SITE.name}`,
    description:
      "Cabinets, curtains, sofas, flooring, and moving across Qatar — one studio.",
    images: [`${SITE.url}/social.jpg`],
  },
};
