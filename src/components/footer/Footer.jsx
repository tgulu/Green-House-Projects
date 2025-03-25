import React from "react";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="  py-10 px-6">
        {/* Contact and Copyright */}
        <div className="max-w-6xl mx-auto mt-10 text-center text-black text-sm">
          <div className="flex items-center justify-center">
            <p>
              <a
                href="https://www.instagram.com/cashgreeen/"
                className="text-black hover:text-indigo-600"
              >
                <FaInstagram size={24} />
                Cash Green
              </a>
            </p>
          </div>

          <p className="mt-4">
            © Green House Projects 2024. Design & Build by Gulu
          </p>
          <div className="mt-2">
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
