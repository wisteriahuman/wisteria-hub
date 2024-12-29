"use client";

import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";



export default function CardToAbout() {
    return (
        <Card
            sx={{
                minWidth: 275,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
            }}
        >
            <InfoIcon sx={{ height: 140, width: 140 }} />
            <CardContent>
                <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                    このサイトについて
                </Typography>
                <Typography variant="h5" component="div">
                    サイトの全体像と背景
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    サイト概要 | 運営者情報 | 技術情報
                </Typography>
                <Typography variant="body2">
                    このサイトの目的、運営者の情報、使用技術などをまとめたページです。
                    <br />
                    「なぜこのサイトを作ったのか」「どんな技術が使われているのか」に興味がある方はぜひご覧ください！
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">詳細を見る</Button>
            </CardActions>
        </Card>
    );
}