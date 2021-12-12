import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Modal from './Modal'

import './css/sidebar.scss'

function Sidebar() {

  const [modal, setModal] = useState(false);

  return (
    <div className="sidebar">
      <Accordion className="overlay">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >
          <Typography style={{
            color: 'white'
          }}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            color: 'white'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography >Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* <button onClick={()=> {
        setModal(!modal)
      }}>모달</button>
      {
        modal === true
        ? (<Modal/>)
        : null
      } */}
      {/* <img className="phoneImage" alt="iPhone_01" src="asset/images/overlay.jpg" /> */}
    </div>
  )
}

export default Sidebar
