import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Look book — moves, sofas, curtains, flooring | ${SITE.name}`,
  description:
    "Reference imagery by category for the kind of work we do across Qatar — moves, sofas & majlis, curtains, flooring, wardrobes. Real shoots replacing these soon.",
  keywords: [
    "moving company portfolio Qatar",
    "interior fit-out Doha",
    "majlis maker Qatar",
    "custom sofa Doha",
    "curtain installation Qatar",
    "SPC flooring portfolio",
    "wardrobe gallery Qatar",
  ],
  alternates: {
    canonical: `${SITE.url}/work`,
  },
  openGraph: {
    title: `Look book | ${SITE.name}`,
    description:
      "Reference imagery for moves, sofas, curtains, flooring, and wardrobes — by category.",
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
      "Reference imagery for the kind of work we do across Qatar.",
    images: [`${SITE.url}/social.jpg`],
  },
};
