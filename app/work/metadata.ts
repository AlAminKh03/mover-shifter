import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our work | ${SITE.name}`,
  description:
    "Gallery of moves, interiors, and installs — furniture, curtains, flooring, and more across Qatar.",
  keywords:
    "moving projects Qatar, interior portfolio Doha, furniture installation Qatar, curtain projects Qatar",
  openGraph: {
    title: `Our work | ${SITE.name}`,
    description:
      "Recent projects: relocations and interior work completed by our team.",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our work | ${SITE.name}`,
    description:
      "Moves and interior projects — portfolio highlights from Qatar.",
    images: ["/social.jpg"],
  },
};
