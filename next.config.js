/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching =  require('next-pwa/cache.js');

 
module.exports = withPWA({
  // here goes your Next.js configuration
});
 
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV ===      'development',
  runtimeCaching,
  skipWaiting: true
})
 
module.exports = nextConfig;



