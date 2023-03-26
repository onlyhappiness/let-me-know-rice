import React from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import MenuItems from "../components/MenuItems";

import { AiOutlineUser, AiOutlineSearch, AiOutlineBars } from "react-icons/ai";

const { Header } = Layout;

export default function MainHeader() {
  const navigate = useNavigate();

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "#f6f6f6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>로고</div>

        <MenuItems />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AiOutlineUser
            onClick={() => {
              navigate("/login");
            }}
            style={{ marginRight: 30 }}
            size={22}
          />
          <AiOutlineSearch style={{ marginRight: 30 }} size={22} />
          <AiOutlineBars size={22} />
        </div>
      </div>
    </Header>
  );
}
