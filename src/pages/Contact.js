import React from "react";
import { Header } from "../Overlay.js";

export const Contact = () => (
  <>
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
        Hi I'm <b>Caitríona!</b> I am a creative technologist specialising in
        coding and digital art. Through the fusion of design, technology, and
        art, I strive to create immersive and interactive experiences that
        challenge traditional notions of art.
        <br />
        <br />
        Let's grab a coffee and chat.
      </p>
      <a
        href="https://www.instagram.com/caitriona_mcallister/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: `60vh`,
          left: "10vw",
          right: "10vw",
          fontSize: "20",
          color: "#ff0040",
        }}
      >
        Insta: @caitriona_mcallister
      </a>
      <a
        href="https://uk.linkedin.com/in/caitrionamcallister"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: `65vh`,
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
          top: `70vh`,
          left: "10vw",
          right: "10vw",
          fontSize: "20",
          color: "#ff0040",
        }}
      >
        Email: caitriona.mcallister1@gmail.com
      </a>
    </div>

    <Header />
  </>
);
