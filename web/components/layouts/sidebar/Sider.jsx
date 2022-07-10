import React from "react";

import { Box, List, ListItemText } from "@mui/material";
import Menuitems from "./MenuItems";

const Sider = () => {
  return (
    <Box
      p={2}
      height="100%"
      sx={{
        border: "1px solid black",
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => {
            return (
              <List component="li" key={item.title}>
                <ListItemText>{item.title}</ListItemText>
              </List>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sider;
