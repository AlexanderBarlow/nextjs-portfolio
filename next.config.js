/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true
});

const nextConfig = withPWA({
  reactStrictMode: true
});

module.exports = {
  ...nextConfig, // Merge the configurations from nextConfig
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/", // Output folder for PDF files
            publicPath: "_next/static/", // Path for serving PDF files
          },
        },
      ],
    });

    return config;
  },
};
