"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Grid2 from "@mui/material/Grid2";
import AnimatedCard from "@/components/ani/AnimatedCard";
import CardToProfile from "@/components/cards/CardToProfile";
import CardToProducts from "@/components/cards/CardToProducts";
import CardToArchive from "@/components/cards/CardToArchive";
import CardToAbout from "@/components/cards/CardToAbout";

interface SearchResults {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
    type: "products" | "profile" | "archive" | "about";
}

export default function SearchPage() {
    const [results, setResults] = React.useState<SearchResults[]>([]);
    const searchParams = useSearchParams();
    const q = searchParams.get("q")?.toLowerCase() || "";

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
                if (!res.ok) {
                    console.error("APIエラー:", res.statusText);
                    return;
                }
                const data = await res.json();
                setResults(data.results || []);
            } catch (error) {
                console.error("フェッチエラー:", error);
            }
        };
        if (q.trim() != "") {
            fetchData();
        } else {
            setResults([]);
        }
    }, [q]);

    const renderCard = (item: SearchResults, index: number) => {

        const commonProps = {
            title: item.title,
            subtitle: item.subtitle,
            tags: item.tags,
            description: item.description,
        };

        switch (item.type) {
            case "products":
                return <AnimatedCard><CardToProducts key={index} {...commonProps} /></AnimatedCard>;
            case "profile":
                return <AnimatedCard><CardToProfile key={index} {...commonProps} /></AnimatedCard>;
            case "archive":
                return <AnimatedCard><CardToArchive key={index} {...commonProps} /></AnimatedCard>;
            case "about":
                return <AnimatedCard><CardToAbout key={index} {...commonProps} /></AnimatedCard>;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>検索結果</h1>
            {results.length > 0 ? (
                <Grid2 container spacing={2} sx={{ padding: 2 }}>
                    {results.map((item, index) => (
                        <Grid2 sx={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            {renderCard(item, index)}
                        </Grid2>
                    ))}
                </Grid2>
            ): (
                <p>ページが見つかりませんでした。</p>
            )}
        </div>
    );
}