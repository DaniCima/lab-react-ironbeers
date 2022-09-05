import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function OutletComponent() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default OutletComponent;
