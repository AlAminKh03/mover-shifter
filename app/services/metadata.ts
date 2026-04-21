import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description:
    "Home and office moves, packing, transport, and delivery — plus custom furniture, curtains, flooring, and upholstery in Qatar.",
  keywords: [
    "moving services Qatar",
    "packing service Doha",
    "office relocation Qatar",
    "furniture movers Qatar",
    "upholstery Qatar",
    "curtain installation Qatar",
  ],
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "Moving & shifting first — furniture and interior services when you need the full package.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${SITE.name}`,
    description:
      "Moves, packing, transport, and optional furniture & decor services.",
  },
};
