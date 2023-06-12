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
      <ScrollControls damping={1} pages={5}>
        <Scroll html style={{ width: "100%" }}>
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
            in coding and digital art. Through the fusion of design, technology,
            and art, I strive to create immersive and interactive experiences
            that challenge traditional notions of art. My expertise in creative
            coding allows me to transform raw data into visually stunning and
            thought-provoking works of art, while seamlessly integrating
            emerging technologies like virtual reality and augmented reality.
            <br />
            <br />
            With a deep commitment to pushing the boundaries of art in the
            digital age, I invite viewers to reimagine the potential of
            technology as a medium of artistic expression, provoking
            conversations about the interplay between art, design, and the
            ever-evolving digital landscape.
          </p>
          <a
            href="https://www.instagram.com/caitriona_mcallister/"
            style={{
              position: "absolute",
              top: `90vh`,
              left: "10vw",
              right: "10vw",
              fontSize: "20",
              color: "#ff0040",
            }}
          >
            Instagram: @caitriona_mcallister
          </a>
          <a
            href="/Contact"
            style={{
              position: "absolute",
              top: `96vh`,
              left: "10vw",
              right: "10vw",
              fontSize: "20",
              color: "#ff0040",
            }}
          >
            Email: caitriona.mcallister1@gmail.com
          </a>
          <a
            href="https://uk.linkedin.com/in/caitrionamcallister"
            style={{
              position: "absolute",
              top: `93vh`,
              left: "10vw",
              right: "10vw",
              fontSize: "20",
              color: "#ff0040",
            }}
          >
            Linkedin: Caitriona McAllister
          </a>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Header />
  </>
);
