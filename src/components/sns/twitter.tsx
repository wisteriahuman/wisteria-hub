import * as React from "react";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Twitter() {
    return (
        <Button
            variant="contained"
            href="https://x.com/wisteria_man"
            target="_blank"
            rel="noopener"
            sx={{
                color: "#ffffff",
                backgroundColor: "#1da1f2",
                border: "none",
                borderRadius: "25px",
                paddingX: 3,
                paddingY: 1,
                textTransform: "none",
                boxShadow: "background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                    backgroundColor: "#0d95e8",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                },
            }}
            aria-label="Twitterプロフィールへ移動"
        >
            <TwitterIcon
                sx={{ color: "#ffffff", marginRight: "8px" }}
            />
            @wisteria_man
        </Button>
    );
}