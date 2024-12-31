import * as React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

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
        date: "2024-05-04",
        title: "AtCoder Beginner Contest 352参加",
        description: "Ratedにしてたのに寝落ちして0完",
        label: "競プロ",
    },
    {
        date: "2024-05-11",
        title: "AtCoder Beginner Contest 353参加",
        description: "はじめてB問題を解けた",
        label: "競プロ",
    },
    {
        date: "2024-05-25",
        title: "AtCoder Beginner Contest 355参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-06-01",
        title: "AtCoder Beginner Contest 356参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-06-15",
        title: "AtCoder Beginner Contest 358参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-06-24",
        title: "ブロック崩しゲーム発表会",
        description: "「Zodiac」を発表。みんなすごかった",
        label: "発表",
    },
    {
        date: "2024-06-30",
        title: "AtCoder Beginner Contest 360参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-07-06",
        title: "AtCoder Beginner Contest 361参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-07-13",
        title: "AtCoder Beginner Contest 362参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-07-20",
        title: "AtCoder Beginner Contest 363参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-08-02",
        title: "オリジナルアプリ発表会",
        description: "「Counting Stars」を発表。みんなすごかった",
        label: "発表",
    },
    {
        date: "2024-08-03",
        title: "AtCoder Beginner Contest 365参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-08-10",
        title: "AtCoder Beginner Contest 366参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-08-24",
        title: "AtCoder Beginner Contest 368参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-09-07",
        title: "AtCoder Beginner Contest 370参加",
        description: "はじめて3完した",
        label: "競プロ",
    },
    {
        date: "2024-09-14",
        title: "AtCoder Beginner Contest 371参加",
        description: "はじめてD問題を解けた",
        label: "競プロ",
    },
    {
        date: "2024-09-21",
        title: "AtCoder Beginner Contest 372参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-09-28",
        title: "AtCoder Beginner Contest 373参加",
        description: "はじめて4完した",
        label: "競プロ",
    },
    {
        date: "2024-10-05",
        title: "AtCoder Beginner Contest 374参加",
        description: "AtCoder茶色になった",
        label: "競プロ",
    },
    {
        date: "2024-10-12",
        title: "AtCoder Beginner Contest 375参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-10-18",
        title: "ハッカソンFISHに参加",
        description: "ハッカソン初参加",
        label: "ハッカソン",
    },
    {
        date: "2024-10-20",
        title: "ハッカソンFISHが終了",
        description: "最優秀賞！！先輩ってスゲー",
        label: "ハッカソン",
    },
    {
        date: "2024-10-26",
        title: "AtCoder Beginner Contest 377参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-11-02",
        title: "AtCoder Beginner Contest 378参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-11-09",
        title: "AtCoder Beginner Contest 379参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-11-16",
        title: "AtCoder Beginner Contest 380参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-11-23",
        title: "AtCoder Beginner Contest 381参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-11-30",
        title: "AtCoder Beginner Contest 382参加",
        description: "",
        label: "競プロ",
    },
    {
        date: "2024-12-07",
        title: "ハッカソンP2HACKSに参加",
        description: "お題は「フラッシュ」",
        label: "ハッカソン",
    },
    {
        date: "2024-12-15",
        title: "ハッカソンP2HACKSが終了",
        description: "CyberAgent賞！！",
        label: "ハッカソン",
    },
    {
        date: "2024-12-21",
        title: "AtCoder Beginner Contest 385参加",
        description: "",
        label: "競プロ",
    },
];

const label_colors: Record<string, string> = {
    "デフォルト": "#ffcdff",
    "競プロ": "#00cc00",
    "ハッカソン": "#0000cc",
    "発表": "#cc0000",
};

export default function Records() {
    return (
        <List>
            {activities.map((activity, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CircleIcon style={{ color: label_colors[activity.label] || "#ffcdff" }} />
                    </ListItemIcon>
                    <Card
                        sx={{
                            minWidth: 275,
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
                            <Typography variant="h6" sx={{ borderBottom: "2px solid #ffcdff" }}>{activity.date}</Typography>
                            <Typography variant="subtitle1">{activity.title}</Typography>
                            <Typography variant="body2" sx={{ marginTop: 1 }}>{activity.description}</Typography>
                        </CardContent>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
}