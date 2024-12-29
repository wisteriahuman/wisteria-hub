"use client";

import * as React from "react";
import CardTemplate from "./template";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardToProfile() {
    const router = useRouter();

    return (
        <CardTemplate
            icon={
                <Image
                    src="/images/my_image.png"
                    alt="プロフィール画像"
                    width={140}
                    height={140}
                />
            }
            title="プロフィール"
            subtitle="好きなこととスキルを紹介"
            tags={["趣味", "技術スタック"]}
            description={
                <>
                    私の好きなことや趣味、使用している技術スタックをまとめたサイトです。
                    <br />
                    コーディングから趣味の話まで、私の興味や情熱をご覧ください！
                </>
            }
            buttonText="詳細を見る"
            onClick={() => router.push("/profile")}
        />
    );
}