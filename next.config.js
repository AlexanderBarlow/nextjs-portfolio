/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching =  require('next-pwa/cache.js');

 
const config = {
  // here goes your Next.js configuration
};
 
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV ===      'development',
  runtimeCaching,
  skipWaiting: true
})(
  config
);
 
module.exports = nextConfig;



