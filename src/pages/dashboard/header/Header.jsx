import React from "react";
import logo from "../../../assets/logo.svg";
import avatar from "../../../assets/img/—Pngtree—vector avatar icon_4013749.png";
import { Bell, List, X } from "@phosphor-icons/react";

const Header = ({ handleToggler, showNavigation }) => {
  return (
    <header className="container mx-auto py-2">
      <div className="w-full flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-32 md:w-40" />

        <div className="flex justify-start items-center gap-4">
          {showNavigation ? (
            <X
              size={28}
              color="#333333"
              weight="regular"
              className="inline-block md:hidden cursor-pointer"
              onClick={handleToggler}
            />
          ) : (
            <List
              size={28}
              color="#333333"
              weight="regular"
              className="inline-block md:hidden cursor-pointer"
              onClick={handleToggler}
            />
          )}

          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <button className="text-sm md:text-base font-semibold border-blue-500 border-2 rounded-md py-1 px-3 text-blue-500 transition duration-200">
              Source Code
            </button>

            <div className="relative hidden md:block">
              <Bell size={30} className="text-gray-700" />
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
            </div>
            <button className="flex items-center">
              <span className="w-[40px] h-[40px] p-1 rounded-full">
                <img src={avatar} alt="" />
              </span>
              <div>
                <h3>Jane Pearson</h3>
                <p>Administrator</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
