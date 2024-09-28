import { cn } from "@/shared";
import {
  HeartIcon,
  HouseIcon,
  MessageCircleIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/message",
    label: "커뮤니티",
    icon: <MessageCircleIcon />,
    // icon: <Icon name="MessageCircle"  />,
  },
  {
    to: "/search",
    label: "검색",
    icon: <SearchIcon />,
    //  icon: <Icon name="Search" />
  },
  {
    to: "/",
    label: "홈",
    icon: <HouseIcon />,
    // icon: <Icon name="House" />
  },
  {
    to: "/favorite",
    label: "즐겨찾기",
    icon: <HeartIcon />,
    // icon: <Icon name="Heart" />
  },
  {
    to: "/profile",
    label: "프로필",
    icon: <UserRoundIcon />,
    // icon: <Icon name="UserRound" />
  },
];

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bg-white border-t border-gray-200 sticky bottom-0 left-0 right-0">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1.5",
                isActive ? "text-blue-500" : "text-gray-500"
              )
            }
          >
            {item.icon}
            <span className={cn("text-xs")}>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
