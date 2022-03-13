// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const test = require("@babel/core");
const dotenvLoad = require('dotenv-load');
const typescript = require('typescript');
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');

dotenvLoad();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["ipfs.io", "ik.imagekit.io", "localhost", "d19bos5qssbslz.cloudfront.net", "kigzag-video-thumbnail.s3.eu-north-1.amazonaws.com"],
    formats: ["image/webp"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([

  nextEnv({
    staticPrefix: 'NEXT_STATIC_',
    publicPrefix: 'NEXT_PUBLIC_',
  }),

  // another plugin with a configuration
  [typescript, {
    typescriptLoaderOptions: {
      transpileOnly: false,
    },
  }],

], nextConfig);