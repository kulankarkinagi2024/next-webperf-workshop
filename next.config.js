/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [1080, 1920, 2048, 3840],
    imageSizes: [256, 1024, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'restaurants-images-test.s3.amazonaws.com',
      },
    ],
  },
}
