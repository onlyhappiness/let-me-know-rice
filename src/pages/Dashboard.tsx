import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OverviewCard from "../sections/@dashboard/OverviewCard";

export default () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title={"aaa"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title={"bbb"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title={"ccc"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title={"ddd"} />
        </Grid>
      </Grid>
    </Container>
  );
};
