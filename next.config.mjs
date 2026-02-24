/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "iili.io",
      },
      {
        protocol: "https",
        hostname: "freeimage.host",
      },
    ],
    unoptimized: true,
  },
  // Supprimer output: export pour le développement
  // Garder uniquement pour le build de production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  } : {}),
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
