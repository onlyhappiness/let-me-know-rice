/* eslint-disable */
import React from "react";

import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";

import "./styles/dashboard-sider.css";

const { Sider } = Layout;
const { Title } = Typography;

import {
  HomeOutlined,
  LikeOutlined,
} from "@ant-design/icons";

function DashboardSidebar() {
  const routesItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <LikeOutlined />,
      label: "Recommend",
    },
  ];

  return (
    <>
      {/* <div className='logo'>로고 넣넣</div> */}

      <div className="logo">
        {/* <Title level={4} className="logo_title">
            밥 줘
          </Title> */}
      </div>

      {/* FIXME: Menu */}
      <Menu
        // theme="dark"
        // mode="inline"
        defaultSelectedKeys={["1"]}
        items={routesItems}
        style={{
          backgroundColor: "#C8FCEA",
        }}
      >
        {/* <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item> */}
      </Menu>
    </>
  );
}

export default DashboardSidebar;
