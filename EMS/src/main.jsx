import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routing.jsx";
import { EmployeeProvider } from "./context/EmployeeContext";

createRoot(document.getElementById("root")).render(
  <EmployeeProvider>
    <RouterProvider router={Router} />
  </EmployeeProvider>,
);
