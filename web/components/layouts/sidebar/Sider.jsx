import React from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import Menuitems from "./MenuItems";
import SidebarContent from "./SidebarContent";

const Sider = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  // 사이즈
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            backgroundColor: "#F0F2F2",
            // p: 2,
          },
        }}
      >
        {/* <Box sx={{ p: 2 }}>사이드바 나와</Box> */}

        <SidebarContent onSidebarClose={onSidebarClose} />
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
          backgroundColor: "#F0F2F2",
          // p: 2,
        },
      }}
      variant="temporary"
    >
      {/* <Box sx={{ p: 2 }}>사이드바 나와</Box> */}
      <SidebarContent onSidebarClose={onSidebarClose} />
    </Drawer>
  );
};

export default Sider;
