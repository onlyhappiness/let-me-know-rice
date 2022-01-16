// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import View from "layouts/view";

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
    name: "View",
    key: "view",
    route: "/view",
    icon: <Shop size="12px" />,
    component: View,
    noCollapse: true,
  },
];

export default routes;
