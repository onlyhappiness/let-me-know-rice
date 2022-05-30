import Head from "next/head";
import React from "react";
import DashboardLayout from "../../components/dashboard/dashboard-layout";
import MapContent from "../../components/map/map-content";

const Map = () => {
  return (
    <>
      <Head>
        <title>지도 | Let Me Know Rice</title>
      </Head>
      <DashboardLayout component={<MapContent />} />
    </>
  );
};

export default Map;
