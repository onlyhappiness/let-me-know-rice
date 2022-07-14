import React, { useState } from "react";

import {
  Container,
  Box,
  useMediaQuery,
  experimentalStyled,
} from "@mui/material";
import Sider from "./sidebar/Sider";
import Header from "./Header/header";

const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = ({ children }) => {
  // 페이지 size
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <MainWrapper>
        <Header
          sx={{
            paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
            // backgroundColor: "#fbfbfb",
            backgroundColor: "#ffffff",
          }}
          toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />
        <Sider
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <PageWrapper>
          <Container
            maxWidth={false}
            sx={{
              paddingTop: "20px",
              paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
            }}
          >
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </>
  );
};

export default FullLayout;
