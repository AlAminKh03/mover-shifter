/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Export every route as <route>/index.html so static hosts resolve clean URLs
  // (e.g. /blog/, /blog/kitchen-cabinets-qatar-guide/) via directory-index
  // lookup. Without this, routes export as flat .html files and many hosts 404
  // on direct navigation or refresh.
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
