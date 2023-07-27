import React from "react";
import { Header } from "../Overlay.js";
import "../App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";


export const Home = () => (
  <>
    <Canvas orthographic camera={{ zoom: 80 }}>
      <color attach="background" args={["#E9E9E9"]} />
      <ScrollControls damping={0.5} pages={1}>
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `50vh`,
              right: "20vw",
              fontSize: "25em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            CMCA
          </h1>
          <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
            CREATIVE CODING
          </h1>
          <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
            DATA
          </h1>
          <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
            BRANDING
          </h1>
          <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
            GRAPHIC DESIGN
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
