/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: ['myportfolio-jordi.s3.eu-west-1.amazonaws.com'],
      }
}

module.exports = nextConfig
