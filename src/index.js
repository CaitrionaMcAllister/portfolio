import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Logo } from "@pmndrs/branding";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Logo
      style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      color="white"
    />
  </React.StrictMode>
);
