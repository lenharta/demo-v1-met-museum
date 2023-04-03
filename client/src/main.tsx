import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./scss/_main.scss";
import { HomePage, VisitPage } from "./routes";

const ROUTER = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>App Not Found.</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/visit", element: <VisitPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);

// https://www.ibm.com/design/language/static/IBM_Security_Threat-Intel-Dash-6c49b906d9c848aad3be28e074694aa8.mp4
// https://www.ibm.com/design/language/static/IBM_Security_Cloud-16606aefd6774c4bad89fb6e495e1265.mp4
