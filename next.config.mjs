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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dohainteriors.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
      },
    ],
  },
};

export default nextConfig;
