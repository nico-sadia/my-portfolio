import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-280f09da048d460093e78e545200c0e6.r2.dev",
            },
        ],
    },
    pageExtensions: ["js", "jsx", "ts", "tsx"],
};

// Merge MDX config with Next.js config
export default nextConfig;
