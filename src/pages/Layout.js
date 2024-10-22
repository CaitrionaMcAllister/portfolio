import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Overlay";
import { Header } from "../Overlay.js";

// function Layout() {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }

// export { Layout };

// function Header() {
//   return (
//     <>
//       <Header />

//       <Navbar />
//     </>
//   );
// }

export { Header };

import { Header } from "../Overlay.js";

export const Contact = () => (
  <>
    <Header />
  </>
);
