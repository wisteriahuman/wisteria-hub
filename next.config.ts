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
                        value: "www.wisteria-io.com",
                    },
                ],
                destination: "https://wisteria-io.com/:path*",
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/sitemap.xml",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/xml",
                    },
                    {
                        key: "Cache-Control",
                        value: "public, max-age=86400, immutable",
                    },
                ],
            },
            {
                source: "/sitemap-0.xml",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/xml",
                    },
                    {
                        key: "Cache-Control",
                        value: "public, max-age=86400, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
