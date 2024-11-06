import React, { useState } from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className="w-full relative">
      <div className=" w-full h-[60px]  border border-b-[#E5E8EC] shadow  transition-all">
        <Header
          handleToggler={() => setShowNavigation(!showNavigation)}
          showNavigation={showNavigation}
        />
      </div>
      <div
        className={`w-full h-0 md:h-[60px] overflow-hidden ${
          showNavigation ? "h-[400px]" : ""
        } border border-b-[#E5E8EC] shadow transition-all duration-500 ease-linear`}
      >
        <Navigation closeModal={() => setShowNavigation(!showNavigation)} />
      </div>
      <div className="container h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
