import React, { useState } from "react";
import logo from "/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { navBar } from "../assets/data/data";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-screen bg-[#e3e3e3] text-[#015939] text-2xl">
      {/* {desktop} */}
      <div className="hidden md:flex justify-between items-center px-2 py-2 h-[6.2vh] xl:h-[5.2vh] md:shadow-lg transition-all duration-300">
        <div className="logo flex items-center">
          <img src={logo} alt="logo" width="40px" height="40px" />
          <h2 className="text-xl font-lg ml-4">Green House Projects</h2>
        </div>
      </div>
    </header>
  );
};
