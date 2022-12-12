import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import OverviewCard from "../sections/@dashboard/OverviewCard";

export default () => {
  return (
    <DefaultLayout>
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

        <Box mt={3}>오늘의 메뉴</Box>

        <Box mt={3}>footer?</Box>
      </Container>
    </DefaultLayout>
  );
};
