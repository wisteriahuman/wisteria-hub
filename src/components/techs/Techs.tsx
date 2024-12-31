"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import ListBox from "@/components/listBox/ListBox";



export default function Techs() {
    const [dense] = React.useState(false);
    const techs_lang = ["HTML", "CSS", "JavaScript", "TypeScript", "Python"];
    const techs_fw = ["React", "Next.js", "Flask"]

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid2 container spacing={2}>
                <Grid2 sx={{ xs: 12, md: 6 }}>
                    <ListBox title="言語" items={techs_lang} dense={dense} />
                </Grid2>
                <Grid2 sx={{ xs: 12, md: 6 }}>
                    <ListBox title="フレームワーク" items={techs_fw} dense={dense} />
                </Grid2>
            </Grid2>
            {/* <Grid2 container spacing={2}>
                <Grid2 sx={{ xs: 12, md: 6 }}>
                    <ListBox title="インフラ" items={["なし"]} dense={dense} />
                </Grid2>
            </Grid2> */}
        </Box>
    );
}