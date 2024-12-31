import * as React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";


const activities = [
    {
        data: "2024-04-05",
        content: "公立はこだて未来大学入学",
        label: "デフォルト",
    },
    {
        data: "2024-04-27",
        content: "AtCoder Beginner Contest 初参加",
        label: "競プロ",
    },
    {
        data: "2024-10-06",
        content: "AtCoder茶色になる",
        label: "競プロ",
    },
] as const;

type Label = typeof activities[number]["label"];

const label_colors: Record<Label, string> = {
    "デフォルト": "#ffcdff",
    "競プロ": "#00cc00",
}


export default function Records() {
    return (
        <Timeline position="alternate">
            {activities.map((activity, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent
                        sx={{ flex: 0.2 }}
                    >
                        {activity.data}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{ backgroundColor: label_colors[activity.label] }}
                        />
                        {index < activities.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        {activity.content}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}