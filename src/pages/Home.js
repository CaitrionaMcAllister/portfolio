import React from "react";
import { Header } from "../Overlay.js";
import "../App.css";
import Marquee from "react-fast-marquee";
import img10 from '../components/websiteImagesHome/10.png'
import img11 from '../components/websiteImagesHome/11.png'

// import { Canvas } from "@react-three/fiber";
// import { ScrollControls, Scroll } from "@react-three/drei";


export const Home = () => (
  <>
    <Header />
    <Marquee direction="up" gradient="true">
      <div className="imageWrapper">
        <img src={img10} alt=""/>
      </div>
      <div className="imageWrapper">
        <img src={img11} alt=""/>
      </div>
    </Marquee>
  </>
);
