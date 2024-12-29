"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArchiveIcon from "@mui/icons-material/Archive";


export default function CardToArchive() {
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
                <ArchiveIcon sx={{ height: 140, width: 140, color: "#ffcdff" }} />
            </Box>
            <CardContent>
                <Typography gutterBottom sx={{ color: "secondary.light", fontSize: 14 }}>
                    アーカイブ
                </Typography>
                <Typography variant="h5" component="div">
                    過去と現在を一目で
                </Typography>
                <Typography sx={{ color: "secondary.light", mb: 1.5 }}>
                    記録 | プロジェクト | 思い出
                </Typography>
                <Typography variant="body2">
                    これまでのプロジェクトや活動の記録をまとめたページです。
                    <br />
                    過去の挑戦や成果を振り返りながら、新しい発見をしてみませんか？
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
                >
                    詳細を見る
                </Button>
            </CardActions>
        </Card>
    );
}