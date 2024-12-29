"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/navigation";

export default function CardToAbout() {
    const router = useRouter();

    return (
        <Card
            sx={{
                minWidth: 275,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
                backgroundColor: "#2d1e36",
                color: "#ffcdff",
                border: "2px solid #cc00cc",
                borderRadius: "8px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "secondary.light",
                    padding: "4px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "16px",
                    width: 140,
                    height: 140,
                }}
            >
                <InfoIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />
            </Box>
            <CardContent>
                <Typography gutterBottom sx={{ color: "secondary.light", fontSize: 14 }}>
                    このサイトについて
                </Typography>
                <Typography variant="h5" component="div">
                    サイトの全体像と背景
                </Typography>
                <Typography sx={{ color: "secondary.light", mb: 1.5 }}>
                    サイト概要 | 運営者情報 | 技術情報
                </Typography>
                <Typography variant="body2">
                    このサイトの目的、運営者の情報、使用技術などをまとめたページです。
                    <br />
                    「なぜこのサイトを作ったのか」「どんな技術が使われているのか」に興味がある方はぜひご覧ください！
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: "#66bb6a",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "16px",
                        "&:hover": {
                            backgroundColor: "#4caf50",
                        },
                    }}
                    onClick={() => router.push("/about")}
                >
                    詳細を見る
                </Button>
            </CardActions>
        </Card>
    );
}