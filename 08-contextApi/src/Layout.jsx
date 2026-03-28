import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { themeContext } from "./UserContext";

const Layout = () => {
  const [user, setUser] = useState({ name: "saurav", Login: true });
  const [the, setThe] = useState("light");
  return (
    <>
      <themeContext.Provider value={{ the, setThe }}>
        <Navbar user={user} setUser={setUser} />
        <Outlet context={{ user, setUser }} />
        <Footer user={user} />
      </themeContext.Provider>
    </>
  );
};

export default Layout;
