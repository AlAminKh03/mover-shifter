import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${SITE.name} | A Doha interiors studio`,
  description:
    "An Al Wokra interiors studio for Qatar — wall cabinets, kitchens, and wardrobes alongside curtains, custom sofas and majlis, flooring, and furniture moving. Measured, made, and fitted by the same crew.",
  keywords:
    "cabinet maker Qatar, interiors studio Doha, kitchen cabinets Qatar, curtains Doha, custom sofa Qatar, joinery workshop Doha, نجار قطر, خزائن قطر",
  openGraph: {
    title: `About ${SITE.name}`,
    description:
      "Built for Qatar. Backed by repeat business. Cabinets, curtains, sofas, flooring, and moving from one workshop.",
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${SITE.url}/en/about/`,
    languages: {
      "en": `${SITE.url}/en/about/`,
      "ar": `${SITE.url}/ar/about/`,
      "x-default": `${SITE.url}/en/about/`,
    },
  },
};
