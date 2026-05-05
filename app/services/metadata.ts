import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services in Qatar — moving, packing, fit-out | ${SITE.name}`,
  description:
    "Honest list of what we do: home and villa moves, office shifting, packing, transport, custom sofas, curtains, SPC flooring, reupholstery, and built-in wardrobes. With what's included, what we'll need from you, and how quotes work.",
  keywords: [
    "moving services Qatar",
    "moving company Doha",
    "villa relocation Qatar",
    "office shifting Doha",
    "packing service Qatar",
    "furniture transport Qatar",
    "custom sofa Qatar",
    "majlis maker Doha",
    "curtain installation Qatar",
    "SPC flooring Qatar",
    "Barkiya flooring Doha",
    "reupholstery Qatar",
    "built-in wardrobes Doha",
  ],
  alternates: {
    canonical: `${SITE.url}/services`,
  },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "What we do, what we don't, and how quotes work — across moves, packing, transport, and the fit-out that follows.",
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
      "What we do, what we don't, and how quotes work in Qatar.",
    images: [`${SITE.url}/social.jpg`],
  },
};
