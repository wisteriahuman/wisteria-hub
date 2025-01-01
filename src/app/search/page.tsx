"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface SearchResults {
    title: string;
    tags: string[];
}

export default function SearchPage() {
    const [results, setResults] = React.useState<SearchResults[]>([]);
    const searchParams = useSearchParams();
    const q = searchParams.get("q") || "";

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

    return (
        <div>
            <h1>検索結果</h1>
            {results.length > 0 ? (
                results.map((item, i) => (
                    <div key={i}>
                        <p>{item.title}</p>
                        <p>Tags: {item.tags.join(", ")}</p>
                    </div>
                ))
            ): (
                <p>ページが見つかりませんでした。</p>
            )}
        </div>
    );
}