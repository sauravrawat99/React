import React from "react";

const Button = ({ name, color = "blue", onClick }) => {
  const styles = {
    blue: "bg-blue-500/20 border-blue-400 hover:bg-blue-500/30",
    green: "bg-green-500/20 border-green-400 hover:bg-green-500/30",
    red: "bg-red-500/20 border-red-400 hover:bg-red-500/30",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-white backdrop-blur-md border
      shadow-lg hover:scale-105 transition duration-300
      ${styles[color] || styles.blue}`}
    >
      {name}
    </button>
  );
};

export default Button;
