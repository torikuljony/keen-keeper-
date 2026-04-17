/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental 
  allowedDevOrigins: ['192.168.56.1'], 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
};

export default nextConfig;