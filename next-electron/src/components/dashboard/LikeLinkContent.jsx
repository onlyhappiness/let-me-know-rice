import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const LikeLinkContent = () => {
  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component='img'
          sx={{ width: '40%', height: '100%' }}
          image='https://mblogthumb-phinf.pstatic.net/20160917_10/dobuck123_1474111115341nNC1g_JPEG/i2828768652.jpg?type=w800'
          alt='https://mblogthumb-phinf.pstatic.net/20160917_10/dobuck123_1474111115341nNC1g_JPEG/i2828768652.jpg?type=w800'
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',

            justifyContent: 'center',
            marginLeft: '3rem',
            borderRadius: '6px',
          }}
        >
          <Typography variant='h5'>Hello</Typography>
          <Button
            sx={{ width: '40%', backgroundColor: '#FBD786', color: '#fff' }}
          >
            추천하는 곳으로 이동
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default LikeLinkContent;
