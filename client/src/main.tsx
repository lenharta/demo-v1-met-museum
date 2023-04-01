import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./scss/_main.scss";
import { IndexRoute, VisitRoute } from "./routes";

const ROUTER = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>App Not Found.</h1>,
    children: [
      { index: true, element: <IndexRoute /> },
      { path: "/visit", element: <VisitRoute /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
