import React from "react";
import { Button, Card, List, Typography } from "antd";
import { useNotice } from "../../hooks/notice.query";

const { Title } = Typography;

export default function NoticeOverview() {
  const { data } = useNotice();

  return (
    <Card style={{ padding: "15px 40px", borderRadius: 30 }}>
      <Title
        style={{
          margin: 0,
        }}
        level={3}
      >
        Notice
        {/* 공지사항 */}
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: any) => {
          return (
            <List.Item>
              <List.Item.Meta
                title={<div style={{ fontSize: "16px" }}>{item?.title}</div>}
                description="2023.03.26"
              />
            </List.Item>
          );
        }}
      />
      <Button
        type="primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          width: "100%",
          padding: 20,
          //   background: "#e6e6e6",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        자세히 보기
      </Button>
    </Card>
  );
}
