import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" navbar bg-white w-screen h-14 flex justify-between items-center px-6">
      <div>
        <Button name={"click_me"} color="red" />
      </div>
      <div className="flex gap-2">
        <Button name={"click_me"} color="green" />
        <Button name={"click_me"} color="green" />
        <Button name={"click_me"} color="green" />
      </div>
    </div>
  );
};

export default Navbar;
