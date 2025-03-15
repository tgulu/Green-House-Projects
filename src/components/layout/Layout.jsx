import React from "react";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-[5%] pt[3%]">{children}</main>
    </div>
  );
};
