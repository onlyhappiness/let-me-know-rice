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
          },
        }}
      >
        {/* {SidebarContent} */}
        사이드바 나와
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
        },
      }}
      variant="temporary"
    >
      {/* {SidebarContent} */}
      사이드바 나와
    </Drawer>
  );
};

export default Sider;
