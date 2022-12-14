import { Navigate, useRoutes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/@main/Dashboard";
import Favorite from "../pages/@main/Favorite";
import Menu from "../pages/@main/Menu";
import MyInfo from "../pages/@main/MyInfo";
import Restaurant from "../pages/@main/Restaurant";

export default () => {
  const routes = useRoutes([
    {
      //   element: <DefaultLayout />,
      //   children: [
      //     { element: <Navigate to="/" />, index: true },
      //     { path: "recommendation-menu", element: <Menu /> },
      //     { path: "recommendation-restaurant", element: <Restaurant /> },
      //     { path: "favorite", element: <Favorite /> },
      //     { path: "my-info", element: <MyInfo /> },
      //   ],
      path: "app",
      element: <Dashboard />,
    },
  ]);

  return routes;
};
