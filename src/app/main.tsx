import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../shared/base.css";
import { ReactQueryProvider } from "./provider/query-client";
import { appRouter } from "./provider/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={appRouter()} />
      </GoogleOAuthProvider>
    </ReactQueryProvider>
  </StrictMode>
);
