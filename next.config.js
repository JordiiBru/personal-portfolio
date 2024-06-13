/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['my-images.jordibru.cloud'],
  },
  
};

module.exports = nextConfig;
