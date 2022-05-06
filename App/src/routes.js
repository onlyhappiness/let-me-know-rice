import {
  HomeOutlined,
  LikeOutlined,
} from "@ant-design/icons";

const routesItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
    href: "/",
  },
  {
    key: "2",
    icon: <LikeOutlined />,
    label: "Recommend",
    href: "/like",
  },
];

export default routesItems;
