import { Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import React from 'react';

import { foodCategory } from '../../data/foodCategory';

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
                  height='250'
                  image={data.img}
                  alt={data.img}
                  sx={{
                    pl: '55px',
                    pt: '20px',
                  }}
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
