"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ListBox from "@/components/listBox/ListBox";



export default function Techs() {
    const [dense] = React.useState(false);
    const techs_lang = ["HTML", "CSS", "JavaScript", "TypeScript", "Python"];
    const techs_fw = ["React", "Next.js", "Flask"]

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <Grid sx={{ xs: 12, md: 6 }}>
                    <ListBox title="言語" items={techs_lang} dense={dense} />
                </Grid>
                <Grid sx={{ xs: 12, md: 6 }}>
                    <ListBox title="フレームワーク" items={techs_fw} dense={dense} />
                </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
                <Grid sx={{ xs: 12, md: 6 }}>
                    <ListBox title="インフラ" items={["なし"]} dense={dense} />
                </Grid>
            </Grid> */}
        </Box>
    );
}