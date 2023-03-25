import React from "react";
import { Col, Layout, Menu, MenuProps, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

import {
  AiFillHome,
  AiFillHeart,
  AiFillWechat,
  AiFillTrophy,
  AiFillIdcard,
} from "react-icons/ai";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: any,
  key: React.Key,
  icon: any,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as const;
}

const items: MenuItem[] = [
  getItem(<Link to="/home">홈</Link>, "/home", <AiFillHome size={20} />),
  getItem(
    <Link to="/community">커뮤니티</Link>,
    "/community",
    <AiFillWechat size={20} />
  ),
  getItem(
    <Link to="/review">리뷰</Link>,
    "/review",
    <AiFillTrophy size={20} />
  ),
  getItem(
    <Link to="/favorite">찜</Link>,
    "/favorite",
    <AiFillHeart size={20} />
  ),
  getItem(
    <Link to="/my-info">내 정보</Link>,
    "/my-info",
    <AiFillIdcard size={20} />
  ),
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Sider
      width={240}
      theme="light"
      style={{
        overflow: "auto",
        minHeight: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Row>
        <Col style={{ padding: 10, width: "100%" }}>
          <div style={{ background: "#f6f6f6", borderRadius: 10, padding: 20 }}>
            나와
          </div>
        </Col>
      </Row>

      <Menu defaultSelectedKeys={[`${pathname}`]} mode="inline" items={items} />
    </Sider>
  );
}
