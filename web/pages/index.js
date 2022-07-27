import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import { Grid } from "@mui/material";
import LocationOverview from "../components/home/LocationOverview";
import ShopListOverview from "../components/home/ShopListOverview";
import RecommendOverview from "../components/home/RecommendOverview";

import { loadShopLists } from "../actions/shop";

export default function Home() {
  const dispatch = useDispatch();
  const { shopLists } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(loadShopLists());
  }, []);

  console.log("상점 리스트들===============", shopLists);

  return (
    <>
      <Head>
        <title>Let Me Know Rice</title>
      </Head>

      <>
        <Grid container>
          <Grid item xs={12} lg={12}>
            {/* TODO: 내 위치 */}
            <LocationOverview />
          </Grid>
          <Grid item xs={12} lg={7}>
            {/* TODO: 음식점 리스트 */}
            <ShopListOverview />
          </Grid>
          <Grid item xs={12} lg={5}>
            {/* TODO: 추천 음식점 */}
            <RecommendOverview />
          </Grid>
        </Grid>
      </>
    </>
  );
}
