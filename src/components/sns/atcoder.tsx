import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function AtCoder() {
    return (
        <Button
            variant="contained"
            href="https://atcoder.jp/users/wisteriahuman"
            sx={{
                color: "#000000",
                backgroundColor: "#ffffff",
                border: "1px solid #000000",
                borderRadius: "12px",
            }}
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