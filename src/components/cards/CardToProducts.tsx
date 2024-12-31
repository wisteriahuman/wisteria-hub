"use client";

import * as React from "react";
import CardTemplate from "./template";
import AppIcon from "@mui/icons-material/Apps";
import { useRouter } from "next/navigation";

export default function CardToProjects() {
    const router = useRouter();

    return (
        <CardTemplate
            icon={<AppIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />}
            title="わたしが手がけたアプリたち"
            subtitle="個人開発"
            tags={["独自", "シンプル", "実用的"]}
            description={
                <>
                    すべて私が個人で開発したアプリケーションです。
                    <br />
                    日常をちょっと便利にするツールをぜひお試しください。
                </>
            }
            buttonText="詳細を見る"
            onClick={() => router.push("/products")}
        />
    );
}