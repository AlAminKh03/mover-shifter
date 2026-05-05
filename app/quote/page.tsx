import { SITE } from "@/config/site";
import { Metadata } from "next";
import QuotePage from "./quote";

export const metadata: Metadata = {
  title: `Ask for a quote | ${SITE.name}`,
  description:
    "A few details now, a fixed quote in 48 hours. Free survey at your place. Moves, packing, sofas, curtains, flooring, wardrobes — across Qatar.",
  keywords: [
    "moving quote Qatar",
    "moving quote Doha",
    "free survey movers Qatar",
    "fixed quote moving company",
    "furniture quote Doha",
    "interior fit-out quote Qatar",
  ],
  alternates: {
    canonical: `${SITE.url}/quote`,
  },
  openGraph: {
    title: `Ask for a quote | ${SITE.name}`,
    description:
      "Free survey, fixed itemised quote within 48 hours — moves and fit-out across Qatar.",
    url: `${SITE.url}/quote`,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Ask for a quote`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Ask for a quote | ${SITE.name}`,
    description: "Tell us about the job — fixed quote within 48 hours.",
    images: [`${SITE.url}/social.jpg`],
  },
};

export default function Page() {
  return <QuotePage />;
}
