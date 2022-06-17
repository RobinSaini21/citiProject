/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    PLACES_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
  },

}

module.exports = nextConfig
