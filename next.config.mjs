/** @type {import('next').NextConfig} */
const nextConfig = {
   /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "cdn.builder.io",
    //   },
    // ],
    // dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
};

export default nextConfig;
