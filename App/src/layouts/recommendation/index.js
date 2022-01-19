// import React from "react";
import { Grid } from "@mui/material";
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
              오늘의 메뉴는 이거다!
            </Grid>
          </Grid>
        </SuiBox>
      </DashboardLayout>
    </>
  );
}

export default Recommendation;
