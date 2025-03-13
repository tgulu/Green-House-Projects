import React from "react";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[4%]">{children}</main>
      <Home />
    </>
  );
};

export default Layout;
