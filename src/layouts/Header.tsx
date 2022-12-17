import { AppBar, Box, Stack, styled, Toolbar } from "@mui/material";
import React from "react";

import { AiOutlineBars } from "react-icons/ai";
import Account from "../components/header/Account";

const SIDEBAR_WIDTH = 240;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 70;

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  color: "white",
  background: "white",
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
        <AiOutlineBars size={26} color="black" onClick={isSidebarOpen} />

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Account />
        </Stack>
      </HeaderToolbar>
    </HeaderAppBar>
  );
};
