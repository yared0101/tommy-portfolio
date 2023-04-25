import React from "react";
import { Outlet } from "react-router-dom";


function Navbar() {
  return (
    <div className="flex flex-col bg-primary min-h-full text-secondary relative !min-w-[400px]">
      <div className="flex-1 flex flex-col z-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar;