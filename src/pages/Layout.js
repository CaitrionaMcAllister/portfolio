import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Overlay";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export { Layout };

function Header() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export { Header };
