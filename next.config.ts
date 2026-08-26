import type { NextConfig } from "next";

// React's dev mode (HMR, component-stack reconstruction) relies on eval();
// only relax the policy for that in non-production builds.
const scriptSrc = ["'self'", "'unsafe-inline'", "va.vercel-scripts.com"];
if (process.env.NODE_ENV !== "production") {
  scriptSrc.push("'unsafe-eval'");
}

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(" ")}`,
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "img-src 'self' data:",
  "font-src 'self' fonts.gstatic.com",
  "connect-src 'self' vitals.vercel-insights.com",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
