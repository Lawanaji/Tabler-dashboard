import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import avatar from "../../../assets/img/—Pngtree—vector avatar icon_4013749.png";
import { Bell, List, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Header = ({ handleToggler, showNavigation }) => {
  const [toggleProfile, setToggleProfile] = useState(false);
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
            <Link
              to={"https://github.com/Lawanaji/Tabler-dashboard"}
              className="text-sm md:text-base font-semibold border-blue-500 border-2 rounded-md py-1 px-3 text-blue-500 transition duration-200"
            >
              Source Code
            </Link>

            <div className="relative hidden md:block">
              <Bell size={30} className="text-gray-700" />
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
            </div>
            <button
              onClick={() => setToggleProfile(!toggleProfile)}
              className="flex items-center"
            >
              <span className="w-[40px] h-[40px] p-1 rounded-full">
                <img src={avatar} alt="" />
              </span>
              <div>
                <h3>Jane Pearson</h3>
                <p>Administrator</p>
              </div>

              {toggleProfile && (
                <div className="w-[200px] h-[200px] shadow-lg rounded p-5 text-start bg-white absolute z-50 top-16">
                  <ul className="flex flex-col justify-start gap-1 text-base">
                    <Link>Status</Link>
                    <Link>Profile</Link>
                    <Link>Feedback</Link>
                    <Link>Status</Link>
                    <hr />
                    <Link> Settings </Link>
                    <Link>Logout</Link>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
