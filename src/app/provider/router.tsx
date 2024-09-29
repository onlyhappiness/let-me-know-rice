import {
  CommunityPage,
  FavoritePage,
  HomePage,
  ProfilePage,
  SearchPage,
} from "@/pages";
import MainLayout from "@/widgets/layout/ui/main-layout";

import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ROUTES } from "../lib/constant";

export function appRouter() {
  const routers: RouteObject[] = [
    {
      element: <MainLayout />,
      children: [
        {
          path: ROUTES.COMMUNITY,
          element: <CommunityPage />,
        },
        {
          path: ROUTES.SEARCH,
          element: <SearchPage />,
        },
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTES.FAVORITE,
          element: <FavoritePage />,
        },
        {
          path: ROUTES.PROFILE,
          element: <ProfilePage />,
        },
      ],
    },
  ];
  return createBrowserRouter(routers);
}
