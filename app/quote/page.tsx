import { SITE } from "@/config/site";
import { Metadata } from "next";
import QuotePage from "./quote";

export const metadata: Metadata = {
  title: `Get a quote | ${SITE.name}`,
  description:
    "Request a quote for home or office moves, packing, transport, or furniture and interior services in Qatar.",
  openGraph: {
    title: `Get a quote | ${SITE.name}`,
    description:
      "Moving, packing, and shifting — plus upholstery, curtains, and installation when you need them.",
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} quote`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Get a quote | ${SITE.name}`,
    description:
      "Moves and interior services in Doha and across Qatar — tell us what you need.",
  },
};

const page = () => {
  return <QuotePage />;
};

export default page;
