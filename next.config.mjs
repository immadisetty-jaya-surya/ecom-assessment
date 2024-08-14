/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], // Add the allowed domain here
  },
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'https://mock.shop/products',
      },
    ];
  },
};

export default nextConfig;
