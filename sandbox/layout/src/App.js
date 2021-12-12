import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar';
import Map from './components/Map';

import './App.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100vh'
}));


function App() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={1.5} >
        <Grid item xs={3} >
          <Item><Sidebar /></Item>
        </Grid>
        <Grid item xs={9}>
          <Item><Map /></Item>
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  )
}

export default App
