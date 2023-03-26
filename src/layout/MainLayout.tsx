import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", minWidth: "1000px" }}>
        {/* <Sidebar /> */}
        <Layout
          style={{
            // marginLeft: 240,
            background: "##F1F3F7",
            height: "100%",
          }}
        >
          <MainHeader />
          <Content style={{ padding: 30 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
