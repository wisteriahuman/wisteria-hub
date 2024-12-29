"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppIcon from "@mui/icons-material/Apps";

export default function CardToProjects() {
    return (
        <Card
            sx={{
                minWidth: 275,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
            }}
        >
            <AppIcon sx={{ height: 140, width: 140 }} />
            <CardContent>
                <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                    個人開発
                </Typography>
                <Typography variant="h5" component="div">
                    私が手がけた便利なアプリたち
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    独自 | シンプル | 実用的
                </Typography>
                <Typography variant="body2">
                    すべて私が個人で開発したアプリケーションです。
                    <br />
                    日常をちょっと便利にするツールをぜひお試しください。
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">詳細を見る</Button>
            </CardActions>
        </Card>
    );
}