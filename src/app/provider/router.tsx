import { createBrowserRouter } from "react-router-dom";

export function appRouter() {
  return createBrowserRouter([
    { path: "/", element: <div>Home</div> },
    { path: "/about", element: <div>About</div> },
  ]);
}
