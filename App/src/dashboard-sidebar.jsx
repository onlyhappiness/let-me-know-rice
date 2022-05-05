/* eslint-disable */
import React from "react";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

import "./styles/dashboard-sider.css";

const { Sider } = Layout;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function DashboardSidebar() {
  const routesItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  return (
    <>
      <Sider className="sider">
        {/* <div className="logo" /> */}
        <Menu
          // theme="dark"
          className="menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={routesItems}
        />
      </Sider>
    </>
  );
}

export default DashboardSidebar;
