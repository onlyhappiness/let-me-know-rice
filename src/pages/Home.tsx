import React from "react";

import StoreOverview from "../components/home/StoreOverview";
import ReviewOverview from "../components/home/ReviewOverview";
import NoticeOverview from "../components/home/NoticeOverview";

export default function Home() {
  return (
    <div>
      <StoreOverview />

      <ReviewOverview />

      <div style={{ padding: 10 }}>
        <NoticeOverview />
      </div>
    </div>
  );
}
