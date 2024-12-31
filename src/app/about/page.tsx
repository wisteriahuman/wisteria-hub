import React from "react";
import Typography from "@mui/material/Typography";
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
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    flexGrow: 1,
                    padding: 2,
                    color: "#ffcdff",
                    backgroundColor: "#2d1e36",
                    border: "2px solid #cc00cc",
                    borderRadius: 2,
                    textAlign: "center",
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                    marginTop: 2,
                }}
            >
                WisteriaHubについて
            </Typography>
            <Grid2
                container
                spacing={4}
                size={{
                    xs: 12,
                    sm: 6,
                    md: 6,
                }}
                sx={{
                    flexGrow: 1,
                    padding: 2,
                    color: "#ffcdff",
                    backgroundColor: "#2d1e36",
                    border: "2px solid #cc00cc",
                    borderRadius: 2,
                    marginTop: 2,
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                <OutLine />
                <UseTechs />
                <Admininfo />
            </Grid2>
        </>
    );
}