/* eslint-disable */
import React, { useState } from "react";

import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";

import "./styles/dashboard-sider.css";

const { Sider } = Layout;
const { Title } = Typography;

import routes from "./routes";

import {
  HomeOutlined,
  LikeOutlined
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('Recommend', 'like', <LikeOutlined />),
];

function DashboardSidebar() {
  const [routesItems, setRoutesItems] =
    useState(routes);

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <div
        className="logo"
        style={{
          background: "grey",
          padding: "30px 0px",
        }}
      >
        로고
      </div>
      {/* FIXME: Menu */}
      {/* <Menu
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor: "#C8FCEA",
        }}
        onClick={handleMenuItem}
      >
        <Menu.Item key={1}>1</Menu.Item>
        <Menu.Item key={2}>2</Menu.Item>
        <Menu.Item key={3}>3</Menu.Item>
        <Menu.Item key={4}>4</Menu.Item>
      </Menu> */}

      <Menu
        onClick={onClick}
        defaultSelectedKeys={["home"]}
        mode="inline"
        items={items}
        style={{
          backgroundColor: "#C8FCEA",
        }}
      />
    </>
  );
}

export default DashboardSidebar;
