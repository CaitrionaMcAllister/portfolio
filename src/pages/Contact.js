import React from "react";
import { Canvas } from "@react-three/fiber";
import { Header } from "../Overlay.js";
import { ScrollControls, Scroll } from "@react-three/drei";

export const Contact = () => (
  <>
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ScrollControls damping={3} pages={5}>
        <Scroll html style={{ width: "100%" }}>
          <h2
            style={{
              position: "absolute",
              top: `10vh`,
              left: "20vw",
              fontSize: "20",
              transform: `translate3d(0,-100%,0)`,
              color: "#ff0040",
            }}
          >
            ABOUT ME & LETS CHAT
          </h2>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
