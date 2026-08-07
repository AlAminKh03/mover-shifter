import { SITE } from "@/config/site";
import type { SiteVideo } from "@/config/videos";

/**
 * VideoObject JSON-LD. Values come from `config/videos`, where every duration
 * and frame size is measured from the real file — Google fetches the video and
 * compares, so invented metadata costs the rich result.
 *
 * Pass the exact videos rendered on the page: schema describing a video the
 * visitor cannot see is a structured-data violation.
 */
export function VideoSchema({ videos }: { videos: SiteVideo[] }) {
  if (videos.length === 0) return null;

  const toObject = (video: SiteVideo) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    // Fall back to the social card only when a video has no still of its own —
    // better an approximate thumbnail than none, which drops the rich result.
    thumbnailUrl: `${SITE.url}${video.poster ?? "/social.jpg"}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    width: video.width,
    height: video.height,
    contentUrl: `${SITE.url}${video.src}`,
    isFamilyFriendly: true,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  });

  const schema =
    videos.length === 1
      ? { "@context": "https://schema.org", ...toObject(videos[0]) }
      : {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: videos.map((video, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: toObject(video),
          })),
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
