"use client";

import * as React from "react";
import CardTemplate from "./template";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/navigation";

export default function CardToAbout() {
    const router = useRouter();

    return (
        <CardTemplate
            icon={<InfoIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />}
            title="サイトの全体像と背景"
            subtitle="このサイトについて"
            tags={["サイト概要", "運営者情報", "技術情報"]}
            description={
                <>
                    このサイトの目的、運営者の情報、使用技術などをまとめたページです。
                    <br />
                    「なぜこのサイトを作ったのか」「どんな技術が使われているのか」に興味がある方はぜひご覧ください！
                </>
            }
            buttonText="詳細を見る"
            onClick={() => router.push("/about")}
        />
    );
}