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
    <header className="fixed top-0 left-0 z-50 w-screen bg-header text-[#015939] text-2xl ">
      {/* {desktop} */}
      <div className="hidden md:flex justify-between items-center px-2 py-2 h-[6.2vh] xl:h-[5.2vh] md:shadow-lg">
        <div className="logo flex items-center ">
          <img src={logo} alt="logo" width="40px" height="40px" />
          <h2 className="text-xl font-lg ml-4">Green House Projects</h2>
        </div>

        {/* navlinks */}
        {/* <div className="menu">
          <ul className="flex">
            {navBar.map((list, i) => (
              <li
                className={`mx-1 py-1.5 ml-5 text-sm ${activeNavLink}`}
                key={i}
              >
                <NavLink to={list.path}>{list.name}</NavLink>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* {mobile} */}
      <div className="flex items justify-between md:hidden h-full px-2 ">
        {/* {logo} */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/logo.jpg" alt="logo" width="46.5px" height="46.5px" />
          <h2 className="text-2xl font-lg ml-8">Green House Projects</h2>
        </Link>

        <div>
          {isMenu && (
            <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col h-screen absolute top-11 left-0 w-full">
              {/* <ul className="flex pt-1 flex-col items-center gap-y-20 mt-16 h-screen">
                {navBar.map((list, i) => (
                  <li
                    className={`mx-2 py-1.5 mt-5 text-3xl ${activeNavLink}`}
                    key={i}
                  >
                    <NavLink to={list.path} onClick={handleClick}>
                      {list.name}
                    </NavLink>
                  </li>
                ))}
              </ul> */}
            </div>
          )}
          {/* <AiOutlineMenu size={22} onClick={handleClick} /> */}
        </div>
      </div>
    </header>
  );
};
