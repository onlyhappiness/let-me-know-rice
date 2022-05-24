import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import DashBoardSider from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";

const { Header, Sider, Content } = Layout;

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <DashBoardSider collapsed={collapsed} />

      <Layout className="site-layout">
        <DashboardHeader collapsed={collapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
