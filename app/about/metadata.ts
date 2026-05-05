import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${SITE.name} | Movers & interior fit-out in Qatar`,
  description:
    "Since 2008. Two trades, one shop — moving, packing, and the interior fit-out that follows. Meet the team Qatar trusts twice.",
  keywords:
    "about movers Qatar, moving company Doha, relocation Qatar, furniture services Qatar, interior fit-out Doha, نقل عفش قطر",
  openGraph: {
    title: `About ${SITE.name}`,
    description:
      "Built for Qatar. Backed by repeat business. Moving + interior fit-out under one team.",
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
