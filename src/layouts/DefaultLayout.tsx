import { styled } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme/theme";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const LayoutContainer = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  // backgroundColor: theme.palette.secondary.main,
});

const LayoutWrap = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <LayoutContainer>
      <Header isSidebarOpen={() => setOpen(true)} />

      <Sidebar isSidebarOpen={open} onCloseSidebar={() => setOpen(false)} />

      <LayoutWrap>{children}</LayoutWrap>
    </LayoutContainer>
  );
};
