/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa');

 

 
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV ===      'development',
  skipWaiting: true
})
 

module.exports = withPWA({
  // here goes your Next.js configuration
});


