import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import OutLine from "@/components/about/outLine/OutLine";
import UseTechs from "@/components/about/useTechs/UseTechs";
import Admininfo from "@/components/about/adminInfo/AdminInfo";

export const metadata = {
    title: "About | WisteriaHub",
    description: "WisteriaHub についてのページです。最新のプロジェクトやプロフィール情報をご覧いただけます。",
}

export default function About() {
    return (
        <>
            <Box sx={{ padding: 4, color: "#ffcdff"}}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        flexGrow: 1,
                        padding: 2,
                        backgroundColor: "#2d1e36",
                        border: "2px solid #cc00cc",
                        borderRadius: 2,
                        textAlign: "center",
                        width: "fit-content",
                        height: "fit-content",
                        margin: "auto",
                    }}
                >
                    WisteriaHubについて
                </Typography>
                <Grid2
                    container
                    spacing={2}
                    sx={{
                        xs: 12,
                        md: 6,
                        sm: 6,
                        flexGrow: 1,
                        padding: 2,
                        backgroundColor: "#2d1e36",
                        border: "2px solid #cc00cc",
                        borderRadius: 2,
                        marginTop: 2,
                    }}
                >
                    <OutLine />
                    <UseTechs />
                    <Admininfo />
                </Grid2>
            </Box>
        </>
    );
}