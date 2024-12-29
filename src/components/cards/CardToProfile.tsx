"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";


export default function CardToProfile() {
    return (
        <Card
            sx={{
                winWidth: 275,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
            }}
        >
            <Image
                src="/images/my_image.jpg"
                alt="プロフィール画像"
                width={140}
                height={140}
            />
            <CardContent>
                <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                    プロフィール
                </Typography>
                <Typography variant="h5" component="div">
                    好きなこととスキルを紹介
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    趣味 | 技術スタック
                </Typography>
                <Typography variant="body2">
                    私の好きなことや趣味、使用している技術スタックをまとめたサイトです。
                    <br />
                    コーディングから趣味の○○まで、私の興味や情熱をご覧ください！
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">詳細を見る</Button>
            </CardActions>
        </Card>
    );
}