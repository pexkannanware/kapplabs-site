/** @type {import('next').NextConfig} */

// Static export: `next build` writes plain files to out/, served by nginx in the
// container. Security headers live in nginx.static.conf, since exports can't set them.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
