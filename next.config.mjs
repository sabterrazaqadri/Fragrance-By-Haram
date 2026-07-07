/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  // Permanently redirect the old Vercel domain to the canonical custom domain
  // so Google drops the .vercel.app URLs and consolidates all ranking signals
  // onto fragrancesbyharam.store. Preview deployments (different subdomains)
  // are unaffected.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'fragrances-by-haram.vercel.app' },
        ],
        destination: 'https://fragrancesbyharam.store/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
