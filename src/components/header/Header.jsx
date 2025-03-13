import React from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { navBar } from "../assets/data/data";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-screen h-[10.5vh] md:shadow-lg bg-white text-green-300 text-2xl ">
        {/* {desktop} */}

        <div className="hidden md:flex justify-between px-2 p-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="50px" height="50px" />
            </div>
            <h2 className="text-2xl font-semibold ml-4 mt-2.5 ">Green House</h2>
          </div>
          {/* navlinks  */}
          <div className="menu">
            <ul className="flex">
              {navBar.map((list, i) => (
                <li className={`mx-5 py-2  ${activeNavLink}`} key={i}>
                  <NavLink to={list.path}>{list.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* {profile} */}
          <div className="profile flex items-center">
            <AiOutlineSearch />
          </div>
        </div>
      </header>
    </>
  );
};
