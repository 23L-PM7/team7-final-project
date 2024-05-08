/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_DB_SECRET: process.env.MONGO_DB_SECRET,
  },
};

export default nextConfig;
