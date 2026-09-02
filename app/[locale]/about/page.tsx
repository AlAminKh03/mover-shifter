import { SITE } from "@/config/site";
import type { Metadata } from "next";
import type { Locale } from "@/i18n.config";
import AboutPage from "@/app/about/about";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `About ${SITE.name} | A Doha interiors studio`,
    description:
      "An Al Wokra interiors studio for Qatar — wall cabinets, kitchens, and wardrobes alongside curtains, custom sofas and majlis, flooring, and furniture moving. Measured, made, and fitted by the same crew.",
    keywords:
      "cabinet maker Qatar, interiors studio Doha, kitchen cabinets Qatar, curtains Doha, custom sofa Qatar, joinery workshop Doha, نجار قطر, خزائن قطر",
    alternates: {
      canonical: `${SITE.url}/${locale}/about/`,
      languages: {
        en: `${SITE.url}/en/about/`,
        ar: `${SITE.url}/ar/about/`,
        "x-default": `${SITE.url}/en/about/`,
      },
    },
    openGraph: {
      title: `About ${SITE.name}`,
      description:
        "Built for Qatar. Backed by repeat business. Cabinets, curtains, sofas, flooring, and moving from one workshop.",
      url: `${SITE.url}/${locale}/about/`,
      images: [
        {
          url: `${SITE.url}/social.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
