/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/googleaed096beea148fc0.html',
        destination: '/google-verification/googleaed096beea148fc0.html',
      },
    ];
  },
};
