/** @type {import('next').NextConfig} */
module.exports = {
  // Build to plain static files in out/, served by nginx.
  // Security headers live in deploy/nginx/static-portfolio.conf, since a
  // static export has no Next.js server to send them.
  output: "export",
  reactStrictMode: true,
};
