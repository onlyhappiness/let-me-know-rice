import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Grid } from "@mui/material";
import LocationOverview from "../components/home/LocationOverview";
import ShopListOverview from "../components/home/ShopListOverview";
import RecommendOverview from "../components/home/RecommendOverview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Let Me Know Rice</title>
      </Head>

      <>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12}>
            {/* TODO: 내 위치 */}
            <LocationOverview />
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* TODO: 음식점 리스트 */}
            <ShopListOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* TODO: 추천 음식점 */}
            <RecommendOverview />
          </Grid>
        </Grid>
      </>
    </>
  );
}
