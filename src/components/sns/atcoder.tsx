import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function AtCoder() {
    return (
        <Button
            variant="contained"
            href="https://atcoder.jp/users/wisteriahuman"
            target="_blank"
            rel="noopener"
            sx={{
                color: "#2e3436",
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "25px",
                paddingX: 3,
                paddingY: 1,
                textTransform: "none",
                boxShadow: "0 4px 6px rgb(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                },
            }}
            aria-label="AtCoderプロフィールへ移動"
        >
            <Image
                src="/images/atcoder.png"
                alt="AtCoder"
                width={24}
                height={24}
                style={{ marginRight: "8px" }}
            />
            wisteriahuman
        </Button>
    );
}