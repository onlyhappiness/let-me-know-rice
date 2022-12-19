import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import OverviewCard from "../../sections/@dashboard/OverviewCard";

export default () => {
  return (
    <DefaultLayout>
      {/* <Container>
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
      </Container> */}
      <div>검색창</div>
      <div>배너</div>
      <div>오늘의 메뉴</div>

      <Box mt={3} sx={{ backgroundColor: "gray", width: "100%" }}>
        <Grid container>
          <Grid item xs={4}>
            a
          </Grid>
          <Grid item xs={4}>
            b
          </Grid>
          <Grid item xs={4}>
            c
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={6}>
            d
          </Grid>
          <Grid item xs={6}>
            e
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={12}>
            f
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={6}>
            g
          </Grid>

          <Grid item xs={6}>
            h
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};
