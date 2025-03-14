import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { navBar } from "../assets/data/data";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-screen  h-[9.5vh] md:shadow-lg bg-[#e3e3e3] text-[#015939;] text-2xl ">
      {/* {desktop} */}

      <div className="hidden md:flex justify-between px-2 p-2">
        <div className="logo flex">
          <div>
            <img src={logo} alt="logo" width="50px" height="50px" />
          </div>
          <h2 className="text-xl font-lg ml-4 mt-2.5 ">Green House Projects</h2>
        </div>

        {/* navlinks  */}
        <div className="menu">
          <ul className="flex">
            {navBar.map((list, i) => (
              <li
                className={`mx-1 mt-2.5 py-1.5 ml-5 text-sm ${activeNavLink}`}
                key={i}
              >
                <NavLink to={list.path}>{list.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* {mobile} */}
      <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
        {/* {logo} */}
        <Link to={"/"} className="flex items-center gap-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="46.5px" height="46.5px" />
            </div>
            <h2 className="text-2xl font-lg ml-4 mt-1.5 pr-1.5 ">
              Green House Projects
            </h2>
          </div>
        </Link>

        <div>
          {isMenu && (
            <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full">
              <ul className="flex flex-col">
                {navBar.map((list, i) => (
                  <li
                    className={`mx-2 mt-2.5 py-1.5 ml-5 text-xs ${activeNavLink}`}
                    key={i}
                  >
                    <NavLink to={list.path}>{list.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <AiOutlineMenu size={22} onClick={() => setIsMenu(!isMenu)} />
        </div>
      </div>
    </header>
  );
};
