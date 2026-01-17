/** @type {import('next').NextConfig} */

// import NextBundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = NextBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });
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
  // reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    removeConsole : true,
  },
  compress: true,
};

// export default withBundleAnalyzer(nextConfig);
export default nextConfig;
