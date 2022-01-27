// import React from "react";
import { Divider, Grid } from "@mui/material";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Recommendation() {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
          <Grid container>
            <Grid item xs={12}>
              오늘의 메뉴는 이거다! 슬라이드 쇽쇽쇽 넘어가는 거 구현
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              오늘의 할인은 어떤걸 하는지, 어떤 메뉴가 할인하는 지 등등 줄줄
            </Grid>
          </Grid>
        </SuiBox>
      </DashboardLayout>
    </>
  );
}

export default Recommendation;
