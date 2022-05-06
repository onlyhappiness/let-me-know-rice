/* eslint-disable */
import React, { useState } from "react";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";

const { Header, Sider, Content } = Layout;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

function DashboardLayout() {
  const [collapsed, setcollapsed] =
    useState(true);
  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: "#C8FCEA",
        }}
      >
        <DashboardSidebar
        // routesItem={routesItem}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0px 24px",
          }}
        >
          {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          style={{
            margin: 16,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
