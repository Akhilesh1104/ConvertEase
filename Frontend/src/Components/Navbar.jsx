import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-10 shadow-md h-16">
      <div className="flex justify-between">
        <h1 className="text-3xl cursor-pointer text-yellow-400 font-bold transform transition-transform duration-300 hover:scale-105">
          Convert<span className="text-blue-600">Ease</span>
        </h1>
        <div className="flex">
          <p className="p-2 pr-8 hover:text-blue-600 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            Pricing | Team
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md transform transition-transform duration-300 hover:scale-105">
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
