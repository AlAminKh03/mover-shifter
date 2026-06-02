import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact ${SITE.name} — Doha, Qatar`,
  description: `WhatsApp, phone, or email — pick what suits you. Workshop in ${SITE.addressLine}, ${SITE.city}. Replies within 48 hours, usually faster.`,
  keywords: [
    "contact cabinet maker Qatar",
    "wall cabinets phone Doha",
    "curtains Qatar contact",
    "WhatsApp interiors studio Qatar",
    "Al Wokra joinery workshop",
    "furniture workshop Doha",
  ],
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description:
      "WhatsApp, phone, or email — pick what suits you. Workshop in Al Wokra, Qatar.",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Contact`,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${SITE.name}`,
    description: "Get in touch — WhatsApp, phone, or email.",
    images: [`${SITE.url}/social.jpg`],
  },
};
