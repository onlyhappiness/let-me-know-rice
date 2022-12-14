import { Box, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarContents from "../components/SidebarContents";
import { useResponsive } from "../hooks/useResponsive";

const SIDEBAR_WIDTH = 260;

interface ISidebar {
  isSidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export default ({ isSidebarOpen, onCloseSidebar }: ISidebar) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  // 사이드바
  useEffect(() => {
    if (isSidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);

  return (
    <Box component={"nav"} sx={{ width: { lg: SIDEBAR_WIDTH } }}>
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: SIDEBAR_WIDTH,
            },
          }}
        >
          <SidebarContents />
        </Drawer>
      ) : (
        <Drawer
          open={isSidebarOpen}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: SIDEBAR_WIDTH },
          }}
        >
          <SidebarContents />
        </Drawer>
      )}
    </Box>
  );
};
