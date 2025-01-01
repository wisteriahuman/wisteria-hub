import React from "react";
import Grid2 from "@mui/material/Grid2";
import CardToProjects from "@/components/cards/CardToProducts";
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
        <Grid2>
          <CardToProjects />
        </Grid2>
        <Grid2>
          <CardToProfile />
        </Grid2>
        <Grid2>
          <CardToAbout />
        </Grid2>
        <Grid2>
          <CardToArchive />
        </Grid2>
      </Grid2>
    </>
  );
}
