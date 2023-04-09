import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./scss/_main.scss";
import { Directory, Home, Visit } from "./routes";
import StateProvider from "./app/StateStore";

const ROUTER = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>App Not Found.</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/visit", element: <Visit /> },
      { path: "/directory", element: <Directory /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={ROUTER} />
    </StateProvider>
  </React.StrictMode>
);
