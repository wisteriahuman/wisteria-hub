import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const metadata = {
    title: "Projects | WisteriaHub",
    description: "プロジェクトページ | WisteriaHub",
}

export default function Projects() {
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
                    私が手がけたアプリたち
                </Typography>
            </Box>
        </>
    );
}