import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cajna-hisa',
  assetPrefix: '/cajna-hisa/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
