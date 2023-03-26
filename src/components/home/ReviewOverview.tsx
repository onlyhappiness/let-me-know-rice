import { Card, Typography } from "antd";
import React from "react";

const { Title } = Typography;

export default function ReviewOverview() {
  return (
    <div>
      <Title level={4} style={{ marginBottom: 20 }}>
        추천 리뷰
      </Title>
    </div>
  );
}
