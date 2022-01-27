// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Map from "layouts/map";
import Recommendation from "layouts/recommendation";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";

// const routes = [
//   {
//     type: "collapse",
//     name: "Dashboard",
//     key: "dashboard",
//     route: "/dashboard",
//     icon: <Shop size="12px" />,
//     component: Dashboard,
//     noCollapse: true,
//   },
// ];

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Map",
    key: "map",
    route: "/map",
    icon: <Shop size="12px" />,
    component: Map,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Recommendation",
    key: "recommendation",
    route: "/recommendation",
    icon: <Shop size="12px" />,
    component: Recommendation,
    noCollapse: true,
  },
];

export default routes;
