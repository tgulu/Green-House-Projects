import React from "react";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="py-10 px-6">
        <div className="max-w-6xl mx-auto mt-10 text-center text-black text-sm gap-3.5">
          <div className="flex items-center justify-center">
            <p className="">
              <a
                href="https://www.instagram.com/cashgreeen/"
                className="text-black hover:text-indigo-600 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Cash Green </span>
                <FaInstagram className="mx-1" size={24} />
              </a>
            </p>
            <span className="text-lg text-gray-400 mx-0.5">|</span>
            <p>
              <a
                href="https://www.instagram.com/greenhouseproject.btn/"
                className="text-black hover:text-indigo-600 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-0.5">Green House Project </span>
                <FaInstagram className="mx-1" size={24} />
              </a>
            </p>
          </div>
          <div>
            <p className="mt-1">© Green House Project 2025.</p>
            <p className="mt-1">
              Design & Build by{" "}
              <a
                href="https://websiteby.thabogulu.com/"
                className="text-black hover:text-indigo-600 inline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gulu
              </a>
            </p>
          </div>
          {/* <div className="mt-1">
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div> */}
        </div>
      </footer>
    </>
  );
};
