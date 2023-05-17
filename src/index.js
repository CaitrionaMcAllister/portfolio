import React from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Logo } from "@pmndrs/branding";
import Intro from "./Intro.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Intro>
      <App />
      {/* <Logo
      style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      color="white"
    /> */}
    </Intro>
  </React.StrictMode>
);
