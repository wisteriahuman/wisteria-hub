"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppIcon from "@mui/icons-material/Apps";
import { useRouter } from "next/navigation";

export default function CardToProjects() {
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
            <AppIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />
            </Box>
            <CardContent>
                <Typography gutterBottom sx={{ color: "secondary.light", fontSize: 14 }}>
                    個人開発
                </Typography>
                <Typography variant="h5" component="div">
                    私が手がけた便利なアプリたち
                </Typography>
                <Typography sx={{ color: "secondary.light", mb: 1.5 }}>
                    独自 | シンプル | 実用的
                </Typography>
                <Typography variant="body2">
                    すべて私が個人で開発したアプリケーションです。
                    <br />
                    日常をちょっと便利にするツールをぜひお試しください。
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
                    onClick={() => router.push("/projects")}
                >
                    詳細を見る
                </Button>
            </CardActions>
        </Card>
    );
}