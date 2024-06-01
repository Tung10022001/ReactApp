// src/components/TopBar.js
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-brown-700 text-white p-6 text-right flex items-center gap-6">
      {" "}
      {/* Set height and align items */}
      <div className="container mx-auto flex flex-wrap sm:flex-nowrap justify-end items-center gap-x-6 gap-y-2">
        <span className="text-xl font-semibold">Learning By Doing</span>{" "}
        {/* Increased font size and weight */}
        <span className="text-xl font-semibold">
          <i className="fas fa-phone"></i> 0938 205 966
        </span>{" "}
        {/* Increased font size and weight */}
        <span className="text-xl font-semibold">
          <i className="fas fa-envelope"></i> quangcao@ispace.edu.vn
        </span>{" "}
        {/* Increased font size and weight */}
      </div>
    </div>
  );
};

export default TopBar;
