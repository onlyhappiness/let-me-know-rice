import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <Layout
          style={{
            marginLeft: 240,
            background: "#f6f6f6",
            height: "100%",
          }}
        >
          <Header />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
