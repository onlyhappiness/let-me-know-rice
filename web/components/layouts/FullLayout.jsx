import React, { useState } from "react";

import { Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import Sider from "./sidebar/Sider";

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 64px;
  width: 100%;
  padding: 20px 10px;
`;

const FullLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <MainWrapper>
        <Sider />
        <PageWrapper>
          <Container sx={{ paddingTop: "20px" }}>
            <Box
            //  sx={{ minHeight: "calc(100vh - 170px)" }}
            >
              {children}
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </>
  );
};

export default FullLayout;
