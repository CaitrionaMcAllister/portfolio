import React from "react";
import { Header } from "../Overlay.js";
import "../App.css";
import Marquee from "react-fast-marquee";
import img10 from '../components/websiteImagesHome/10.png'
// import img from '../components/websiteImagesHome/2.png'

// import { Canvas } from "@react-three/fiber";
// import { ScrollControls, Scroll } from "@react-three/drei";


export const Home = () => (
  <>
    <Header />
    <Marquee direction="up" gradientWidth="200">
      <div>
        <img src={img10} alt=""/>
      </div>
    </Marquee>
  </>
);
