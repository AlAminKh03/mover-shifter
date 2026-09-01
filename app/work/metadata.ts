import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Look book — cabinets, curtains, sofas & more | ${SITE.name}`,
  description:
    "Reference imagery by category for what we do across Qatar — wall cabinets, kitchens, wardrobes, curtains and blinds, custom sofas and majlis, flooring, and furniture moving. Real shoots replacing these soon.",
  keywords: [
    "wall cabinets portfolio Qatar",
    "kitchen cabinets Doha",
    "built-in wardrobes Qatar",
    "curtains Qatar",
    "custom sofa Doha",
    "majlis maker Qatar",
    "SPC flooring portfolio",
  ],
  alternates: {
    canonical: `${SITE.url}/en/work/`,
    languages: {
      "en": `${SITE.url}/en/work/`,
      "ar": `${SITE.url}/ar/work/`,
      "x-default": `${SITE.url}/en/work/`,
    },
  },
  openGraph: {
    title: `Look book | ${SITE.name}`,
    description:
      "Reference imagery for cabinets, kitchens, wardrobes, curtains, sofas, flooring, and moving — by category.",
    url: `${SITE.url}/work`,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Look book`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Look book | ${SITE.name}`,
    description:
      "Reference imagery for the rooms we build and finish across Qatar.",
    images: [`${SITE.url}/social.jpg`],
  },
};
