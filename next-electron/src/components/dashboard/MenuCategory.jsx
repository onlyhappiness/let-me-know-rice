import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import React from 'react';

const MenuCategory = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={3} md={2}>
          <Card>
            <CardMedia
              component='img'
              height='80'
              image='https://cdn-icons-png.flaticon.com/512/3132/3132693.png'
              alt='Paella dish'
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              pizza
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={2}>
          <Card>
            <CardMedia
              component='img'
              height='80'
              image='https://cdn-icons-png.flaticon.com/512/3132/3132693.png'
              alt='Paella dish'
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              pizza
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={2}>
          <Card>
            <CardMedia
              component='img'
              height='80'
              image='https://cdn-icons-png.flaticon.com/512/3132/3132693.png'
              alt='Paella dish'
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              pizza
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={2}>
          <Card>
            <CardMedia
              component='img'
              height='80'
              image='https://cdn-icons-png.flaticon.com/512/3132/3132693.png'
              alt='Paella dish'
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              pizza
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuCategory;
