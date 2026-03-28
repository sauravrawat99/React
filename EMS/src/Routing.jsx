import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Ragister from "./components/auth/Ragister";
import Dashboard from "./pages/Dashboard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "add", element: <Ragister /> },
    ],
  },
]);
