/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server-side rendering enabled for bilingual i18n middleware support
  // and dynamic language detection. Static export is incompatible with
  // middleware-based language routing.
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Only two remote hosts are still reachable from the app: Unsplash for blog
    // article headers (editorial illustration, not presented as our work) and
    // placehold.co for OptimizedImage's load-failure fallback. Every marketing
    // surface now serves first-party photography from /public/work — see
    // config/work-photos. Don't re-add hosts without a matching usage.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
