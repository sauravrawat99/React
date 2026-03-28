import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
