/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["vanras.humbeestudio.xyz", 
      // "rcadmin.humbeestudio.xyz" 
      "admin.royalcrownlaminates.com"],
  },
};
// module.exports = nextConfig;
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://vanras.humbeestudio.xyz/wp-json/wc/store/:path*",
//       },
//     ];
//   },
// };

export default nextConfig;
