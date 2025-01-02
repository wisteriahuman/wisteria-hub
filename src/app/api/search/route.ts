import { NextResponse } from "next/server";

interface SearchItem {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
    type: "products" | "profile" | "about" | "archive";
}


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const mockData: SearchItem[] = [
        {
            title: "わたしが手がけたアプリたち",
            subtitle: "個人開発",
            tags: ["独自", "シンプル", "実用的"],
            description: "すべて私が個人で開発したアプリケーションです。日常をちょっと便利にするツールをぜひお試しください。",
            type: "products",
        },
        {
            title: "プロフィール",
            subtitle: "好きなこととスキルを紹介",
            tags: ["趣味", "技術スタック"],
            description: "私の好きなことや趣味、技術スタックなどをまとめたページです。コーディングから趣味の話まで、私の興味や情熱をご覧ください！",
            type: "profile",
        },
        {
            title: "過去と現在を一目で",
            subtitle: "アーカイブ",
            tags: ["記録", "プロジェクト", "思い出"],
            description: "これまでのプロジェクトや活動の記録をまとめたページです。過去の活動やプロジェクトをみたい方はこちらをご覧ください。",
            type: "archive",
        },
        {
            title: "サイトの全体像と背景",
            subtitle: "このサイトについて",
            tags: ["サイト概要", "運営者情報", "技術情報"],
            description: "このサイトの目的、運営者の情報、使用技術などをまとめたページです。このサイトの全体像や背景について知りたい方はこちらをご覧ください。",
            type: "about",
        },
        // add more items here
    ];
    const results = mockData.filter((item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
    return NextResponse.json({ results });
}