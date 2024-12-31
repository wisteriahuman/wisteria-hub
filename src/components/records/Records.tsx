import * as React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { Card, CardContent, Typography } from "@mui/material"

const activities = [
    {
        date: "2024-04-05",
        title: "公立はこだて未来大学入学",
        description: "プログラミングを始めた",
        label: "デフォルト",
    },
    {
        date: "2024-04-27",
        title: "AtCoder Beginner Contest 351参加",
        description: "はじめてのAtCoderコンテスト",
        label: "競プロ",
    },
    {
        date: "2024-10-06",
        title: "AtCoder茶色になる",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-10-20",
        title: "ハッカソンFISHに参加",
        description: "",
        label: "ハッカソン",
    },
    {
        date: "2024-12-7",
        title: "ハッカソンP2HACKSに参加",
        description: "",
        label: "ハッカソン",
    },
] as const;

type Label = typeof activities[number]["label"];

const label_colors: Record<Label, string> = {
    "デフォルト": "#ffcdff",
    "競プロ": "#00cc00",
    "ハッカソン": "#0000cc",
}

export default function Records() {
    return (
        <Timeline position="right" sx={{ padding: 2 }}>
            {activities.map((activity, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        {activity.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: label_colors[activity.label] }} />
                        {index < activities.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card
                            sx={{
                                transition: "transform 0.2s",
                                "&:hover": { transform: "scale(1.05)" },
                                backgroundColor: "#2d1e36",
                                color: "#ffcdff",
                                border: "2px solid #cc00cc",
                                borderRadius: "8px",
                                width: "fit-content",
                                height: "fit-content",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {activity.title}
                                </Typography>
                                <Typography variant="body2" color="#ffcdff" sx={{ marginTop: 1 }}>
                                    {activity.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}