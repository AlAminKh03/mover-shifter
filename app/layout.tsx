import { ContactButtons } from "@/components/ContactButtons";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/TopBar";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";

import { SITE } from "@/config/site";

import GoogleAnalytics from "./_components/GoogleAnalytics";
import "./globals.css";

const fontSans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Home & office moves in Doha, Qatar`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Qatar Moving & Shifting: surveyed relocations, disciplined packing, and clear timelines — plus optional furniture, curtains, and flooring when your next chapter needs more than transport.",
  keywords:
    "moving company Qatar, movers Doha, villa relocation Qatar, office shifting Doha, furniture movers Qatar, packing service Qatar, home moving Lusail, Pearl Qatar movers, shifting service Qatar, نقل عفش قطر, نقل اثاث الدوحة, furniture upholstery Qatar, curtains installation Qatar",
  category: "moving, relocation, logistics, Qatar business",
  verification: {
    google: "wuWIEoRpkPuTjhHF6OVoAPH5lxltE5qq5qeKfgC-7fs",
  },
  other: {
    "geo.region": "QA",
    "geo.placename": "Doha",
    "geo.position": "25.2854;51.5310",
    ICBM: "25.2854, 51.5310",
    "property:fb:app_id": "1234567890",
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-US": SITE.url,
      "ar-QA": `${SITE.url}/ar`,
    },
  },
  openGraph: {
    type: "website",
    title: `${SITE.name} | Moves & shifting in Qatar`,
    description:
      "Residential and office moves, packing, and safe transport — plus furniture making, upholstery, and decor services in Doha, Qatar.",
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "https://qatarfurnituredecor.com/social.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Qatar`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Movers in Qatar`,
    description:
      "Moving, packing, and shifting across Qatar — with full furniture and interior support when you need it.",
    images: ["/social.jpg"],
    creator: "@qatarfurniture",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontSans.className} flex min-h-screen flex-col bg-background`}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-934R2JYRD8" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <TopBar />
            <Navbar />
          </div>
          <main className="flex min-h-0 w-full flex-1 flex-col">
            {children}
          </main>
          <Footer />
          <SocialLinks />
          <ContactButtons />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MovingCompany", "LocalBusiness"],
              "@id": `${SITE.url}#business`,
              name: SITE.name,
              image: {
                "@type": "ImageObject",
                url: `${SITE.url}/social.jpg`,
                width: 1200,
                height: 630,
              },
              description:
                "Moving, packing, and shifting services in Qatar — home and office relocations with optional furniture making, upholstery, curtains, and installation.",
              url: SITE.url,
              telephone: "+97400000000",
              priceRange: "$$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Mansoura",
                addressLocality: "Doha",
                addressRegion: "Qatar",
                addressCountry: "QA",
                postalCode: "24242",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2692576,
                longitude: 51.5294645,
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
              sameAs: [
                "https://www.facebook.com/qatarfurnituredecor",
                "https://www.instagram.com/qatarfurnituredecor",
              ],
              hasMap:
                "https://www.google.com/maps/place/Al+Mansoura,+Doha,+Qatar/@25.2688726,51.5238892,1966m/",
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
                    name: "Home and villa moving",
                    description:
                      "Residential relocation, loading, transport, and placement in Qatar",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Office and commercial shifting",
                    description:
                      "Business moves with scheduling to minimise downtime",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Packing and furniture transport",
                    description:
                      "Careful packing, unpacking, and delivery of furniture and goods",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom furniture and upholstery",
                    description:
                      "Bespoke furniture, reupholstery, curtains, and installation",
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
