import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuItems() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Menu = [
    {
      key: "/home",
      label: (
        <div
          style={{ fontSize: "16px" }}
          onClick={() => {
            navigate("/home");
          }}
        >
          홈
        </div>
      ),
    },
    {
      key: "/community",
      label: (
        <div
          style={{ fontSize: "16px" }}
          onClick={() => {
            navigate("/community");
          }}
        >
          커뮤니티
        </div>
      ),
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {Menu.map((item) => {
        return (
          <div
            key={item.key}
            style={
              pathname === item.key
                ? {
                    marginRight: 40,
                    color: "skyblue",
                  }
                : {
                    marginRight: 40,
                    color: "black",
                  }
            }
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
