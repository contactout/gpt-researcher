/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
    ],
  },
};

export default nextConfig;
