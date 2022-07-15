import { Card, CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import React from "react";

const ShopListOverview = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#F0F2F2",
          p: 0,
        }}
      >
        <Grid container>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://i.pinimg.com/736x/f8/a7/01/f8a70144eb881afe78df0164e657e966.jpg`}
                alt={`https://i.pinimg.com/736x/f8/a7/01/f8a70144eb881afe78df0164e657e966.jpg`}
              />
              <CardHeader title="음식점 이름" subheader="위치" />
              <CardContent>설명</CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://i.pinimg.com/564x/06/9d/e9/069de94b85a5711cb52a7b0a5595ac8e.jpg`}
                alt={`https://i.pinimg.com/564x/06/9d/e9/069de94b85a5711cb52a7b0a5595ac8e.jpg`}
              />
              <CardHeader title="음식점 이름" subheader="위치" />
              <CardContent>설명</CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://i.pinimg.com/564x/96/53/07/965307cdf375d720c095a75ceadc956e.jpg`}
                alt={`https://i.pinimg.com/564x/96/53/07/965307cdf375d720c095a75ceadc956e.jpg`}
              />
              <CardHeader title="음식점 이름" subheader="위치" />
              <CardContent>설명</CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
          음식점 리스트
        </Grid> */}
      </Card>
    </>
  );
};

export default ShopListOverview;
