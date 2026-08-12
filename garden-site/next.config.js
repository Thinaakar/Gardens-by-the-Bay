/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow placeholder images from picsum / unsplash-style CDNs during scaffolding
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
