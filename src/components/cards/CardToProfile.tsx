"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function CardToProfile() {
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
                <Image
                    src="/images/my_image.png"
                    alt="プロフィール画像"
                    width={140}
                    height={140}
                    
                />
            </Box>
            <CardContent>
                <Typography gutterBottom sx={{ color: "secondary.light", fontSize: 14 }}>
                    プロフィール
                </Typography>
                <Typography variant="h5" component="div">
                    好きなこととスキルを紹介
                </Typography>
                <Typography sx={{ color: "secondary.light", mb: 1.5 }}>
                    趣味 | 技術スタック
                </Typography>
                <Typography variant="body2">
                    私の好きなことや趣味、使用している技術スタックをまとめたサイトです。
                    <br />
                    コーディングから趣味の○○まで、私の興味や情熱をご覧ください！
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
                    onClick={() => router.push("/profile")}
                >
                    詳細を見る
                </Button>
            </CardActions>
        </Card>
    );
}