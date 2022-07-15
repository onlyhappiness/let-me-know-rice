import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const RecommendOverview = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#F0F2F2",
          p: 0,
        }}
      >
        <Box pt={2} pl={4} pb={2}>
          <Typography>추천 음식점</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Card
              sx={{
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                sx={{ width: 200 }}
                image={`https://i.pinimg.com/736x/f8/a7/01/f8a70144eb881afe78df0164e657e966.jpg`}
                alt={`https://i.pinimg.com/736x/f8/a7/01/f8a70144eb881afe78df0164e657e966.jpg`}
              />
              <Box>
                <CardHeader title="음식점 이름" subheader="위치" />
                <CardContent>설명</CardContent>
              </Box>
            </Card>
          </Grid>
          {/* FIXME: 고칠 것 */}
          <Grid item xs={12}>
            <Card
              sx={{
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                sx={{ width: 200 }}
                image={`https://i.pinimg.com/564x/35/76/ad/3576ade6efeb27662bc7e58ae168d7ef.jpg`}
                alt={`https://i.pinimg.com/564x/35/76/ad/3576ade6efeb27662bc7e58ae168d7ef.jpg`}
              />
              <Box>
                <CardHeader title="음식점 이름" subheader="위치" />
                <CardContent>설명</CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default RecommendOverview;
