import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5 flex flex-col">

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-8">EMS</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-4">

        {/* Dashboard */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-3 py-2 rounded font-semibold"
              : "hover:bg-gray-800 px-3 py-2 rounded"
          }
        >
          📊 Dashboard
        </NavLink>

        {/* Employees */}
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-3 py-2 rounded font-semibold"
              : "hover:bg-gray-800 px-3 py-2 rounded"
          }
        >
          👨‍💼 Employees
        </NavLink>

        {/* Add Employee */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-3 py-2 rounded font-semibold"
              : "hover:bg-gray-800 px-3 py-2 rounded"
          }
        >
          ➕ Add Employee
        </NavLink>

      </nav>

      {/* Bottom section (optional) */}
      <div className="mt-auto text-sm text-gray-400">
        <p>© 2026 EMS</p>
      </div>
    </div>
  );
};

export default Sidebar;