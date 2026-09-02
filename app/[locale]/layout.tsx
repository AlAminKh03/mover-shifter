import { ContactButtons } from "@/components/ContactButtons";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbSchema } from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/TopBar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE } from "@/config/site";
import GoogleAnalytics from "../_components/GoogleAnalytics";
import "../globals.css";
import { getLocaleMetadata, localeConfig } from "@/lib/i18n";
import { i18nConfig, Locale } from "@/i18n.config";

const fontSans = localFont({
  src: [
    { path: "../fonts/Inter-latin.woff2", style: "normal" },
    { path: "../fonts/Inter-latin-ext.woff2", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: isArabic
        ? `${SITE.name} | خزائن حائط ومطابخ ودواليب في الدوحة، قطر`
        : `${SITE.name} | Wall Cabinets, Kitchens & Wardrobes in Doha, Qatar`,
      template: isArabic ? `%s | ${SITE.name}` : `%s | ${SITE.name}`,
    },
    description: isArabic
      ? "ديكورات الدوحة — استوديو تصميم داخلي في قطر. خزائن حائط مخصصة، مطابخ، ودواليب مدمجة، بالإضافة إلى الستائر والعمى، أرائك وسدادات مخصصة، أرضيات SPC والخشب، إعادة تغطية، ونقل الأثاث عبر قطر. مسح مجاني، عرض سعر ثابت في غضون 48 ساعة."
      : "Doha Interiors — a Qatar interiors studio. Custom wall cabinets, kitchen cabinets, and built-in wardrobes, plus curtains & blinds, custom sofas & majlis, SPC & wood flooring, reupholstery, and furniture moving across Qatar. Free survey, fixed quote within 48 hours.",
    keywords: isArabic
      ? "خزائن حائط قطر, خزائن مطبخ قطر, دواليب قطر, خزائن الدوحة, نجار قطر, ستائر قطر, أرائك مخصصة, نقل الأثاث"
      : "wall cabinets Qatar, wall cabinet Doha, kitchen cabinets Qatar, kitchen cabinet maker Doha, built-in wardrobes Qatar, fitted cabinets Doha, custom cabinets Qatar, TV unit cabinet Qatar, storage cabinet Doha, wardrobe maker Qatar, joinery Qatar, carpentry Doha",
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages: {
        en: `${SITE.url}/en`,
        ar: `${SITE.url}/ar`,
      },
    },
    other: {
      "geo.region": "QA",
      "geo.placename": "Al Wakrah",
      "geo.position": "25.1654;51.6047",
      ICBM: "25.1654, 51.6047",
      "color-scheme": "light dark",
    },
    openGraph: {
      type: "website",
      title: isArabic
        ? `${SITE.name} | خزائن وستائر وأرائك وأكثر في قطر`
        : `${SITE.name} | Cabinets, curtains, sofas & more in Qatar`,
      description: isArabic
        ? "استوديو ديكور داخلي في الدوحة: خزائن حائط، مطابخ، ودواليب، بالإضافة إلى الستائر والعمى، أرائك وسدادات مخصصة، أرضيات، ونقل أثاث عبر قطر."
        : "A Doha interiors studio: wall cabinets, kitchens, and wardrobes, plus curtains & blinds, custom sofas & majlis, flooring, and furniture moving across Qatar.",
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      images: [
        {
          url: `${SITE.url}/social.jpg`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? `${SITE.name} — خزائن حائط مدمجة ومطابخ في الدوحة، قطر`
            : `${SITE.name} — fitted wall cabinets and kitchens in Doha, Qatar`,
          type: "image/jpeg",
        },
      ],
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? `${SITE.name} | خزائن وستائر وأرائك وأكثر في قطر`
        : `${SITE.name} | Cabinets, curtains & sofas in Qatar`,
      description: isArabic
        ? "استوديو ديكور داخلي في الدوحة: خزائن حائط، مطابخ، ودواليب، بالإضافة إلى الستائر والعمى، أرائك وسدادات مخصصة، أرضيات، ونقل أثاث عبر قطر."
        : "A Doha interiors studio — wall cabinets, kitchens, wardrobes, curtains & blinds, custom sofas & majlis, flooring, and furniture moving across Qatar.",
      images: [`${SITE.url}/social.jpg`],
      creator: "@dohainteriors",
      site: "@dohainteriors",
    },
    category: "cabinet maker, joinery, interior fit-out, Qatar business",
    verification: {
      google: "wuWIEoRpkPuTjhHF6OVoAPH5lxltE5qq5qeKfgC-7fs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
        { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    applicationName: SITE.shortName,
    authors: [{ name: SITE.name }],
    generator: "Next.js",
    publisher: SITE.name,
    formatDetection: {
      telephone: true,
      address: true,
    },
    manifest: "/manifest.json",
  };
}

export const viewport: Viewport = {
  themeColor: "#F9611F",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const localeData = getLocaleMetadata(locale);

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-934R2JYRD8" />
      </head>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontSans.className} flex min-h-screen flex-col bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <TopBar locale={locale} />
            <Navbar locale={locale} />
            <Breadcrumb locale={locale} />
          </div>
          <main className="flex min-h-0 w-full flex-1 flex-col">
            {children}
          </main>
          <BreadcrumbSchema locale={locale} />
          <Footer locale={locale} />
          <SocialLinks />
          <ContactButtons />
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
              "@id": `${SITE.url}#business`,
              name: SITE.name,
              image: {
                "@type": "ImageObject",
                url: `${SITE.url}/social.jpg`,
                width: 1200,
                height: 630,
              },
              description: locale === 'ar'
                ? "استوديو تصميم داخلي في قطر - خزائن حائط مخصصة ومطابخ ودواليب مدمجة، بالإضافة إلى الستائر والعمى، أرائك وسدادات مخصصة، أرضيات SPC والخشب، إعادة تغطية، ونقل أثاث عبر قطر."
                : "Qatar interiors studio in Doha — wall cabinets, kitchen cabinets, built-in wardrobes, and TV units, plus curtains and blinds, custom sofas and majlis, SPC and wood flooring, reupholstery, and furniture moving across Qatar.",
              url: `${SITE.url}/${locale}`,
              inLanguage: locale,
              telephone: SITE.phoneE164,
              email: SITE.email,
              priceRange: "$$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Wokra",
                addressLocality: "Al Wakrah",
                addressRegion: "Qatar",
                addressCountry: "QA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.1654,
                longitude: 51.6047,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: (Object.values(SITE.socials) as string[]).filter(
                (u) => u.length > 0,
              ),
              hasMap:
                "https://www.google.com/maps/place/Al+Wakrah,+Qatar/@25.1654,51.6047,14z/",
              areaServed: {
                "@type": "State",
                name: "Qatar",
                containsPlace: [
                  { "@type": "City", name: "Doha" },
                  { "@type": "City", name: "Al Wakrah" },
                  { "@type": "City", name: "Al Rayyan" },
                  { "@type": "City", name: "Al Khor" },
                  { "@type": "City", name: "Lusail" },
                  { "@type": "City", name: "The Pearl" },
                ],
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom wall cabinets",
                    description:
                      "Wall-mounted cabinets and storage units measured, built, and installed across Qatar",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Kitchen cabinets",
                    description:
                      "Made-to-measure kitchen cabinetry with soft-close hardware, fitted in Doha",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Built-in wardrobes & TV units",
                    description:
                      "Built-in wardrobes, TV units, and storage joinery configured to your space",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Curtains & blinds",
                    description:
                      "Made-to-measure curtains, blinds, and motorised tracks fitted across Qatar",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom sofas & majlis",
                    description:
                      "Bespoke sofas, majlis builds, and reupholstery in fabric or leather",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flooring & furniture moving",
                    description:
                      "SPC and wood flooring, plus home, villa, and office furniture moving across Qatar",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
