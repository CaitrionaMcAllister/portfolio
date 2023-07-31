import React from "react";
import { Header } from "../Overlay.js";
import "../App.css";
// import { Canvas } from "@react-three/fiber";
// import { ScrollControls, Scroll } from "@react-three/drei";


export const Home = () => (
  <>
    {/* <Canvas orthographic camera={{ zoom: 80 }}>
      <color attach="background" args={["#E9E9E9"]} />
      <ScrollControls damping={0.5} pages={1}>
        <Scroll html style={{ width: "100%" }}>
          
        </Scroll>
      </ScrollControls>
    </Canvas> */}
    <Header />
  </>
);
