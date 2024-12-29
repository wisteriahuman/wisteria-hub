"use client";

import * as React from "react";
import CardTemplate from "./template";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useRouter } from "next/navigation";

export default function CardToArchive() {
    const router = useRouter();

    return (
        <CardTemplate
            icon={<ArchiveIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />}
            title="過去と現在を一目で"
            subtitle="アーカイブ"
            tags={["記録", "プロジェクト", "思い出"]}
            description={
                <>
                    これまでのプロジェクトや活動の記録をまとめたページです。
                    <br />
                    過去の挑戦や成果を振り返りながら、新しい発見をしてみませんか？
                </>
            }
            buttonText="詳細を見る"
            onClick={() => router.push("/archive")}
        />
    );
}