/* eslint-disable */
import React, { useState } from "react";

import "antd/dist/antd.css";
// import "./styles/dashboard-layout.css";
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
        <DashboardSidebar />
      </Sider>

      <Layout className="site-layout">
        {/* <DashboardHeader /> */}

        <Header>
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
        <Content>
          <div className="layout-background">
            Content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
