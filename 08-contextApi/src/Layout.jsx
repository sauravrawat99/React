import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [user, setUser] = useState({ name: "saurav", Login: true });
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
      <Footer user={user} />
    </>
  );
};

export default Layout;
