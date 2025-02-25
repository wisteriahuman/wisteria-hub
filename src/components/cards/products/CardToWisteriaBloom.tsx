"use client";

import * as React from "react";
import CardTemplate from "@/components/cards/template";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardToAbout() {
    const router = useRouter();

    return (
        <CardTemplate
            icon={<Image src="/images/wisteria_bloom.svg" alt="Wisteria Bloom" width={125} height={90} />}
            title="Wisteria Bloom"
            subtitle="学習プラットフォーム"
            tags={["学習", "精進", "成長"]}
            description={
                <>
                    Wisteria Bloomは、学習や精進をテーマにしたプラットフォームです。
                    <br />
                    このサイトでは、学習や成長に関する情報を提供しています。
                </>
            }
            buttonText="詳細を見る"
            onClick={() => router.push("https://wisteria-bloom.vercel.app/")}
        />
    );
}