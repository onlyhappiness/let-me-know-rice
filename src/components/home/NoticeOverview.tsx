import React from "react";
import { Card, List, Typography } from "antd";

const { Title } = Typography;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export default function NoticeOverview() {
  return (
    <Card style={{ padding: 15, borderRadius: 30 }}>
      <Title level={3}>Notice</Title>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={<Title level={5}>{item.title}</Title>}
              description="2023.03.26"
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
