/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

 
module.exports = withPWA({
  // here goes your Next.js configuration
});
 
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV ===      'development',
  skipWaiting: true
})
 
module.exports = nextConfig;



