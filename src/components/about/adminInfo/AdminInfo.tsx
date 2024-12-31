import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardToProfile from "@/components/cards/CardToProfile";


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
                    WisteriaHub運営者
                </Typography>
                <CardToProfile />
            </Grid2>
        </>
    );
}