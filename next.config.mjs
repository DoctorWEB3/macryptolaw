/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/", destination: "/maimone-home.html" }];
  },
};

export default nextConfig;
