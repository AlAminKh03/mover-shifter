import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/work",
          "/contact",
          "/quote",
          "/ar",
        ],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://qatarfurnituredecor.com/sitemap.xml",
  };
}
