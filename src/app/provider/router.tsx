import {
  CommunityPage,
  FavoritePage,
  HomePage,
  ProfilePage,
  SearchPage,
} from "@/pages";

import { MainLayout } from "@/widgets";

import { createBrowserRouter } from "react-router-dom";

export function appRouter() {
  return createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/community",
          element: <CommunityPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/favorite",
          element: <FavoritePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
}
