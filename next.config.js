/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" }, // Spotify Album Art
      { hostname: "pbs.twimg.com" }, // Twitter Profile Picture
      { hostname: "api.microlink.io" }, // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;
