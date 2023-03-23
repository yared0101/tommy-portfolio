import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


function Navbar() {
  return (
    <div className="flex flex-col bg-primary min-h-full text-secondary relative">
      <div className="sticky top-0 z-30" >
        <Header />
      </div>
      <div className="flex-1 flex flex-col z-10">
        <Outlet />
      </div>
      <div className="text-center">
        <p className="py-2 text-secondary/30 text-[12px]">Really good designers @ 2022. All rights reserved</p>
      </div>
    </div>
  )
}

export default Navbar;