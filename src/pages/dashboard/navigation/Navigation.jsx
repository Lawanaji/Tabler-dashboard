import {
  House,
  Package,
  CalendarBlank,
  File,
  CheckSquareOffset,
  ImageSquare,
  Files,
} from "@phosphor-icons/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ closeModal }) => {
  const navItems = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <House size={25} />,
    },
    {
      name: "Interface",
      path: "/interface",
      icon: <Package size={25} />,
    },
    {
      name: "Components",
      path: "/components",
      icon: <CalendarBlank size={25} />,
    },
    {
      name: "Pages",
      path: "/pages",
      icon: <File size={25} />,
    },
    {
      name: "Form",
      path: "/form",
      icon: <CheckSquareOffset size={25} />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <ImageSquare size={25} />,
    },
    {
      name: "Documentation",
      path: "/documentation",
      icon: <Files size={25} />,
    },
  ];

  const location = useLocation();

  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.path;
    return (
      <li>
        <Link
          to={item.path}
          className={`flex justify-start items-center gap-2 py-4 border-b-2 border-b-transparent font-medium rounded-none transition-colors duration-200 ${
            isActive
              ? " md:border-blue-500 text-blue-500"
              : "text-black md:hover:text-blue-500"
          }`}
          onClick={closeModal}
        >
          <span>{item.icon}</span>
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="container">
      <ul className="flex flex-col md:flex-row justify-start items-start md:items-center flex-wrap gap-6">
        {navItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
