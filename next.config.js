/** @type {import('next').NextConfig} */

// Import dotenv package
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = {
  ...nextConfig, // Merge the configurations from nextConfig
  webpack: (config) => {
    // Existing webpack configuration for handling PDF files

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
