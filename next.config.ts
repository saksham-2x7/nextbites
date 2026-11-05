import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo-name>; only apply it in CI builds.
const basePath = process.env.GITHUB_ACTIONS ? "/nextbites" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
