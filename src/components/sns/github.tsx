import * as React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GitHub() {
    return (
        <Button
            variant="contained"
            href="https://github.com/wisteriahuman"
            target="_blank"
            rel="noopener"
            sx={{
                color: "#ffffff",
                backgroundColor: "#24292e",
                border: "none",
                borderRadius: "25px",
                paddingX: 3,
                paddingY: 1,
                textTransform: "none",
                boxShadow: "0 4px 6px rgb(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                    backgroundColor: "#161b22",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                },
            }}
            aria-label="GitHubプロフィールへ移動"
        >
            <GitHubIcon
                sx={{ color: "#ffffff", marginRight: "8px" }}
            />
            wisteriahuman
        </Button>
    );
}