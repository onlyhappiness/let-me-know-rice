import { AppBar, styled, Toolbar } from "@mui/material";
import React from "react";

const SIDEBAR_WIDTH = 260;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "gray",
  color: "white",

  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${SIDEBAR_WIDTH + 1}px)`,
  },
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default ({ isSidebarOpen }: { isSidebarOpen: () => void }) => {
  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <div
          onClick={isSidebarOpen}
          style={{
            cursor: "pointer",
          }}
        >
          사이드바
        </div>
      </HeaderToolbar>
    </HeaderAppBar>
  );
};
