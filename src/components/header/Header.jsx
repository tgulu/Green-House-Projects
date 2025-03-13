import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { navBar } from "../assets/data/data";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-screen h-[10.5vh] md:shadow-lg bg-[#e3e3e3] text-green-300 text-2xl ">
        {/* {desktop} */}

        <div className="hidden md:flex justify-between px-2 p-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="50px" height="50px" />
            </div>
            <h2 className="text-2xl font-lg ml-4 mt-2.5 ">
              Green House Projects
            </h2>
          </div>

          {/* navlinks  */}
          <div className="menu">
            <ul className="flex">
              {navBar.map((list, i) => (
                <li
                  className={`mx-2 mt-2.5 py-1.5 ml-5 text-lg ${activeNavLink}`}
                  key={i}
                >
                  <NavLink to={list.path}>{list.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* {mobile} */}
          <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8"></div>
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="50px" height="50px" />
            </div>
            <h2 className="text-2xl font-lg ml-4 mt-2.5 ">
              Green House Projects
            </h2>
          </div>
          <div>
            {isMenu && (
              <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full">
                <ul className="flex flex-col">
                  {navBar.map((list, i) => (
                    <li
                      className={`mx-2 mt-2.5 py-1.5 ml-5 text-lg ${activeNavLink}`}
                      key={i}
                    >
                      <NavLink to={list.path}>{list.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
