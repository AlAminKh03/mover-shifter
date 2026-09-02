import { SITE } from "@/config/site";
import { MetadataRoute } from "next";
import { i18nConfig } from "@/i18n.config";
import { ALL_VIDEOS } from "@/config/videos";

import { posts } from "./blog/posts";

export const dynamic = "force-static";

const routes: { path: string; priority: number; changeFrequency: "yearly" | "monthly" | "weekly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.7, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

function parseDuration(iso8601: string): number {
  const match = iso8601.match(/PT(\d+)M(\d+)S/);
  if (!match) return 0;
  return parseInt(match[1]) * 60 + parseInt(match[2]);
}

// Every video (see config/videos) renders on the homepage via
// MovingPackingVideo + WorkVideos — attached only to the "" route below.
const homepageVideos = ALL_VIDEOS.map((video) => ({
  title: video.title,
  description: video.description,
  thumbnail_loc: `${SITE.url}${video.poster}`,
  content_loc: `${SITE.url}${video.src}`,
  duration: parseDuration(video.duration),
  publication_date: new Date(video.uploadDate),
  family_friendly: "yes" as const,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.flatMap((r) =>
    i18nConfig.locales.map((locale) => ({
      url: `${SITE.url}/${locale}${r.path}/`,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: Object.fromEntries(
          i18nConfig.locales.map((l) => [l, `${SITE.url}/${l}${r.path}/`]),
        ),
      },
      ...(r.path === "" ? { videos: homepageVideos } : {}),
    })),
  );

  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((p) =>
    i18nConfig.locales.map((locale) => ({
      url: `${SITE.url}/${locale}/blog/${p.slug}/`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          i18nConfig.locales.map((l) => [l, `${SITE.url}/${l}/blog/${p.slug}/`]),
        ),
      },
    })),
  );

  return [...staticEntries, ...blogEntries];
}
