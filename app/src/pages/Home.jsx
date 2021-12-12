import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Sidebar from '../components/Sidebar';
import Map from '../components/Map'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100vh',
  width: '100%'
}));

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={1} >
        <Grid item xs={3} >
          <Item><Sidebar /></Item>
        </Grid>
        <Grid item xs={9}>
          <Item><Map /></Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
