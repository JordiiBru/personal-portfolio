/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: ['jordibru.cloud.s3.eu-west-1.amazonaws.com'],
      }
}

module.exports = nextConfig
