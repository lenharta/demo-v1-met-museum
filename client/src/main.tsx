import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./scss/_main.scss";

import App from "./App";
import AppProvider from "./app/providers/AppProvider";
import { IndexRoute, VisitRoute } from "./routes";

function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="NotFoundTitle">Title</h1>
    </div>
  );
}

const ROUTES: RouteObject[] = [
  { index: true, element: <IndexRoute /> },
  { path: "/visit", element: <VisitRoute /> },
];

const ROUTEROBJECT = {
  element: <App />,
  errorElement: <NotFound />,
  children: ROUTES,
};

const ROUTER = createBrowserRouter([ROUTEROBJECT]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
