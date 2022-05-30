import Head from "next/head";
import React from "react";
import DashboardLayout from "../../components/dashboard/dashboard-layout";
import LikeContent from "../../components/like/like-content";

const Like = () => {
  return (
    <>
      <Head>
        <title>추천 | Let Me Know Rice</title>
      </Head>
      <DashboardLayout component={<LikeContent />} />
    </>
  );
};

export default Like;
