import React from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import ListBox from "@/components/listBox/ListBox";


const HobbyInterests: React.FC = () => {
    return (
        <>
            <Typography variant="h4">趣味・関心など</Typography>
            <Grid2 container spacing={2}>
                <Grid2>
                    <ListBox
                        title="趣味"
                        items={["プログラミング", "読書", "シャワー"]}
                        dense={false}
                    />
                </Grid2>
                <Grid2>
                    <ListBox
                        title="好きなもの"
                        items={["猫", "水", "クラシック", "洋楽", "アニメ"]}
                        dense={false}
                    />
                </Grid2>
                <Grid2>
                    <ListBox
                        title="好きな季節"
                        items={["春", "夏", "秋", "冬"]}
                        dense={false}
                    />
                </Grid2>
            </Grid2>
        </>
    );
}

export default HobbyInterests;