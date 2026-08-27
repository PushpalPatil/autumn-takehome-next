import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — the page needs no server, and static files on a CDN
  // keep it as fast as the brief demands.
  output: "export",
};

export default nextConfig;
