import { Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import React from 'react';

import { foodCategory } from '../../../data/foodCategory';

const MenuCategory = () => {
  return (
    <>
      <Grid container spacing={0}>
        {foodCategory.map((data, i) => {
          return (
            <Grid item xs={6} md={4} key={data.id}>
              <Card>
                <CardHeader title={data.category} />
                <CardMedia
                  component='img'
                  height='300'
                  image={data.img}
                  alt={data.img}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MenuCategory;
