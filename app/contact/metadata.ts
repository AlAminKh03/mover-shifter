import { SITE } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description:
    `Contact ${SITE.name} for moves, packing quotes, or furniture and interior services — phone, email, or WhatsApp. ${SITE.city}, ${SITE.country}.`,
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description:
      "Reach our team for relocations, packing, and interior services across Qatar.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
};
