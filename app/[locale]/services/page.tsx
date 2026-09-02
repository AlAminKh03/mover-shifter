import { SITE } from "@/config/site";
import type { Metadata } from "next";
import type { Locale } from "@/i18n.config";
import ServicesPage from "@/app/services/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Cabinets, curtains, sofas, flooring & moving | ${SITE.name}`,
    description:
      "What we do across Qatar: wall cabinets, kitchen cabinets, and built-in wardrobes, and TV units; curtains and blinds; custom sofas and majlis; reupholstery; SPC and wood flooring; and furniture moving. One free survey, one fixed quote.",
    keywords: [
      "wall cabinets Qatar",
      "kitchen cabinets Qatar",
      "built-in wardrobes Doha",
      "custom cabinets Qatar",
      "TV unit cabinet Qatar",
      "curtains Qatar",
      "curtain installation Doha",
      "blinds Qatar",
      "custom sofa Qatar",
      "majlis maker Doha",
      "reupholstery Qatar",
      "SPC flooring Qatar",
      "furniture moving Qatar",
      "interior fit-out Doha",
    ],
    alternates: {
      canonical: `${SITE.url}/${locale}/services/`,
      languages: {
        en: `${SITE.url}/en/services/`,
        ar: `${SITE.url}/ar/services/`,
        "x-default": `${SITE.url}/en/services/`,
      },
    },
    openGraph: {
      title: `Services | ${SITE.name}`,
      description:
        "Cabinets, kitchens, wardrobes, curtains, sofas & majlis, flooring, and furniture moving — what's included, what we need from you, and how quotes work.",
      url: `${SITE.url}/${locale}/services/`,
      siteName: SITE.name,
      images: [
        {
          url: `${SITE.url}/social.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Services`,
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Services | ${SITE.name}`,
      description:
        "Cabinets, curtains, sofas, flooring, and moving across Qatar — one studio.",
      images: [`${SITE.url}/social.jpg`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}
