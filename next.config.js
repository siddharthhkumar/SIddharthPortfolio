/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Optimisation is on. It was previously disabled, which meant every
    // <Image> served the original camera file — about 1.5 MB of photographs
    // for anyone who scrolled to the growth section. There is no static
    // export here, so the optimiser is available.
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
