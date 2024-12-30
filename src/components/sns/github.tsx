import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function GitHub() {
    return (
        <Button
            variant="contained"
            href="https://github.com/wisteriahuman"
            sx={{
                color: "#ffffff",
                backgroundColor: "#000000",
                border: "1px solid #ffffff",
                borderRadius: "12px",
            }}
        >
            <Image
                src="/images/github.png"
                alt="GitHub"
                width={24}
                height={24}
                style={{ marginRight: "8px" }}
            />
            wisteriahuman
        </Button>
    );
}