import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "wisteria-io.com",
                    },
                ],
                destination: "https://wisteria-io.com/:path*",
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
