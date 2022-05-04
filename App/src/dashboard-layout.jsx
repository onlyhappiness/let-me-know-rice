/* eslint-disable */
import React from "react";

import "antd/dist/antd.css";
import "./styles/dashboard-layout.css";
import { Layout, Menu } from "antd";
import DashboardSidebar from "./dashboard-sidebar";

const { Header, Sider, Content } = Layout;

function RootLayout() {
  return (
    <Layout className="dashboardLayout">
      <DashboardSidebar />

      <Layout className="site-layout">
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default RootLayout;
