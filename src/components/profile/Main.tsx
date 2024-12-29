import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Main() {

    return (
        <Box sx={{ padding: 4 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid sx={{ xs: 12, sm: 8 }}>
                    <Box sx={{ position: "relative", width: 140, height: 140 }}>
                        <Image
                            src="/images/my_image.png"
                            alt="プロフィール画像"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "50%" }}
                        />
                    </Box>
                </Grid>
                <Grid sx={{ xs: 12, sm: 8 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        wisteria
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2 }}>
                        <Button variant="outlined">X</Button>
                        <Button variant="outlined">GitHub</Button>
                        <Button variant="outlined">AtCoder</Button>
                    </Box>
                    <Typography variant="body1" component="p">
                        こんにちは！wisteriaです。
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        技術スタック
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2 }}>
                        <Button variant="outlined">React</Button>
                        <Button variant="outlined">TypeScript</Button>
                        <Button variant="outlined">Next.js</Button>
                        {/* 他のスキル */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}