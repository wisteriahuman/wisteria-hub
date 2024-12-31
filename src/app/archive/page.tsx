import React from "react";
import { Typography } from "@mui/material";
import Records from "@/components/records/Records";

export const metadata = {
    title: "Archive | WisteriaHub",
    description: "活動記録 | WisteriaHub",
}

export default function Archive() {
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
                活動記録
            </Typography>
            <Records />
        </>
    );
}