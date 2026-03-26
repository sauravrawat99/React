import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";

// method 1 for routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "Dashboard", element: <Dashboard /> },
//       {
//         path: "profile/:id",
//         element: <Profile />,
//       },
//     ],
//   },
//   { path: "*", element: <NotFound /> },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="dashboard" element={<Dashboard />} loader={userLoader} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

async function userLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
