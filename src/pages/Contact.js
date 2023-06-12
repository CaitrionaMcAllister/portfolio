import React from "react";
import { Canvas } from "@react-three/fiber";
import { Header } from "../Overlay.js";
import { ScrollControls, Scroll } from "@react-three/drei";
// import "../App.css";

export const Contact = () => (
  <>
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ScrollControls damping={1} pages={2}>
        <Scroll html style={{ width: "100%" }}>
          <div>
            <h1
              style={{
                position: "absolute",
                top: `15vh`,
                left: "10vw",
                fontSize: "20",
                // transform: `translate3d(0,-100%,0)`,
                color: "#ff0040",
              }}
            >
              HI I'M CAITRIONA!
            </h1>
            <p
              style={{
                position: "absolute",
                top: `27vh`,
                left: "10vw",
                right: "10vw",
                fontSize: "20",
                fontFamily: "halyard-display",
                // transform: `translate3d(0,-100%,0)`,
                color: "#303030",
              }}
            >
              Hi I'm <b>Caitríona!</b> I am a creative technologist specialising
              in coding and digital art. Through the fusion of design,
              technology, and art, I strive to create immersive and interactive
              experiences that challenge traditional notions of art.
              <br />
              <br />
              Let's grab a coffee and chat.
            </p>
            <a
              href="https://www.instagram.com/caitriona_mcallister/"
              style={{
                position: "absolute",
                top: `50vh`,
                left: "10vw",
                right: "10vw",
                fontSize: "20",
                color: "#ff0040",
              }}
            >
              Instagram: @caitriona_mcallister
            </a>
            <a
              href="https://uk.linkedin.com/in/caitrionamcallister"
              style={{
                position: "absolute",
                top: `55vh`,
                left: "10vw",
                right: "10vw",
                fontSize: "20",
                color: "#ff0040",
              }}
            >
              Linkedin: Caitriona McAllister
            </a>
            <a
              href="/Contact"
              style={{
                position: "absolute",
                top: `60vh`,
                left: "10vw",
                right: "10vw",
                fontSize: "20",
                color: "#ff0040",
              }}
            >
              Email: caitriona.mcallister1@gmail.com
            </a>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
