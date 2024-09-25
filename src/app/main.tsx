import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../shared/base.css";
import { ReactQueryProvider } from "./provider/query-client";
import { appRouter } from "./provider/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={appRouter()} />
    </ReactQueryProvider>
  </StrictMode>
);
