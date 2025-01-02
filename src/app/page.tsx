import React from "react";
import Grid2 from "@mui/material/Grid2";
import AnimatedCard from "@/components/ani/AnimatedCard";
import CardToProducts from "@/components/cards/CardToProducts";
import CardToProfile from "@/components/cards/CardToProfile";
import CardToAbout from "@/components/cards/CardToAbout";
import CardToArchive from "@/components/cards/CardToArchive";


export const metadata = {
  title: "Home | WisteriaHub",
  description: "WisteriaHubのホームページです。",
};

export default function Home() {

  return (
    <>
      <Grid2 container spacing={2} sx={{ padding: 2 }}>
        <AnimatedCard delay={0}>
          <CardToProducts />
        </AnimatedCard>
        <AnimatedCard delay={200}>
          <CardToProfile />
        </AnimatedCard>
        <AnimatedCard delay={400}>
          <CardToAbout />
        </AnimatedCard>
        <AnimatedCard delay={600}>
          <CardToArchive />
        </AnimatedCard>
      </Grid2>
    </>
  );
}
