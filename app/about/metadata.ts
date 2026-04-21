import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${SITE.name} | Movers & interior services in Qatar`,
  description:
    "Learn about our team — trusted for residential and office moves in Qatar, with full furniture, upholstery, and decor support.",
  keywords:
    "about movers Qatar, moving company Doha, relocation Qatar, furniture services Qatar, نقل عفش قطر",
  openGraph: {
    title: `About ${SITE.name}`,
    description:
      "Moving and shifting across Qatar — plus the craftsmanship to finish your space.",
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  alternates: {
    canonical: `${SITE.url}/about`,
    languages: {
      "ar-QA": `${SITE.url}/ar/about`,
      "en-QA": `${SITE.url}/about`,
    },
  },
};
