import React from "react";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="md:mt-[1.5%] xl:mt-[2.5%] ">{children}</main>
    </div>
  );
};
