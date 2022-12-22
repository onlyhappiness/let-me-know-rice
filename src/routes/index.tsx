import { Navigate, useRoutes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import OverView from "../pages/@main/OverView";

export default function Router() {
  const dashboard = [
    {
      path: "/",
      element: <Navigate to="/dashboard/overview" replace />,
    },
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [
        {
          element: <Navigate to="/dashboard/overview" replace />,
          index: true,
        },
        {
          path: "overview",
          element: <OverView />,
        },
      ],
    },
  ];

  return useRoutes(dashboard);
}
