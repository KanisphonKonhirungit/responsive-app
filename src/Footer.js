import React from "react";

const CustomFooter = () => {
  return (
    <div className="bg-black d-flex justify-start align-items-center">
      <div className="logo">
        <img
          src="/images/SOne_index_logos.png"
          alt="S-ONE Logo"
          style={{ height: "50px", backgroundColor: "white" }}
        />
      </div>
      <div className="nav-links text_white13">
        <text className="text-[12px]">Copyright © 2014</text>
      </div>
    </div>
  );
};

export default CustomFooter;
