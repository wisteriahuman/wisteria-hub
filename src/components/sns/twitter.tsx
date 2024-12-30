"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function Twitter() {
    return (
        <Button
            variant="contained"
            sx={{
                color: "#ffffff",
                backgroundColor: "#000000",
                border: "1px solid #ffffff",
                borderRadius: "12px",
            }}
        >
            <Image
            src="/images/x.png"
            alt="X"
            width={24}
            height={24}
            style={{ marginRight: "8px" }}
            />
            @wisteria_man
        </Button>
    );
}