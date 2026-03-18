import React from "react";

const Card = (props) => {
  return (
    <div
      className="h-full w-1/4 flex flex-col justify-between bg-amber-200 rounded-4xl p-4"
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top */}
      <div className="rounded-full flex justify-center items-center font-medium bg-amber-50 h-10 w-10">
        {props.number}
      </div>

      {/* Bottom */}
      <div className="w-full flex justify-center items-end font-medium">
        <p className=" text-white  rounded-lg">
          {props.text || "Default Text"}
        </p>
      </div>
    </div>
  );
};

export default Card;
