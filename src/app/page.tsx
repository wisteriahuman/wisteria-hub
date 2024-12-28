import React from "react";
import Grid from "@mui/material/Grid2";
import CardToProjects from "@/components/cards/CardToProjects";
import CardToProfile from "@/components/cards/CardToProfile";
import CardToAbout from "@/components/cards/CardToAbout";
import CardToArchive from "@/components/cards/CardToArchive";

export const metadata = {
  title: "Home | wisteria.dev",
  description: "wisteria.devのホームページです。",
};

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <CardToProjects />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <CardToProfile />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <CardToAbout />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <CardToArchive />
        </Grid>
      </Grid>
    </>
  );
}
