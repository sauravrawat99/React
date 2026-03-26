import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">MyApp</h1>

      {/* Links */}
      <div className="flex gap-6">
        
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile/id"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
          }
        >
          Profile
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;