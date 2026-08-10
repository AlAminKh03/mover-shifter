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

import GoogleAnalytics from "./_components/GoogleAnalytics";
import "./globals.css";

/**
 * Single-typeface system: Inter carries both body and display, matching the
 * neo-grotesque setup the design reference uses (one family, no character
 * contrast — photography does the work). `--font-display` is aliased to
 * `--font-sans` in globals.css, so reintroducing a separate heading face later
 * is a one-line change there plus a second font instance here.
 *
 * Self-hosted from app/fonts rather than `next/font/google`: the Google Fonts
 * fetch is a hard build dependency, and an intermittent network failure there
 * fails the whole deploy. These are the upstream Google Fonts woff2 files
 * (variable, weights 100–900), committed so builds are fully offline.
 */
const fontSans = localFont({
  src: [
    { path: "./fonts/Inter-latin.woff2", style: "normal" },
    { path: "./fonts/Inter-latin-ext.woff2", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Wall Cabinets, Kitchens & Wardrobes in Doha, Qatar`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Doha Interiors — a Qatar interiors studio. Custom wall cabinets, kitchen cabinets, and built-in wardrobes, plus curtains & blinds, custom sofas & majlis, SPC & wood flooring, reupholstery, and furniture moving across Qatar. Free survey, fixed quote within 48 hours.",
  keywords:
    "wall cabinets Qatar, wall cabinet Doha, kitchen cabinets Qatar, kitchen cabinet maker Doha, built-in wardrobes Qatar, fitted cabinets Doha, custom cabinets Qatar, TV unit cabinet Qatar, storage cabinet Doha, wardrobe maker Qatar, joinery Qatar, carpentry Doha, خزائن حائط قطر, خزائن مطبخ قطر, دواليب قطر, خزائن الدوحة, نجار قطر, custom sofa Qatar, majlis maker Doha, curtains Qatar, SPC flooring Qatar, furniture moving Qatar",
  category: "cabinet maker, joinery, interior fit-out, Qatar business",
  verification: {
    google: "wuWIEoRpkPuTjhHF6OVoAPH5lxltE5qq5qeKfgC-7fs",
  },
  other: {
    "geo.region": "QA",
    "geo.placename": "Al Wakrah",
    "geo.position": "25.1654;51.6047",
    ICBM: "25.1654, 51.6047",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": SITE.shortName,
    "mobile-web-app-capable": "yes",
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    title: `${SITE.name} | Cabinets, curtains, sofas & more in Qatar`,
    description:
      "A Doha interiors studio: wall cabinets, kitchens, and wardrobes, plus curtains & blinds, custom sofas & majlis, flooring, and furniture moving across Qatar.",
    url: SITE.url,
    siteName: SITE.name,
    /**
     * One JPG only. social-banner.svg used to be listed here as a second
     * image, but no OG consumer (Facebook, X, LinkedIn, WhatsApp) renders
     * SVG — it was dead weight that some scrapers pick as the primary image
     * and then fail on. The vector twin still lives at /social-banner.svg for
     * print and in-app use.
     */
    images: [
      {
        url: `${SITE.url}/social.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — fitted wall cabinets and kitchens in Doha, Qatar`,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Cabinets, curtains & sofas in Qatar`,
    description:
      "A Doha interiors studio — wall cabinets, kitchens, wardrobes, curtains & blinds, custom sofas & majlis, flooring, and furniture moving across Qatar.",
    images: [`${SITE.url}/social.jpg`],
    creator: "@dohainteriors",
    site: "@dohainteriors",
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
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
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

/**
 * themeColor belongs here, not in `metadata` — Next moved viewport-level tags
 * out of the metadata export, and leaving it there warns on every route because
 * root metadata merges into all of them.
 *
 * Declared once at the root; every page inherits it.
 */
export const viewport: Viewport = {
  // Exactly --primary (18 95% 55%) from globals.css, and the orange in the
  // icon set. This used to be #ea7623 here and #ea580c in manifest.json, so
  // the mobile browser chrome tinted a different orange to the installed app.
  themeColor: "#F9611F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Must stay inside <head>: Search Console's Google Analytics
            ownership check rejects the snippet anywhere else. */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-934R2JYRD8" />
      </head>
      {/* suppressHydrationWarning on <body>: browser extensions (ColorZilla's
          cz-shortcut-listen, Grammarly, LastPass) inject attributes here before
          React hydrates, which React reports as a mismatch the site cannot fix.
          This only silences attribute diffs on <body> itself, not its children,
          so real mismatches inside the app still surface. */}
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
            <TopBar />
            <Navbar />
            <Breadcrumb />
          </div>
          <main className="flex min-h-0 w-full flex-1 flex-col">
            {children}
          </main>
          <BreadcrumbSchema />
          <Footer />
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
              description:
                "Qatar interiors studio in Doha — wall cabinets, kitchen cabinets, built-in wardrobes, and TV units, plus curtains and blinds, custom sofas and majlis, SPC and wood flooring, reupholstery, and furniture moving across Qatar.",
              url: SITE.url,
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
                  {
                    "@type": "City",
                    name: "Doha",
                  },
                  {
                    "@type": "City",
                    name: "Al Wakrah",
                  },
                  {
                    "@type": "City",
                    name: "Al Rayyan",
                  },
                  {
                    "@type": "City",
                    name: "Al Khor",
                  },
                  {
                    "@type": "City",
                    name: "Lusail",
                  },
                  {
                    "@type": "City",
                    name: "The Pearl",
                  },
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
