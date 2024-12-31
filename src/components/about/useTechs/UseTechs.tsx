import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ListBox from "@/components/listBox/ListBox";


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
                    開発技術
                </Typography>
                <Grid2 container spacing={2}>
                    <Grid2
                        sx={{
                            padding: 2,
                            backgroundColor: "#2d1e36",
                            border: "2px solid #cc00cc",
                            borderRadius: 2,
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <ListBox
                            title="利用したプログラミング言語"
                            items={["TypeScript", "JavaScript"]}
                            dense={false}
                        />
                    </Grid2>
                    <Grid2
                        sx={{
                            padding: 2,
                            backgroundColor: "#2d1e36",
                            border: "2px solid #cc00cc",
                            borderRadius: 2,
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <ListBox
                            title="利用したフレームワーク・ライブラリ"
                            items={["Next.js", "React", "MUI (Material-UI)"]}
                            dense={false}
                        />
                    </Grid2>
                    <Grid2
                        sx={{
                            padding: 2,
                            backgroundColor: "#2d1e36",
                            border: "2px solid #cc00cc",
                            borderRadius: 2,
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <ListBox
                            title="その他開発に使用したツール・サービス"
                            items={["Vercel (デプロイ)", "GitHub (コード管理)"]}
                            dense={false}
                        />
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    );
}