// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Esto ayuda con Turbopack + next-intl en Next 16
  turbopack: {},
};

export default withNextIntl(nextConfig);
