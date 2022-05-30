import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import DashBoardSider from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const { Header, Sider, Content } = Layout;

function DashboardLayout({ component }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  console.log(component);

  return (
    <Layout hasSider>
      <DashBoardSider collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <DashboardHeader collapsed={collapsed} toggle={toggle} />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {component}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
