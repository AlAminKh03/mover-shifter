import { SITE } from "@/config/site";
import type { Metadata } from "next";
import type { Locale } from "@/i18n.config";
import QuotePage from "@/app/quote/quote";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Ask for a quote | ${SITE.name}`,
    description:
      "A few details now, a fixed quote in 48 hours. Free site measure across Qatar — cabinets, kitchens, wardrobes, curtains, sofas and majlis, flooring, and furniture moving. Book one or several.",
    keywords: [
      "wall cabinets quote Qatar",
      "kitchen cabinets quote Doha",
      "curtains quote Qatar",
      "custom sofa quote Doha",
      "furniture moving quote Qatar",
      "interior fit-out quote Qatar",
    ],
    alternates: {
      canonical: `${SITE.url}/${locale}/quote/`,
      languages: {
        en: `${SITE.url}/en/quote/`,
        ar: `${SITE.url}/ar/quote/`,
        "x-default": `${SITE.url}/en/quote/`,
      },
    },
    openGraph: {
      title: `Ask for a quote | ${SITE.name}`,
      description:
        "Free site measure, fixed itemised quote within 48 hours — cabinets, curtains, sofas, flooring, and moving across Qatar.",
      url: `${SITE.url}/${locale}/quote/`,
      siteName: SITE.name,
      images: [
        {
          url: `${SITE.url}/social.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Ask for a quote`,
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Ask for a quote | ${SITE.name}`,
      description: "Tell us about the job — fixed quote within 48 hours.",
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
  return <QuotePage locale={locale} />;
}
