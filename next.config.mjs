const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Optionally, add any other Next.js config below
    transpilePackages: ["next-md-remote"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-280f09da048d460093e78e545200c0e6.r2.dev",
            },
        ],
    },
};

export default nextConfig;
