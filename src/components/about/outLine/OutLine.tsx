import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";


export default function OutLine() {
    return (
        <>
            <Grid2
                sx={{
                    flexGrow: 1,
                    padding: 2,
                    backgroundColor: "#3e0866",
                    borderRadius: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        borderBottom: "2px solid #ffccff",
                    }}
                >
                    WisteriaHub概要
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    gutterBottom
                    sx={{
                        borderBottom: "2px solid #ffccff",
                        paddingBottom: "8px",
                        lineHeight: "30px",
                    }}
                >
                    WisteriaHubは、わたしの活動やプロダクトをまとめた総合サイトです。
                    <br />
                    ここでは、わたしがこれまでに開発したプロダクトや、競技プログラミングの成績、プロフィール情報などを公開しています。
                    <br />
                    WisteriaHubは、わたしの活動を記録し、公開することで、わたしの成長を促進し、他の人にもわたしの活動を知ってもらうことを目的としています。
                    <br />
                </Typography>
            </Grid2>
        </>
    );
}