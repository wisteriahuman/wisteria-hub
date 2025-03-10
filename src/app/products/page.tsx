import * as React from "react";
import Typography from "@mui/material/Typography";
import CardToWisteriaBloom from "@/components/cards/products/CardToWisteriaBloom";
import AnimatedCard from "@/components/ani/AnimatedCard";

export const metadata = {
    title: "Products | WisteriaHub",
    description: "プロダクトページ | WisteriaHub",
}

export default function Projects() {
    return (
        <>
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    flexGrow: 1,
                    padding: 2,
                    color: "#ffcdff",
                    backgroundColor: "#2d1e36",
                    border: "2px solid #cc00cc",
                    borderRadius: 2,
                    textAlign: "center",
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                    marginTop: 2,
                }}
            >
                わたしが手がけたアプリたち
            </Typography>
            <Typography
                variant="h6"
                component="p"
                sx={{
                    textAlign: "center",
                    color: "#ffcdff",
                    marginTop: 2,
                }}
            >
                <AnimatedCard delay={0}>
                    <CardToWisteriaBloom />
                </AnimatedCard>
            </Typography>
        </>
    );
}