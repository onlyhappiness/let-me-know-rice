// import React from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

function View() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMaps = async () => {
  //     try {
  //       // setError(null);
  //       // setLoading(true);
  //       const response = await axios.get(
  //         `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API}&libraries=services,clusterer`
  //       );
  //       return response;
  //     } catch (error) {
  //       // setError(error);
  //       console.log(error);
  //     }
  //     // setLoading(false);
  //   };
  //   fetchMaps();
  // }, []);

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
          <Grid container>
            <Grid item xs={12}>
              <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
              >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                  <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
              </Map>
            </Grid>
          </Grid>
        </SuiBox>
      </DashboardLayout>
    </>
  );
}

export default View;
