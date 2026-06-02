import { SITE } from "@/config/site";

/**
 * Standalone LocalBusiness schema. The primary structured data lives inline in
 * `app/layout.tsx`; this component mirrors it from `SITE` so any future use
 * stays consistent with the live brand identity.
 */
export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          image: `${SITE.url}/social.jpg`,
          description:
            "A Doha interiors studio in Qatar offering custom cabinets, kitchens, wardrobes, curtains, sofas & majlis, flooring, and furniture moving.",
          "@id": `${SITE.url}#business`,
          url: SITE.url,
          telephone: SITE.phoneE164,
          email: SITE.email,
          priceRange: "$$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.addressLine,
            addressLocality: SITE.city,
            addressRegion: SITE.country,
            addressCountry: "QA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.1654,
            longitude: 51.6047,
          },
          sameAs: (Object.values(SITE.socials) as string[]).filter(
            (u) => u.length > 0,
          ),
        }),
      }}
    />
  );
}

export function HomePageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: SITE.name,
          description: SITE.tagline,
          url: SITE.url,
          telephone: SITE.phoneE164,
          address: {
            "@type": "PostalAddress",
            addressCountry: SITE.country,
            addressLocality: SITE.city,
          },
          priceRange: "$$$$",
          openingHours: "Mo-Su 09:00-22:00",
        }),
      }}
    />
  );
}
