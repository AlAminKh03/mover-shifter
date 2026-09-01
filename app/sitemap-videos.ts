import { SITE } from "@/config/site";
import { MetadataRoute } from "next";
import { WORK_VIDEOS, PACKING_VIDEO } from "@/config/videos";

export const dynamic = "force-static";

function parseDuration(iso8601: string): number {
  const match = iso8601.match(/PT(\d+)M(\d+)S/);
  if (!match) return 0;
  return parseInt(match[1]) * 60 + parseInt(match[2]);
}

export default function videoSitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/work/`,
      videos: WORK_VIDEOS.map((video) => ({
        title: video.title,
        description: video.description,
        thumbnailUrl: `${SITE.url}${video.poster}`,
        contentUrl: `${SITE.url}${video.src}`,
        duration: parseDuration(video.duration),
        uploadDate: new Date(video.uploadDate),
        familyFriendly: true,
      })),
    },
    {
      url: `${SITE.url}/quote/`,
      videos: [
        {
          title: PACKING_VIDEO.title,
          description: PACKING_VIDEO.description,
          thumbnailUrl: `${SITE.url}${PACKING_VIDEO.poster}`,
          contentUrl: `${SITE.url}${PACKING_VIDEO.src}`,
          duration: parseDuration(PACKING_VIDEO.duration),
          uploadDate: new Date(PACKING_VIDEO.uploadDate),
          familyFriendly: true,
        },
      ],
    },
  ];
}
