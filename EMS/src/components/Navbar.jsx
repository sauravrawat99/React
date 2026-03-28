import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      {/* Left - Page Title */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded outline-none"
        />

        {/* Notification */}
        <span className="text-xl cursor-pointer">🔔</span>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm font-medium">Saurav</span>
        </div>

        {/* Logout Button */}
        <NavLink
          to="/Login"
          className={({ isActive }) =>
            isActive ?
              "bg-gray-700 px-3 py-2 rounded font-semibold"
            : "hover:bg-gray-800 px-3 py-2 rounded"
          }
        >
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
