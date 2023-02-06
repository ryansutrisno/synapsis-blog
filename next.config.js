/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = {nextConfig, withBundleAnalyzer};
