import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const mockData = [
        {
            title: "Title 1",
            description: "Description 1",
            tags: ["tag1", "tag2"],
        },
        {
            title: "Title 2",
            description: "Description 2",
            tags: ["tag3", "tag4"],
        },
    ];
    const results = mockData.filter((item) =>
        item.title.includes(q) || item.tags.some((tag) => tag.includes(q))
    );
    return NextResponse.json({ results });
}