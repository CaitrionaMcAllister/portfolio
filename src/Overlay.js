// import { Center } from "@react-three/drei";
import "./App.css";

import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/PlasitcVortex">PlasticVortex</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

function Credit() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="https://caitrionamcallister/Home"
        style={{ position: "absolute", top: 40, right: 90, fontSize: "13px" }}
      >
        CMCA
        <br />
        dev collective
      </a>
      <div
        style={{ position: "absolute", top: 40, right: 40, fontSize: "13px" }}
      >
        10/17/2021
      </div>
    </div>
  );
}

export { Credit };

function Overlay() {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        target: "_blank",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        rel: "noopener noreferrer",
      }}
    >
      <p className="App-enter">CAITRIONA</p>
      <a
        className="App-link"
        href="http://localhost:3000/Home"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENTER
      </a>
    </div>
  );
}

export { Overlay };

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        color: "#303030",
      }}
    >
      <a
        href="http://localhost:3000/Home"
        style={{ position: "absolute", top: 40, left: 30, fontSize: "13px" }}
      >
        HOME
      </a>
      {/* <a
        href="http://localhost:3000/PlasticVortex"
        style={{ position: "absolute", top: 40, left: 100, fontSize: "13px" }}
      >
        PLASTIC VORTEX
      </a> */}
      <a
        href="http://localhost:3000/Projects"
        style={{ position: "absolute", top: 40, right: 150, fontSize: "13px" }}
      >
        PROJECTS
      </a>
      <a
        href="http://localhost:3000/Contact"
        style={{ position: "absolute", top: 40, right: 30, fontSize: "13px" }}
      >
        CONTACT
      </a>
      <a
        href="http://localhost:3000/Home"
        style={{
          position: "absolute",
          bottom: 40,
          right: 30,
          fontSize: "13px",
        }}
      >
        CMCA
      </a>
    </div>
  );
}

export { Header };
