import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/libraries/next-intl/request.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
